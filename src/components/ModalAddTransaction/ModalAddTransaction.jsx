import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import {
  StyledInputWrapper,
  StyledButtonAdd,
  StyledButtonCancel,
  StyledForm,
  StyledToggleWrapper,
  StyledInputComment,
  StyledInputValue,
  StyledTitle,
  StyledToggleTextExp,
  StyledToggleTextIncome,
  StyledCalendarSvg,
  StyledButtonWrapper,
  StyledDatetime,
  StyledInputWrapTab,
  StyledDatatimeWrapper,
} from './ModalAddTransaction.styled';
import * as yup from 'yup';
import { SpriteSVG } from 'pictures/SpriteSVG';
import { Switcher } from './Switcher';
import 'react-datetime/css/react-datetime.css';
import { useDispatch, useSelector } from 'react-redux';
import { SelectExpenses } from './Select';
import {
  selectChoosenCategorie,
  selectIsSelect,
} from 'redux/TransactionCategories/selectors';
import { addTransaction } from 'redux/TransactionsList/operations';
import { feachCategories } from 'redux/TransactionCategories/operations';
import { closeModal } from 'redux/Global/globalSlice';
import { showSelect } from 'redux/TransactionCategories/categoriesSlice';

const validationSchema = yup.object().shape({
  number: yup.number().required('Requited'),
  text: yup.string(),
});

const ModalAddTransaction = () => {
  const isExpense = useSelector(selectIsSelect);
  const dispatch = useDispatch();
  const categories = useSelector(selectChoosenCategorie);

  const [userData, setDate] = useState(new Date());
  const [category, setCategory] = useState({
    value: 'c9d9e447-1b83-4238-8712-edc77b18b739',
    label: '',
  });

  useEffect(() => {
    dispatch(feachCategories());
  }, [dispatch]);

  const handleSubmit = values => {
    const newTransaction = {
      transactionDate: userData,
      type: isExpense ? 'EXPENSE' : 'INCOME',
      categoryId: isExpense ? category.value : categories.id,
      comment: values.text,
      amount: isExpense ? 0 - values.number : values.number,
    };

    dispatch(addTransaction(newTransaction));
    dispatch(closeModal());
    dispatch(showSelect(false));
  };

  return (
    <Formik
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      initialValues={{
        text: '',
        number: '',
        date: userData,
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
        setFieldValue,
      }) => (
        <StyledForm>
          <StyledTitle>Add transaction</StyledTitle>
          <StyledToggleWrapper>
            <StyledToggleTextIncome>Income</StyledToggleTextIncome>
            <Switcher />
            <StyledToggleTextExp>Expense</StyledToggleTextExp>
          </StyledToggleWrapper>
          {isExpense && (
            <SelectExpenses handleCategoriId={setCategory} values={category} />
          )}
          <StyledInputWrapTab>
            <StyledInputWrapper>
              <StyledInputValue
                name="number"
                placeholder="0.00"
                type="number"
              />
            </StyledInputWrapper>
            <StyledDatatimeWrapper>
              <StyledDatetime
                name="date"
                type="date"
                value={userData}
                dateFormat="DD.MM.YYYY"
                timeFormat={false}
                onChange={e => {
                  setDate(e);
                }}
                closeOnSelect={true}
              ></StyledDatetime>
              <StyledCalendarSvg>
                <SpriteSVG name={'calendar'} />
              </StyledCalendarSvg>
            </StyledDatatimeWrapper>
          </StyledInputWrapTab>

          <StyledInputWrapper>
            <StyledInputComment name="text" placeholder="Comment" type="text" />
          </StyledInputWrapper>
          <StyledButtonWrapper>
            <StyledButtonAdd type="submit">Add</StyledButtonAdd>
            <StyledButtonCancel
              onClick={() => {
                dispatch(closeModal());
                dispatch(showSelect(false));
              }}
            >
              Cancel
            </StyledButtonCancel>
          </StyledButtonWrapper>
        </StyledForm>
      )}
    </Formik>
  );
};

export default ModalAddTransaction;
