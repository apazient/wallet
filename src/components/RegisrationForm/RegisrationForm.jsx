import React from 'react';
import { SpriteSVG } from 'pictures/SpriteSVG';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
// import { useDispatch } from 'react-redux';
// import { register } from 'redux/Auth/operations';
import {
  FormContainer,
  DivLogoContainer,
  DivLogoIcon,
  LogoName,
  Label,
  DivInputIcon,
  ButtonReg,
  ButtonLog,
  FormOfAllInputs,
  StyledErrorMessages,
  StyledField,
  StyledDivInputs,
} from './RegisrationForm.styled';

const RegisrationForm = () => {
  // const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    // dispatch(register({ email, password, pwd, firstName }));
    // reset();
  };

  // const reset = () => {
  //   setEmail('');
  //   setPassword('');
  //   setPwd('');
  //   setFirstName('');
  // };

  return (
    <FormContainer>
      <DivLogoContainer>
        <DivLogoIcon>
          <SpriteSVG name={'logo'} />
        </DivLogoIcon>
        <LogoName>Money Guard</LogoName>
      </DivLogoContainer>
      <Formik
        initialValues={{ email: '', password: '', pwd: '', firstName: '' }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          password: Yup.string()
            .min(6, 'Password is too short')
            .max(12, 'Must be 12 characters or less')
            // .matches(
            //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,12}$/,
            //   'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character'
            // )
            .required('Required'),
          pwd: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Required'),
          firstName: Yup.string()
            .min(2)
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
        })}
      >
        <FormOfAllInputs onSubmit={handleSubmit}>
          <StyledDivInputs>
            <Label>
              <DivInputIcon>
                <SpriteSVG name={'email'} />
              </DivInputIcon>
              <StyledField
                // onChange={handleChange}
                type="email"
                name="email"
                placeholder="E-mail"
                autofocus
              />

              <StyledErrorMessages name="email" />
            </Label>
          </StyledDivInputs>

          <StyledDivInputs>
            <Label>
              <DivInputIcon>
                <SpriteSVG name={'password'} />
              </DivInputIcon>
              <StyledField
                // onChange={handleChange}
                type="password"
                name="password"
                placeholder="Password"
              />
              <StyledErrorMessages name="password" />
            </Label>
          </StyledDivInputs>

          <StyledDivInputs>
            <Label>
              <DivInputIcon>
                <SpriteSVG name={'password'} />
              </DivInputIcon>
              <StyledField
                // onChange={handleChange}
                type="password"
                name="pwd"
                placeholder="Confirm password"
              />
              <StyledErrorMessages name="pwd" />
            </Label>
          </StyledDivInputs>

          <StyledDivInputs>
            <Label>
              <DivInputIcon>
                <SpriteSVG name={'home-page'} />
              </DivInputIcon>
              <StyledField
                // onChange={handleChange}
                type="text"
                name="firstName"
                placeholder="First name"
              />
              <StyledErrorMessages name="firstName" />
            </Label>
          </StyledDivInputs>

          <ButtonReg type="submit">Register</ButtonReg>
          <ButtonLog type="button" onClick>
            Log in
          </ButtonLog>
        </FormOfAllInputs>
      </Formik>
    </FormContainer>
  );
};

export default RegisrationForm;
