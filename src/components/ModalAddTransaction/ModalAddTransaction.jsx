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
import { selectIsSelect } from 'redux/TransactionCategories/selectors';
import { addTransaction } from 'redux/TransactionsList/operations';

const validationSchema = yup.object().shape({
  number: yup.number().required('Requited'),
  text: yup.string(),
});

const ModalAddTransaction = () => {
  const isExpense = useSelector(selectIsSelect);
  let type = 'INCOME';
  const cathegoryID = '063f1132-ba5d-42b4-951d-44011ca46262';

  // const [selectedDate, setSelectedDate] = useState(new Date());
  const dispatch = useDispatch();
  // {
  //   "transactionDate": "string",
  //   "type": "INCOME",
  //   "categoryId": "string",
  //   "comment": "string",
  //   "amount": 0
  // }
  const handleSubmit = values => {
    console.log(values);
    const body = {
      transactionDate: values.date,
      type,
      categoryId: cathegoryID,
      comment: values.text,
      amount: values.number,
    };
    console.log(body);
    if (isExpense) {
      type = 'EXPENSE';
    }
    console.log(values);
    dispatch(addTransaction(body));
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
            <StyledButtonCancel onClick={() => console.log('Hello')}>
              Cancel
            </StyledButtonCancel>
          </StyledButtonWrapper>
        </StyledForm>
      )}
    </Formik>
  );
};

export default ModalAddTransaction;
