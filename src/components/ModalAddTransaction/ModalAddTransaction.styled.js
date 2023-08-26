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
export const StyledInput = styled(Field)`
  padding-bottom: ${({ theme }) => theme.spacing(2)};
  padding-left: ${({ theme }) => theme.spacing(5)};
  min-width: 280px;
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
`;
export const StyledInputCalendar = styled(StyledInput)``;
export const StyledInputComment = styled(StyledInput)`
  padding-bottom: 52px;
`;
//Styled SVG
export const StyledCalendarSvg = styled.div`
  position: absolute;
  right: 10%;
  top: 45%;
  pointer-events: none;
  transform: translate(-10%, -45%);
  width: 24px;
  height: 24px;
  fill: rgba(115, 74, 239, 1);
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
export const StyledDatetime = styled(Datetime)`
  input {
    padding-bottom: ${({ theme }) => theme.spacing(2)};
    padding-left: ${({ theme }) => theme.spacing(5)};
    min-width: 280px;
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
  }
`;
