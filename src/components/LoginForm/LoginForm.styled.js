import { styled } from 'styled-components';
import { Field, Form, ErrorMessage } from 'formik';
import { StyledButton, StyledLink } from 'styles/Button';

export const StyledSectionForm = styled.section`
  width: 320px;
  height: 568px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(50px);
  z-index: 100;
`;

export const FormikLoginForm = styled(Form)`
  width: 100%;
  height: 50px;
  margin: 52px auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledInput = styled(Field)`
  border: none;
  outline: none;
  background-color: inherit;
  color: ${({ theme }) => theme.colors.navLink};
  font-family: Poppins-Regular;
  font-size: 18px;
`;

export const StyledErrorMessages = styled(ErrorMessage)`
  font-size: 12px;
  color: orange;
`;

export const StyledDiv = styled.div`
  box-sizing: border-box;
  padding: 98px 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const StyledDivItems = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const StyledH2 = styled.h2`
  color: var(--white, #fbfbfb);
  font-family: Poppins-Regular;
  font-weight: 400;
  font-size: 19px;
`;

export const StyledDivInputs = styled.div`
  width: 260px;
  display: flex;
  gap: 20px;
  position: relative;
  margin-bottom: 40px;
  background-color: inherit;
  height: 100%;
  &::before {
    content: '';
    position: absolute;
    width: 280px;
    height: 2px;
    background-color: rgba(255, 255, 255, 0.4);
    left: -10px;
    bottom: -8px;
  }
`;

export const StyledButtonLog = styled(StyledButton)`
  margin-top: 40px;
`;

export const StyledLinkReg = styled(StyledLink)`
  margin-top: 20px;
`;

export const StyledLabels = styled.label`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const StyledDivSpriteSvgLogo = styled.div`
  width: 25.5px;
  height: 25.5px;
`;

export const StyledDivSpriteSvgIcons = styled.div`
  width: 24px;
  height: 24px;
  fill: rgba(255, 255, 255, 0.4);
`;
