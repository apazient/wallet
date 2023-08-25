import React, { useState } from 'react';

// AlexeyW
// AlexeyW@mail.com
// AlexW.com

import {
  FormikLoginForm,
  StyledButtonLog,
  StyledButtonReg,
  StyledDiv,
  StyledDivInputs,
  StyledDivItems,
  StyledDivSpriteSvgIcons,
  StyledDivSpriteSvgLogo,
  StyledErrorMessage,
  StyledH2,
  StyledInput,
  StyledLabels,
  StyledSectionForm,
} from './LoginForm.styled';
import { useDispatch, useSelector } from 'react-redux';

import { Formik, Field, Form, ErrorMessage } from 'formik';
import { loginThunk } from 'redux/Auth/operations';
import { SpriteSVG } from 'pictures/SpriteSVG';
import * as Yup from 'yup';
import { getIsLoading } from 'redux/Auth/selectors';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().min(6).max(12).required('Required'),
  });

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   const credentials = { email, password };
  //   dispatch(loginThunk(credentials))
  //     .unwrap()
  //     .then(res => {
  //       toast.success(`Hello, ${res.user.name}`);
  //     })
  //     .catch(err => {
  //       toast.error('Try another data!!');
  //     });
  // };

  const renderError = message => <p className="help is-danger">{message}</p>;
  return (
    <StyledSectionForm>
      <StyledDiv>
        <StyledDivItems>
          <StyledDivSpriteSvgLogo>
            <SpriteSVG name="logo" />
          </StyledDivSpriteSvgLogo>
          <StyledH2>Money Guard</StyledH2>
        </StyledDivItems>
        <Formik
          onSubmit={values => {
            dispatch(loginThunk(values));
          }}
          initialValues={{ password: '', email: '' }}
          validationSchema={validationSchema}
        >
          <FormikLoginForm>
            <StyledDivInputs>
              <StyledLabels>
                <StyledDivSpriteSvgIcons>
                  <SpriteSVG name="email" />
                </StyledDivSpriteSvgIcons>
                <StyledInput name="email" placeholder="E-email" type="email" />{' '}
              </StyledLabels>
            </StyledDivInputs>
            <StyledErrorMessage
              name="email"
              className="text-red-500"
              component="h1"
            />
            <StyledDivInputs>
              <StyledLabels>
                <StyledDivSpriteSvgIcons>
                  <SpriteSVG name="password" />
                </StyledDivSpriteSvgIcons>
                <StyledInput
                  name="password"
                  placeholder="Password"
                  type="password"
                />
              </StyledLabels>
              {/* <ErrorMessage name="password" render={renderError} /> */}
            </StyledDivInputs>
            <StyledErrorMessage
              name="password"
              className="text-red-500"
              component="h1"
            />
            <StyledButtonLog type="submit" disabled={isLoading}>
              Log In
            </StyledButtonLog>
            <StyledButtonReg type="submit">Register</StyledButtonReg>
          </FormikLoginForm>
        </Formik>
      </StyledDiv>
    </StyledSectionForm>
  );
};
