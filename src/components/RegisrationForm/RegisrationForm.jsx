import React from 'react';
import { SpriteSVG } from 'pictures/SpriteSVG';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from 'redux/Auth/operations';

const RegisrationForm = () => {
  // const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ email, password, pwd, firstName }));
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
    setPwd('');
    setFirstName('');
  };

  return (
    <FormContainer>
      <StyledDivContainer>
        <StyledDivItems>
          <SpriteSVG name={'logo'} />
          <StyledH2>Money Guard</StyledH2>
        </StyledDivItems>
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
              .required('Required'),
            pwd: Yup.string()
              .min(6, 'Password is too short')
              .max(12, 'Must be 12 characters or less')
              .required('Required'),
            firstName: Yup.string()
              .min(2)
              .max(15, 'Must be 15 characters or less')
              .required('Required'),
          })}
        >
          <Form onSubmit={handleSubmit}>
            <label>
              <SpriteSVG name={'email'} />
              <Field
                onChange={handleChange}
                type="email"
                name="email"
                placeholder="E-mail"
                autofocus
              />
              <ErrorMessage name="email" />
            </label>

            <label>
              <SpriteSVG name={'password'} />
              <Field
                onChange={handleChange}
                type="password"
                name="password"
                placeholder="Password"
              />
              <ErrorMessage name="password" />
            </label>

            <label>
              <SpriteSVG name={'password'} />
              <Field
                onChange={handleChange}
                type="password"
                name="pwd"
                placeholder="Confirm password"
              />
              <ErrorMessage name="pwd" />
            </label>

            <label>
              <SpriteSVG name={'name'} />
              <Field
                onChange={handleChange}
                type="text"
                name="firstName"
                placeholder="First name"
              />
              <ErrorMessage name="firstName" />
            </label>

            <button type="submit">Register</button>
            <button type="submit">Log in</button>
          </Form>
        </Formik>
      </StyledDivContainer>
    </FormContainer>
  );
};

export default RegisrationForm;
