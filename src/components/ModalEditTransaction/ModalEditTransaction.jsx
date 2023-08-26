import Datetime from 'react-datetime';
import React, { useState } from 'react';
import { Formik, useFormik } from 'formik';
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

const dateNow = () => {
  const time = Date.now();
  const date = new Date(time);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
};

export const ModalEditTransaction = dataItem => {
  // if (!isOpen) {
  //   return null;
  // }

  const formik = useFormik({
    initialValues: {
      date: '',
      number: '',
      text: '',
    },
    onSubmit: values => {
      console.log('submit', values);
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: Yup.object().shape({
      number: Yup.number()
        .required('Required field!')
        .positive('The number must be positive!'),
      date: Yup.date()
        .required('Required field!')
        .max(new Date(), 'Date must be in the past!'),
      text: Yup.string(),
    }),
  });

  return (
    <FormikForm onSubmit={formik.handleSubmit}>
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
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.number && formik.errors.number ? (
          <div>{formik.errors.number}</div>
        ) : null}
        <Input
          name="date"
          placeholder="2025-08-23"
          type="date"
          value={formik.values.date}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.date && formik.errors.date ? (
          <div>{formik.errors.date}</div>
        ) : null}
      </InputWrapper>
      <InputWrapper>
        <Input
          name="text"
          placeholder="Comment"
          type="text"
          // value={text}
          onChange={e => {
            // setText(e.target.value);
          }}
        />
      </InputWrapper>
      <StyledButtonPerple type="submit" onClick={() => console.log('Submit')}>
        Save
      </StyledButtonPerple>
      <StyledButtonWhite onClick={() => console.log(dateNow())}>
        Cancel
      </StyledButtonWhite>
    </FormikForm>
  );
};
