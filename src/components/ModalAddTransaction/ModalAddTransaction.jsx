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
  StyledCalendarSvg,
  StyledButtonWrapper,
  StyledDatetime,
  StyledInputWrapTab,
  StyledDatatimeWrapper,
  StyledCloseIcon,
  OverlayGradient,
  StyledToggleText,
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
  number: yup
    .string()
    .required('Requited')
    .matches('/^[^0-9]+$/g', 'Name is not valid'),
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
  const isValidDate = currentDate => {
    return (
      currentDate.isBefore(StyledDatetime.moment()) ||
      currentDate.isSame(StyledDatetime.moment(), 'minute')
    );
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
          <OverlayGradient />
          <StyledCloseIcon
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            <SpriteSVG name={'close'} />
          </StyledCloseIcon>
          <StyledTitle>Add transaction</StyledTitle>
          <StyledToggleWrapper>
            <StyledToggleText style={!isExpense ? { color: '#FFB627' } : null}>
              Income
            </StyledToggleText>
            <Switcher />
            <StyledToggleText style={isExpense ? { color: '#FF868D' } : null}>
              Expense
            </StyledToggleText>
          </StyledToggleWrapper>
          {isExpense && (
            <SelectExpenses handleCategoriId={setCategory} values={category} />
          )}
          <StyledInputWrapTab>
            <StyledInputWrapper>
              <StyledInputValue
                name="number"
                placeholder="0.00"
                type="string"
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
                isValidDate={isValidDate}
              ></StyledDatetime>
              <StyledCalendarSvg>
                <SpriteSVG name={'calendar'} />
              </StyledCalendarSvg>
            </StyledDatatimeWrapper>
          </StyledInputWrapTab>

          <StyledInputWrapper>
            <StyledInputComment
              name="text"
              placeholder="Comment"
              type="text"
              value={values.text}
              onChange={handleChange}
            />
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
