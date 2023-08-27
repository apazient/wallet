import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import {
  FormikForm,
  Input,
  InputWrapper,
  StyledButtonPerple,
  StyledButtonWhite,
  StyledIncomeExpences,
  StyledTransaction,
} from './ModalEditTransaction.styled';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { selectEditItem } from 'redux/Global/selectors';
import { closeModal } from 'redux/Global/globalSlice';
import { updateTransaction } from 'redux/TransactionsList/operations';
import {
  selectChoosenCategorie,
  selectIsSelect,
} from 'redux/TransactionCategories/selectors';
import { feachCategories } from 'redux/TransactionCategories/operations';
import { showSelect } from 'redux/TransactionCategories/categoriesSlice';

export const ModalEditTransaction = () => {
  const isExpense = useSelector(selectIsSelect);
  const dispatch = useDispatch();
  const dataItem = useSelector(selectEditItem);
  const categories = useSelector(selectChoosenCategorie);

  const [category] = useState({
    value: dataItem.categoryId,
    label: '',
  });

  useEffect(() => {
    dispatch(feachCategories());
  }, [dispatch]);
  const getCategoriName = () => {
    if (isExpense) {
      const categ = categories.find(e => e.id === dataItem.categoryId);
      return categ.name;
    }
  };

  const formik = useFormik({
    initialValues: {
      transactionDate: dataItem.transactionDate,
      amount: dataItem.amount,
      comment: dataItem.comment,
      categoryId: category.value,
      type: dataItem.type,
    },
    onSubmit: values => {
      if (isExpense) {
        values.amount = 0 - values.amount;
        values.categoryId = category.value;
      }
      if (!isExpense) {
        values.categoryId = categories.id;
      }
      const transactionData = {
        updateData: values,
        transactionId: dataItem.id,
      };
      dispatch(updateTransaction(transactionData));
      dispatch(closeModal());
      dispatch(showSelect(false));
    },
    validationSchema: Yup.object().shape({
      amount: Yup.number()
        .required('Required field!')
        .positive('The number must be positive!'),
      transactionDate: Yup.date()
        .required('Required field!')
        .max(new Date(), 'Date must be in the past!'),
      comment: Yup.string(),
    }),
  });

  return (
    <FormikForm onSubmit={formik.handleSubmit}>
      <StyledTransaction>Edit transaction (income)</StyledTransaction>
      <StyledIncomeExpences>
        <label>
          <input
            type="radio"
            name="type"
            value="INCOME"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            onClick={() => {
              dispatch(showSelect(false));
            }}

            // {isExpense?null:checked}
          />
          Income
        </label>
        <span> / </span>
        <label>
          <input
            type="radio"
            name="type"
            value="EXPENSE"
            onChange={formik.handleChange}
            onClick={() => dispatch(showSelect(true))}
            onBlur={formik.handleBlur}
          />
          Expense
        </label>
      </StyledIncomeExpences>
      {isExpense && <div>{getCategoriName()}</div>}
      <InputWrapper>
        <Input
          name="amount"
          placeholder="0.00"
          type="number"
          value={formik.values.amount}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.amount && formik.errors.amount ? (
          <div>{formik.errors.amount}</div>
        ) : null}
        <Input
          name="transactionDate"
          placeholder="2025-08-23"
          type="date"
          value={formik.values.transactionDate}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.transactionDate && formik.errors.transactionDate ? (
          <div>{formik.errors.transactionDate}</div>
        ) : null}
      </InputWrapper>
      <InputWrapper>
        <Input
          name="comment"
          placeholder="Comment"
          type="text"
          value={formik.values.comment}
          onChange={formik.handleChange}
        />
      </InputWrapper>
      <StyledButtonPerple type="submit">Save</StyledButtonPerple>
      <StyledButtonWhite
        onClick={() => {
          dispatch(showSelect(false));
          dispatch(closeModal());
        }}
      >
        Cancel
      </StyledButtonWhite>
    </FormikForm>
  );
};
