import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { SpriteSVG } from 'pictures/SpriteSVG';
import {
  FormikForm,
  Input,
  InputWrapper,
  StyledButtonPerple,
  StyledButtonWhite,
  StyledCategory,
  StyledCloseIconEdit,
  StyledIncomeExpences,
  StyledP,
  StyledTransaction,
} from './ModalEditTransaction.styled';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { selectEditItem } from 'redux/Global/selectors';
import { closeModal } from 'redux/Global/globalSlice';
import { updateTransaction } from 'redux/TransactionsList/operations';
import { selectAllCategories } from 'redux/TransactionCategories/selectors';
import { feachCategories } from 'redux/TransactionCategories/operations';
import {
  StyledCalendarSvg,
  StyledCloseIcon,
  StyledDatatimeWrapper,
  StyledDatetime,
  StyledToggleTextExp,
  StyledToggleTextIncome,
  StyledToggleWrapper,
} from 'components/ModalAddTransaction/ModalAddTransaction.styled';
import { SelectExpenses } from 'components/ModalAddTransaction/Select';

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

  const handleDatetimeChange = (name, value) => {
    formik.handleChange({
      target: {
        name,
        value,
      },
    });
  };

  return (
    <FormikForm onSubmit={formik.handleSubmit}>
      <StyledCloseIconEdit
        onClick={() => {
          dispatch(closeModal());
        }}
      >
        <SpriteSVG name={'close'} />
      </StyledCloseIconEdit>
      <StyledTransaction>Edit transaction</StyledTransaction>
      <StyledIncomeExpences>
        <StyledToggleTextIncome style={isExpense ? { color: 'white' } : null}>
          Income
        </StyledToggleTextIncome>
        <StyledP>/</StyledP>
        <StyledToggleTextIncome style={!isExpense ? { color: 'white' } : null}>
          Expense
        </StyledToggleTextIncome>
      </StyledIncomeExpences>
      {isExpense && <StyledCategory>{getCategoriName()}</StyledCategory>}
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
        <StyledDatatimeWrapper>
          <StyledDatetime
            name="transactionDate"
            type="date"
            dateFormat="DD.MM.YYYY"
            timeFormat={false}
            value={formik.values.transactionDate}
            // onChange={formik.handleChange}
            onChange={value => handleDatetimeChange('transactionDate', value)}
            onBlur={formik.handleBlur}
            // closeOnSelect={true}
          ></StyledDatetime>
          <StyledCalendarSvg>
            <SpriteSVG name={'calendar'} />
          </StyledCalendarSvg>
        </StyledDatatimeWrapper>

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
