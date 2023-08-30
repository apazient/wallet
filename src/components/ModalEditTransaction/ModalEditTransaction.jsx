import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { SpriteSVG } from 'pictures/SpriteSVG';
import {
  FormikForm,
  Input,
  InputText,
  InputWrapper,
  StyledErrorMessage,
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
  StyledButtonAdd,
  StyledButtonCancel,
  StyledCalendarSvg,
  StyledDatatimeWrapper,
  StyledDatetime,
  StyledInputWrapper,
  StyledToggleText,
} from 'components/ModalAddTransaction/ModalAddTransaction.styled';
import { toast } from 'react-toastify';

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
      return categ.name;
    }
  };

  const formik = useFormik({
    initialValues: {
      transactionDate: dataItem.transactionDate,
      amount: Math.abs(dataItem.amount).toFixed(2),
      comment: dataItem.comment,
      categoryId: dataItem.categoryId,
      type: dataItem.type,
    },
    onSubmit: values => {
      isExpense && (values.amount = 0 - values.amount);
      const transactionData = {
        updateData: values,
        transactionId: dataItem.id,
      };
      dispatch(updateTransaction(transactionData));
      dispatch(closeModal());
    },
    validationSchema: Yup.object().shape({
      amount: Yup.number()
        .positive('Only possitive value')
        .required('Required field!'),
      transactionDate: Yup.date().required('Required field!'),
      comment: Yup.string(),
    }),
  });

  const handleDatetimeChange = (name, value) => {
    formik.handleChange({
      target: {
        name,
        value: value.format('YYYY-MM-DD'),
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
        <StyledToggleText style={!isExpense ? { color: '#FF868D' } : null}>
          Income
        </StyledToggleText>
        <StyledP>/</StyledP>
        <StyledToggleText style={isExpense ? { color: '#FF868D' } : null}>
          Expense
        </StyledToggleText>
      </StyledIncomeExpences>
      {isExpense && <StyledCategory>{getCategoriName()}</StyledCategory>}

      <InputWrapper>
        <StyledInputWrapper>
          <Input
            name="amount"
            type="number"
            value={formik.values.amount}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </StyledInputWrapper>

        {formik.touched.amount && formik.errors.amount ? (
          <div> {toast.error(formik.errors.amount)} </div>
        ) : null}
        <StyledDatatimeWrapper>
          <StyledDatetime
            name="transactionDate"
            type="date"
            dateFormat="DD.MM.YYYY"
            timeFormat={false}
            value={formik.values.transactionDate}
            onChange={value => handleDatetimeChange('transactionDate', value)}
            onBlur={formik.handleBlur}
          ></StyledDatetime>
          <StyledCalendarSvg>
            <SpriteSVG name={'calendar'} />
          </StyledCalendarSvg>
        </StyledDatatimeWrapper>

        {formik.touched.transactionDate && formik.errors.transactionDate ? (
          <StyledErrorMessage>
            {formik.errors.transactionDate}
          </StyledErrorMessage>
        ) : null}
      </InputWrapper>
      <InputWrapper>
        <InputText
          name="comment"
          placeholder="Comment"
          type="text"
          value={formik.values.comment}
          onChange={formik.handleChange}
        />
      </InputWrapper>
      <StyledButtonAdd type="submit">Save</StyledButtonAdd>
      <StyledButtonCancel
        onClick={() => {
          dispatch(closeModal());
        }}
      >
        Cancel
      </StyledButtonCancel>
    </FormikForm>
  );
};
