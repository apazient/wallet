import React from 'react';

// AlexeyW
// AlexeyW@mail.com
// AlexW.com

import {
  FormikLoginForm,
  StyledButtonLog,
  StyledDiv,
  StyledDivInputEmail,
  StyledDivInputPassword,
  StyledDivItems,
  StyledDivSpriteSvgIcons,
  StyledDivSpriteSvgLogo,
  StyledErrorMessageEmail,
  StyledErrorMessagePassword,
  StyledH2,
  StyledInput,
  StyledLabels,
  StyledLinkReg,
  StyledSectionForm,
} from './LoginForm.styled';
import { useDispatch, useSelector } from 'react-redux';

import { Formik } from 'formik';
import { loginThunk } from 'redux/Auth/operations';
import { SpriteSVG } from 'pictures/SpriteSVG';
import * as Yup from 'yup';
import { getIsLoading } from 'redux/Auth/selectors';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { OverlayCenterMobile } from 'styles/GradientCycle';

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
      .catch(error => {
        const { message } = error.response.data;
        if (message.length > 5) {
          toast.error(message);
        } else message.forEach(el => toast.error(el));
      });
  };

  return (
    <StyledSectionForm>
      <OverlayCenterMobile />
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
            <StyledDivInputEmail>
              <StyledLabels>
                <StyledDivSpriteSvgIcons>
                  <SpriteSVG name="email" />
                </StyledDivSpriteSvgIcons>
                <StyledInput name="email" placeholder="E-email" type="email" />
              </StyledLabels>
            </StyledDivInputEmail>
            <StyledErrorMessageEmail name="email" component="h1" />
            <StyledDivInputPassword>
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
            </StyledDivInputPassword>
            <StyledErrorMessagePassword name="password" component="h1" />
            <StyledButtonLog type="submit" disabled={isLoading}>
              Log In
            </StyledButtonLog>
          </FormikLoginForm>
        </Formik>
        <StyledLinkReg to="/register">Register</StyledLinkReg>
      </StyledDiv>
    </StyledSectionForm>
  );
};
