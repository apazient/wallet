import React from 'react';
import { SpriteSVG } from 'pictures/SpriteSVG';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/Auth/operations';

const RegisrationForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pwd, setPwd] = useState('');
  const [firstName, setFirstName] = useState('');

  const handleChange = ({ target }) => {
    const { name, value } = target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'pwd':
        setPwd(value);
        break;
      case 'firstName':
        setFirstName(value);
        break;
      default:
        console.log('Value not found');
        return;
    }
  };

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
      <StyledDivItems>
        <SpriteSVG name={'logo'} />
        <StyledH2>Money Guard</StyledH2>
      </StyledDivItems>
      <Formik
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
            .min(6)
            .max(12, 'Must be 12 characters or less')
            .required('Required'),
          pwd: Yup.string()
            .min(6)
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
              value={email}
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
              value={password}
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
              value={pwd}
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
              value={firstName}
            />
            <ErrorMessage name="firstName" />
          </label>

          <button type="submit">Register</button>
          <button type="submit">Log in</button>
        </Form>
      </Formik>
    </FormContainer>
  );
};

export default RegisrationForm;
