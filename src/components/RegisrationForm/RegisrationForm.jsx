import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { register } from 'redux/Auth/operations';
import { SpriteSVG } from 'pictures/SpriteSVG';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import { getIsLoading } from 'redux/Auth/selectors';
import { useDispatch } from 'react-redux';
// import { register } from 'redux/Auth/operations';

import { styled } from 'styled-components';

import {
  FormikLoginForm,
  StyledDivInputEmail,
  StyledDivInputPassword,
  StyledDivItems,
  StyledDivSpriteSvgIcons,
  StyledDivSpriteSvgLogo,
  StyledH2,
  StyledInput,
  StyledLabels,
  StyledSectionForm,
} from 'components/LoginForm/LoginForm.styled';
import {
  DivContainer,
  StyledErrorMessageEmail,
  StyledErrorMessagePassword,
  StyledErrorMessagePwd,
  StyledErrorMessageFirstName,
  ButtonReg,
  LinkLog,
  SpanStrengthMeter,
} from './RegisrationForm.styled';
import { toast } from 'react-toastify';

const RegisrationForm = () => {
  const isLoading = useSelector(getIsLoading);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const handleSubmit = ({ email, firstName: username, password }) => {
    const credentials = { username, email, password };
    dispatch(register(credentials))
      .unwrap()
      .then(() => navigate(location.state?.from || '/'))
      .catch(error => {
        const { message } = error.response.data;
        if (message.length > 8) {
          toast.error(message);
        } else message.forEach(el => toast.error(el));
      });
  };

  // const reset = () => {
  //   setEmail('');
  //   setPassword('');
  //   setPwd('');
  //   setFirstName('');
  // };

  return (
    <StyledSectionForm>
      <DivContainer>
        <StyledDivItems>
          <StyledDivSpriteSvgLogo>
            <SpriteSVG name={'logo'} />
          </StyledDivSpriteSvgLogo>
          <StyledH2>Money Guard</StyledH2>
        </StyledDivItems>

        <Formik
          initialValues={{
            email: '',
            password: '',
            pwd: '',
            firstName: '',
          }}
          onSubmit={handleSubmit}
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
          {formik => {
            // console.log(Object.keys(formik.values.email.errors).length);
            return (
              <FormikLoginForm>
                <StyledDivInputEmail>
                  <StyledLabels>
                    <StyledDivSpriteSvgIcons>
                      <SpriteSVG name={'email'} />
                    </StyledDivSpriteSvgIcons>
                    <StyledInput
                      // onChange={handleChange}
                      type="email"
                      name="email"
                      placeholder="E-mail"
                      autoFocus
                    />
                  </StyledLabels>
                </StyledDivInputEmail>
                <StyledErrorMessageEmail name="email" component="h1" />

                <StyledDivInputPassword>
                  <StyledLabels>
                    <StyledDivSpriteSvgIcons>
                      <SpriteSVG name={'password'} />
                    </StyledDivSpriteSvgIcons>
                    <StyledInput
                      // onChange={handleChange}
                      type="password"
                      name="password"
                      placeholder="Password (6 + characters)"
                    />
                  </StyledLabels>
                </StyledDivInputPassword>
                <StyledErrorMessagePassword name="password" component="h1" />

                <StyledDivInputPassword>
                  <StyledLabels>
                    <StyledDivSpriteSvgIcons>
                      <SpriteSVG name={'password'} />
                    </StyledDivSpriteSvgIcons>
                    <SpanContainer>
                      <StyledInput
                        // onChange={handleChange}
                        type="password"
                        name="pwd"
                        placeholder="Confirm password"
                      />
                      <SpanStrengthMeter
                        $size={formik.values.password.length}
                      ></SpanStrengthMeter>
                    </SpanContainer>
                  </StyledLabels>
                </StyledDivInputPassword>
                <StyledErrorMessagePwd name="pwd" component="h1" />

                <StyledDivInputPassword>
                  <StyledLabels>
                    <StyledDivSpriteSvgIcons>
                      <SpriteSVG name={'user'} />
                    </StyledDivSpriteSvgIcons>
                    <StyledInput
                      // onChange={handleChange}
                      type="text"
                      name="firstName"
                      placeholder="First name"
                    />
                  </StyledLabels>
                </StyledDivInputPassword>
                <StyledErrorMessageFirstName name="firstName" component="h1" />

                <ButtonReg type="submit" disabled={isLoading}>
                  Register
                </ButtonReg>
              </FormikLoginForm>
            );
          }}
        </Formik>
        <LinkLog to="/login">Log in</LinkLog>
      </DivContainer>
    </StyledSectionForm>
  );
};

export default RegisrationForm;

const SpanContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
