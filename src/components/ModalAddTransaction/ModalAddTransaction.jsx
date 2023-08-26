import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
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
} from './ModalAddTransaction.styled';
import * as yup from 'yup';
import { SpriteSVG } from 'pictures/SpriteSVG';
import { Switcher } from './Switcher';
import 'react-datetime/css/react-datetime.css';
import { useDispatch } from 'react-redux';
import { feachCategories } from 'redux/TransactionCategories/operations';

const validationSchema = yup.object().shape({
  number: yup.number().required('Requited'),
  text: yup.string(),
});

const ModalAddTransaction = () => {
  const [number, setNumber] = useState('');
  const [text, setText] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(feachCategories());
  }, [dispatch]);

  const handleSubmit = values => {
    console.log(values);
  };

  const isValidDate = currentDate => {
    return (
      currentDate.isBefore(StyledDatetime.moment()) ||
      currentDate.isSame(StyledDatetime.moment(), 'minute')
    );
  };

  return (
    <Formik validationSchema={validationSchema}>
      {() => (
        <StyledForm onSubmit={() => handleSubmit()}>
          <StyledTitle>Add transaction</StyledTitle>
          <StyledToggleWrapper>
            <StyledToggleTextIncome>Income</StyledToggleTextIncome>
            <Switcher />
            <StyledToggleTextExp>Expense</StyledToggleTextExp>
          </StyledToggleWrapper>
          <div>
            <StyledInputWrapper>
              <StyledInputValue
                name="number"
                placeholder="0.00"
                type="number"
                value={number}
                onChange={e => {
                  setNumber(e.target.value);
                }}
              />
            </StyledInputWrapper>
            <StyledDatetime
              value={selectedDate}
              dateFormat="DD.MM.YYYY"
              timeFormat={false}
              onChange={date => setSelectedDate(date)}
              isValidDate={isValidDate}
              closeOnSelect={true}
            ></StyledDatetime>
          </div>
          <StyledCalendarSvg>
            <SpriteSVG name={'calendar'} />
          </StyledCalendarSvg>
          <StyledInputWrapper>
            <StyledInputComment
              name="text"
              placeholder="Comment"
              type="text"
              value={text}
              onChange={e => {
                setText(e.target.value);
              }}
            />
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
