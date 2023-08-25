// Modal.js
import React, { useState } from 'react';
import { Formik } from 'formik';
import {
  ButtonStyle,
  FormikForm,
  Input,
  InputWrapper,
  StyledButton,
  StyledIncomeExpences,
  StyledTransaction,
} from './ModalEditTransaction.styled';
import * as yup from 'yup';

const dateNow = () => {
  const time = Date.now();
  const date = new Date(time);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
};

// const initialValues = {
//   number: '',
//   date: `${dateNow()}`,
//   text: '',
// };

const validationSchema = yup.object().shape({
  number: yup.number().required('Requited'),
  date: yup.date().required('Requited'),
  text: yup.string(),
});

export const ModalEditTransaction = () => {
  // if (!isOpen) {
  //   return null;
  // }

  const [date, setDate] = useState(dateNow());
  const [number, setNumber] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = values => {
    console.log(values);
  };

  return (
    <Formik validationSchema={validationSchema}>
      {() => (
        <FormikForm onSubmit={() => handleSubmit()}>
          <StyledTransaction>Edit transaction (income)</StyledTransaction>
          <StyledIncomeExpences>
            <p>Income</p>
            <p>/</p>
            <p>Expense</p>
          </StyledIncomeExpences>
          <InputWrapper>
            <Input
              name="number"
              placeholder="0.00"
              type="number"
              value={number}
              onChange={e => {
                setNumber(e.target.value);
              }}
            />
            <Input
              name="date"
              placeholder="2025-08-23"
              type="date"
              onChange={e => {
                setDate(e.target.value);
                console.dir(e.target.value);
              }}
              value={date}
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              name="text"
              placeholder="Comment"
              type="text"
              value={text}
              onChange={e => {
                setText(e.target.value);
              }}
            />
          </InputWrapper>
          <StyledButton type="submit">Save</StyledButton>
          <ButtonStyle onClick={() => console.log(dateNow())}>
            Cancel
          </ButtonStyle>
        </FormikForm>
      )}
    </Formik>
  );
};
