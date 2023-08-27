import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import moment from 'moment';
import {
  StyledInputWrapper,
  StyledButtonAdd,
  StyledButtonCancel,
  StyledForm,
  StyledToggleWrapper,
  StyledInputComment,
  StyledInputValue,
  StyledTitle,
  StyledToggleTextExp,
  StyledToggleTextIncome,
  StyledCalendarSvg,
  StyledButtonWrapper,
  StyledDatetime,
  StyledInputWrapTab,
  StyledDatatimeWrapper,
} from './ModalAddTransaction.styled';
import * as yup from 'yup';
import { SpriteSVG } from 'pictures/SpriteSVG';
import { Switcher } from './Switcher';
import 'react-datetime/css/react-datetime.css';
import { useDispatch, useSelector } from 'react-redux';
import { SelectExpenses } from './Select';
import {
  selectAllCategories,
  selectChoosenCategorie,
  selectIsSelect,
} from 'redux/TransactionCategories/selectors';
import { addTransaction } from 'redux/TransactionsList/operations';
import { feachCategories } from 'redux/TransactionCategories/operations';

const validationSchema = yup.object().shape({
  number: yup.number().required('Requited'),
  text: yup.string(),
});

const ModalAddTransaction = () => {
  const isExpense = useSelector(selectIsSelect);

  const dispatch = useDispatch();

  const chosenCategoriList = useSelector(selectChoosenCategorie);

  useEffect(() => {
    dispatch(feachCategories());
  }, [dispatch]);

  const handleSubmit = values => {
    const { id, name, type } = chosenCategoriList;

    const newTransaction = {
      transactionDate: values.date,
      type,
      categoryId: id,
      comment: values.text,
      amount: values.number,
    };

    dispatch(addTransaction(newTransaction));
  };

  const isValidDate = currentDate => {
    return (
      currentDate.isBefore(StyledDatetime.moment()) ||
      currentDate.isSame(StyledDatetime.moment(), 'minute')
    );
  };

  return (
    <Formik
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      initialValues={{
        text: '',
        number: '',
        date: new Date(),
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
        setFieldValue,
      }) => (
        <StyledForm>
          <StyledTitle>Add transaction</StyledTitle>
          <StyledToggleWrapper>
            <StyledToggleTextIncome>Income</StyledToggleTextIncome>
            <Switcher />
            <StyledToggleTextExp>Expense</StyledToggleTextExp>
          </StyledToggleWrapper>
          {isExpense && <SelectExpenses />}
          <StyledInputWrapTab>
            <StyledInputWrapper>
              <StyledInputValue
                name="number"
                placeholder="0.00"
                type="number"
              />
            </StyledInputWrapper>
            <StyledDatatimeWrapper>
              <StyledDatetime
                name="date"
                type="date"
                value={values.date}
                dateFormat="DD.MM.YYYY"
                timeFormat={false}
                // onChange={dateFromValue => {
                //   console.log(dateFromValue);
                //   setFieldValue('date', dateFromValue);
                // }}
                // isValidDate={isValidDate}
                closeOnSelect={true}
              ></StyledDatetime>
              <StyledCalendarSvg>
                <SpriteSVG name={'calendar'} />
              </StyledCalendarSvg>
            </StyledDatatimeWrapper>
          </StyledInputWrapTab>

          <StyledInputWrapper>
            <StyledInputComment name="text" placeholder="Comment" type="text" />
          </StyledInputWrapper>
          <StyledButtonWrapper>
            <StyledButtonAdd type="submit">Add</StyledButtonAdd>
            <StyledButtonCancel onClick={() => {}}>Cancel</StyledButtonCancel>
          </StyledButtonWrapper>
        </StyledForm>
      )}
    </Formik>
  );
};

export default ModalAddTransaction;
