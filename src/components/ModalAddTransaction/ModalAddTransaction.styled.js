import { styled } from 'styled-components';
import { StyledButton } from 'styles/Button';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import { Field, Form } from 'formik';

export const StyledForm = styled(Form)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(10)};
  padding: 28px 20px;
  border-radius: ${({ theme }) => theme.spacing(2)};
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(50px);
  background: radial-gradient(rgb(63, 46, 150), rgb(95, 71, 140));
  @media screen and (min-width: 768px) {
    padding: 40px 72px;
  }
`;
export const StyledTitle = styled.h2`
  text-align: center;
  font-family: Poppins-Regular;
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
  font-family: Poppins-SemiBold;
  font-size: 16px;
  font-weight: 600;
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
  font-family: Poppins-Regular;
  font-size: 18px;
  line-height: 1.5;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  color: ${({ theme }) => theme.colors.colorText};
  background-color: transparent;
  overflow: hidden;
  &:focus {
    outline: none;
  }
  &:-webkit-autofill,
  &:-webkit-autofill:focus {
    -webkit-background-clip: text;
    -webkit-text-fill-color: ${({ theme }) => theme.colors.colorText};
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
export const StyledInputComment = styled.textarea`
  padding: 0;
  padding-left: ${({ theme }) => theme.spacing(5)};
  width: 280px;
  min-height: 76px;
  font-family: Poppins-Regular;
  font-size: 18px;
  resize: none;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  color: ${({ theme }) => theme.colors.colorText};
  background-color: transparent;
  &:focus {
    outline: none;
  }
  &::placeholder {
    background-color: transparent;
  }
  @media screen and (min-width: 768px) {
    width: 394px;
    padding-left: ${({ theme }) => theme.spacing(2)};
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
  .rdtPicker {
    width: 280px;
    border: none;
    border-radius: 8px;
    background: linear-gradient(
      360deg,
      rgba(83, 61, 186, 1) 0%,
      rgba(80, 48, 154, 1) 35.94%,
      rgba(106, 70, 165, 1) 61.04%,
      rgba(133, 93, 175, 1) 100%
    );
    @media screen and (min-width: 768px) {
      width: 250px;
    }
  }
  .rdtPicker td.rdtActive,
  .rdtPicker td.rdtActive:hover {
    background-color: ${({ theme }) => theme.colors.hover};
    border-radius: 20px;
  }
  .rdtPicker td.rdtToday:before {
    display: none;
  }
  td.rdtActive.rdtToday:before {
    display: none;
  }
  .rdtPicker td:hover {
    background: linear-gradient(
      96.76deg,
      #ffc727 -16.42%,
      #9e40ba 97.04%,
      #7000ff 150.71%
    );
    text-shadow: 0 -1px 0 rgba (0, 0, 0, 0.25);
    border-radius: 20px;
  }

  element.style {
  }
  .rdtPicker thead tr:first-of-type th:hover {
    background: transparent;
  }
`;
export const StyledDatetime = styled(Datetime)`
  input {
    padding-bottom: ${({ theme }) => theme.spacing(2)};
    padding-left: ${({ theme }) => theme.spacing(5)};
    width: 280px;
    font-family: Poppins-Regular;
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
    &::placeholder {
      background-color: transparent;
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

export const StyledCloseIcon = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    cursor: pointer;
    width: 16px;
    height: 16px;
    stroke: ${({ theme }) => theme.colors.colorText};
    position: absolute;
    top: 20px;
    right: 20px;
  }
`;

//Overlay Gradient
export const OverlayGradient = styled.div`
  position: fixed;
  z-index: -1;
  pointer-events: none;
  width: 454px;
  height: 454px;
  border-radius: 454px;
  top: 74px;
  bottom: 61px;
  background: rgba(47, 21, 176, 0.73);
  filter: blur(100px);
`;
