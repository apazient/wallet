import React, { useState } from 'react';

// AlexeyWERT
// AlexeyWERT@mail.com
// AlexeyWERT@mail.com

import {
  FormikLoginForm,
  StyledButtonLog,
  StyledButtonReg,
  StyledDiv,
  StyledDivInputs,
  StyledDivItems,
  StyledDivSpriteSvgIcons,
  StyledDivSpriteSvgLogo,
  StyledH2,
  StyledInput,
  StyledLabels,
  StyledSectionForm,
} from './LoginForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Formik, ErrorMessage, Form } from 'formik';
import { loginThunk } from 'redux/Auth/operations';
import { SpriteSVG } from 'pictures/SpriteSVG';
import * as Yup from 'yup';
import { getIsLoading } from 'redux/Auth/selectors';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().min(6).max(12).required('Required'),
  });

  const handleSubmit = e => {
    e.preventDefault();
    const credentials = { email, password };
    dispatch(loginThunk(credentials))
      .unwrap()
      .then(res => {
        toast.success(`Hello, ${res.user.name}`);
      })
      .catch(err => {
        toast.error('Try another data!!');
      });
  };

  const renderError = message => <p className="help is-danger">{message}</p>;
  return (
    <Formik validationSchema={validationSchema}>
      <StyledSectionForm>
        <StyledDiv>
          <StyledDivItems>
            <StyledDivSpriteSvgLogo>
              <SpriteSVG name="logo" />
            </StyledDivSpriteSvgLogo>
            <StyledH2>Money Guard</StyledH2>
          </StyledDivItems>
          <FormikLoginForm as={Form} onSubmit={handleSubmit}>
            <StyledDivInputs>
              <StyledLabels>
                <StyledDivSpriteSvgIcons>
                  <SpriteSVG name="email" />
                </StyledDivSpriteSvgIcons>
                <StyledInput
                  name="email"
                  placeholder="E-email"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </StyledLabels>
            </StyledDivInputs>
            <StyledDivInputs>
              <StyledLabels>
                <StyledDivSpriteSvgIcons>
                  <SpriteSVG name="password" />
                </StyledDivSpriteSvgIcons>
                <StyledInput
                  name="password"
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </StyledLabels>
              <ErrorMessage name="password" render={renderError} />
            </StyledDivInputs>
            <StyledButtonLog type="submit" disabled={isLoading}>
              Log In
            </StyledButtonLog>
            <StyledButtonReg type="submit">Register</StyledButtonReg>
          </FormikLoginForm>
        </StyledDiv>
      </StyledSectionForm>
    </Formik>
  );
};
