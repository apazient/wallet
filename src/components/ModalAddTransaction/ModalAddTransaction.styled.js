import { styled } from 'styled-components';

export const StyledForm = styled.form`
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
  margin: 0;
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
  margin: 0;
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
  width: 100%;
  align-items: center;
`;
export const StyledInput = styled.input`
  padding-bottom: 8px;
  width: 280px;
  font-family: ‘Poppins-Regular’;
  font-size: 18px;
  line-height: 1.5;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  color: ${({ theme }) => theme.colors.colorText};
  background-color: transparent;
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
  width: 18px;
  height: 20px;
  fill: rgba(115, 74, 239, 1);
`;
export const StyledPlusSvg = styled.div`
  width: 20px;
  height: 20px;
  fill: #ffffff;
`;
//---------//

// styles for buttons
export const StyledButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(5)};
`;
export const StyledButton = styled.button`
  padding: 13px 0 13px 0;
  width: 280px;
  font-family: ‘Poppins-Regular’;
  font-size: 18px;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  text-align: center;

  border: none;
  border-radius: 20px;
  outline: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.colorText};
  background: ${({ theme }) => theme.colors.coloredBtn};
  box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`;
export const StyledButtonAdd = styled(StyledButton)`
  background: ${({ theme }) => theme.colors.coloredBtn};
`;
export const StyledButtonCancel = styled(StyledButton)`
  color: #623f8b;
  background: ${({ theme }) => theme.colors.colorText};
`;
