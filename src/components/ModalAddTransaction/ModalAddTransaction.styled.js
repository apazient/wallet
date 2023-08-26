import { styled } from 'styled-components';
import { StyledButton } from 'styles/Button';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import { Field, Form } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(10)};
  padding: 28px 20px;
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(50px);
  background: radial-gradient(rgb(63, 46, 150), rgb(95, 71, 140));
  @media screen and (min-width: 768px) {
    padding: 40px 72px;
  }
`;
export const StyledTitle = styled.h2`
  text-align: center;
  font-family: ‘Poppins-Regular’;
  font-size: 24px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.colorText};
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`;
//---------//

// Styles for toggle
export const StyledToggleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(5)};
`;
export const StyledToggleText = styled.p`
  font-family: ‘Poppins-SemiBold’;
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.yellow};
`;

export const StyledToggleTextIncome = styled(StyledToggleText)`
  color: ${({ theme }) => theme.colors.yellow};
`;

export const StyledToggleTextExp = styled(StyledToggleText)`
  color: ${({ theme }) => theme.colors.navLink};
`;

//---------//

// Styles for input
export const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: center;
`;

export const StyledInputWrapTab = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(10)};
  align-items: center;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    gap: ${({ theme }) => theme.spacing(8)};
    flex-direction: row;
  }
`;
export const StyledInput = styled(Field)`
  padding-bottom: ${({ theme }) => theme.spacing(2)};
  padding-left: ${({ theme }) => theme.spacing(5)};
  width: 280px;
  font-family: ‘Poppins-Regular’;
  font-size: 18px;
  line-height: 1.5;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  color: ${({ theme }) => theme.colors.colorText};
  background-color: transparent;
  &:focus {
    outline: none;
  }
`;
export const StyledInputValue = styled(StyledInput)`
  font-weight: 600;
  @media screen and (min-width: 768px) {
    width: 181px;
    text-align: center;
    padding-left: 0px;
  }
`;
export const StyledInputComment = styled(StyledInput)`
  padding-bottom: 52px;
  @media screen and (min-width: 768px) {
    min-width: 394px;
  }
  &::placeholder {
    background-color: transparent;
  }
`;

//---------//

// styles for buttons
export const StyledButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(5)};
`;

export const StyledButtonAdd = styled(StyledButton)`
  background: ${({ theme }) => theme.colors.coloredBtn};
`;
export const StyledButtonCancel = styled(StyledButton)`
  color: #623f8b;
  background: ${({ theme }) => theme.colors.colorText};
`;

//Datetime
export const StyledDatatimeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const StyledDatetime = styled(Datetime)`
  input {
    padding-bottom: ${({ theme }) => theme.spacing(2)};
    padding-left: ${({ theme }) => theme.spacing(5)};
    width: 280px;
    font-family: ‘Poppins-Regular’;
    font-size: 18px;
    line-height: 1.5;
    border: none;
    color: ${({ theme }) => theme.colors.colorText};
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    background-color: transparent;
    @media screen and (min-width: 768px) {
      padding-left: ${({ theme }) => theme.spacing(3)};
      width: 181px;
    }
    &:focus {
      outline: none;
    }
  }
`;
//Styled SVG
export const StyledCalendarSvg = styled.div`
  position: absolute;
  right: 10%;
  transform: translateX(-10%);

  pointer-events: none;
  width: 24px;
  height: 24px;
  fill: rgba(115, 74, 239, 1);
  @media screen and (min-width: 768px) {
    right: 15%;
    transform: translateX(-15%);
  }
`;
