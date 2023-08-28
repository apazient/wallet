import React, { useEffect } from 'react';
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
import { selectAllCategories } from 'redux/TransactionCategories/selectors';
import { feachCategories } from 'redux/TransactionCategories/operations';

export const ModalEditTransaction = () => {
  const dispatch = useDispatch();
  const dataItem = useSelector(selectEditItem);
  const categories = useSelector(selectAllCategories);

  let isExpense = false;
  if (dataItem.type === 'EXPENSE') {
    isExpense = true;
  }

  useEffect(() => {
    dispatch(feachCategories());
  }, [dispatch]);

  const getCategoriName = () => {
    if (isExpense && categories.length) {
      const categ = categories.find(e => e.id === dataItem.categoryId);
      console.log(categ.name);
      return categ.name;
    }
  };

  const formik = useFormik({
    initialValues: {
      transactionDate: dataItem.transactionDate,
      amount: dataItem.amount,
      comment: dataItem.comment,
      categoryId: dataItem.categoryId,
      type: dataItem.type,
    },
    onSubmit: values => {
      if (isExpense) {
        values.amount = 0 - values.amount;
      }
      const transactionData = {
        updateData: values,
        transactionId: dataItem.id,
      };
      dispatch(updateTransaction(transactionData));
      dispatch(closeModal());
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
        <span style={!isExpense ? { color: 'red' } : null}>Income</span>
        <span>/</span>
        <span style={isExpense ? { color: 'red' } : null}>Expense</span>
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
          dispatch(closeModal());
        }}
      >
        Cancel
      </StyledButtonWhite>
    </FormikForm>
  );
};
