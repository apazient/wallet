// Modal.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {
  ButtonStyle,
  FormikForm,
  Input,
  InputWrapper,
  StyledButton,
  StyledIncomeExpences,
  StyledTransaction,
} from './ModalEditTransaction.styled';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
};

// const onSubmit = values => {
//   console.log('Form submitted with values:', values);
// };

// const validate = values => {
//   const errors = {};

//   if (!values.firstName) {
//     errors.firstName = 'Required';
//   }

//   if (!values.lastName) {
//     errors.lastName = 'Required';
//   }

//   if (!values.email) {
//     errors.email = 'Required';
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//     errors.email = 'Invalid email address';
//   }

//   return errors;
// };

export const ModalEditTransaction = () => {
  // if (!isOpen) {
  //   return null;
  // }

  const time = Date.now();
  console.log(time);

  return (
    <Formik initialValues={initialValues}>
      {() => (
        <FormikForm>
          <StyledTransaction>Edit transaction</StyledTransaction>
          <StyledIncomeExpences>
            <p>Income</p>
            <p>/</p>
            <p>Expense</p>
          </StyledIncomeExpences>
          <InputWrapper>
            <Input placeholder="Number" type="number"></Input>
            <Input placeholder="Date" type="date"></Input>
          </InputWrapper>
          <InputWrapper>
            <Input placeholder="Comment" type="text"></Input>
          </InputWrapper>
          <StyledButton>Save</StyledButton>
          <ButtonStyle onClick={console.log('_')}>Cancel</ButtonStyle>
        </FormikForm>
      )}
    </Formik>
  );
};
