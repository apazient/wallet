import React from 'react';

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
  StyledErrorMessages,
  StyledH2,
  StyledInput,
  StyledLabels,
  StyledSectionForm,
} from './LoginForm.styled';
import { useDispatch, useSelector } from 'react-redux';

import { Formik } from 'formik';
import { loginThunk } from 'redux/Auth/operations';
import { SpriteSVG } from 'pictures/SpriteSVG';
import * as Yup from 'yup';
import { getIsLoading } from 'redux/Auth/selectors';
import { useLocation, useNavigate } from 'react-router-dom';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const location = useLocation();
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().min(6).max(12).required('Required'),
  });

  const handleSubmit = value => {
    dispatch(loginThunk(value))
      .unwrap()
      .then(() => navigate(location.state?.from || '/'))
      .catch(err => {
        //  toast.error('Try another data!!');
      });
  };

  // const renderError = message => <p className="help is-danger">{message}</p>;

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
          onSubmit={handleSubmit}
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
            <StyledErrorMessages
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
            <StyledErrorMessages
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
