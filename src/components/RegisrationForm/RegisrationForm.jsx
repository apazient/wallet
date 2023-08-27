import React from 'react';
import { SpriteSVG } from 'pictures/SpriteSVG';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import { getIsLoading } from 'redux/Auth/selectors';
// import { useDispatch } from 'react-redux';
// import { register } from 'redux/Auth/operations';

import { styled } from 'styled-components';

import {
  FormikLoginForm,
  StyledDiv,
  StyledDivInputEmail,
  StyledDivInputPassword,
  StyledDivItems,
  StyledDivSpriteSvgIcons,
  StyledDivSpriteSvgLogo,
  StyledErrorMessages,
  StyledH2,
  StyledInput,
  StyledLabels,
  StyledSectionForm,
} from 'components/LoginForm/LoginForm.styled';
import {
  ButtonReg,
  LinkLog,
  SpanStrengthMeter,
} from './RegisrationForm.styled';

const RegisrationForm = () => {
  const isLoading = useSelector(getIsLoading);
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
    <StyledSectionForm>
      <StyledDiv>
        <StyledDivItems>
          <StyledDivSpriteSvgLogo>
            <SpriteSVG name={'logo'} />
          </StyledDivSpriteSvgLogo>
          <StyledH2>Money Guard</StyledH2>
        </StyledDivItems>

        <Formik
          initialValues={{ email: '', password: '', pwd: '', firstName: '' }}
          onSubmit={(values, { setSubmitting, errors }) => {
            console.log(errors);
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
          {formik => {
            console.log(formik.errors.password);
            // console.log(Object.keys(formik.values.email.errors).length);
            return (
              <FormikLoginForm onSubmit={handleSubmit}>
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
                <StyledErrorMessages name="email" component="h1" />

                <StyledDivInputPassword>
                  <StyledLabels>
                    <StyledDivSpriteSvgIcons>
                      <SpriteSVG name={'password'} />
                    </StyledDivSpriteSvgIcons>
                    <StyledInput
                      // onChange={handleChange}
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                  </StyledLabels>
                </StyledDivInputPassword>
                <StyledErrorMessages name="password" component="h1" />

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
                <StyledErrorMessages name="pwd" component="h1" />

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
                <StyledErrorMessages name="firstName" component="h1" />

                <ButtonReg type="submit" disabled={isLoading}>
                  Register
                </ButtonReg>
              </FormikLoginForm>
            );
          }}
        </Formik>
        <LinkLog to="/login" onClick>
          Log in
        </LinkLog>
      </StyledDiv>
    </StyledSectionForm>
  );
};

export default RegisrationForm;

const SpanContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
