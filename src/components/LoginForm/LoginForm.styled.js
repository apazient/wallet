import { styled } from 'styled-components';
import { Field, Form, ErrorMessage } from 'formik';
import { StyledButton, StyledLink } from 'styles/Button';

export const StyledSectionForm = styled.section`
  width: 320px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(50px);
  height: 100vh;
  flex-direction: column;
  display: flex;
  justify-content: center;
  @media screen and (min-width: 768px) {
    width: 533px;
    border-radius: 8px;
  }
`;

export const FormikLoginForm = styled(Form)`
  width: 100%;
  margin: 52px auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledInput = styled(Field)`
  border: none;
  outline: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.navLink};
  font-family: Poppins-Regular;
  font-size: 18px;
  width: 210px;
  &:-webkit-autofill,
  &:-webkit-autofill:focus {
    -webkit-background-clip: text;
    -webkit-text-fill-color: ${({ theme }) => theme.colors.navLink};
  }
  @media screen and (min-width: 768px) {
    width: 335px;
  }
`;

export const StyledErrorMessageEmail = styled(ErrorMessage)`
  font-size: 12px;
  color: orange;
  position: absolute;
  top: 240px;
  @media screen and (min-width: 768px) {
    top: 245px;
  }
`;

export const StyledErrorMessagePassword = styled(ErrorMessage)`
  font-size: 12px;
  color: orange;
  position: absolute;
  top: 310px;
  @media screen and (min-width: 768px) {
    top: 315px;
  }
`;

export const StyledDiv = styled.div`
  box-sizing: border-box;
  padding: 98px 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    padding: 80px 62px;
  }
`;

export const StyledDivItems = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const StyledH2 = styled.h2`
  color: ${({ theme }) => theme.colors.colorText};
  font-family: Poppins-Regular;
  font-weight: 400;
  font-size: 19px;
  line-height: normal;
  @media screen and (min-width: 768px) {
    font-size: 27px;
    line-height: normal;
  }
`;

export const StyledDivInputEmail = styled.div`
  width: 260px;
  display: flex;
  gap: 20px;
  position: relative;

  background-color: inherit;
  &::before {
    content: '';
    position: absolute;
    width: 280px;
    height: 2px;
    background-color: rgba(255, 255, 255, 0.4);
    left: -10px;
    bottom: -8px;
  }
  @media screen and (min-width: 768px) {
    width: 389px;
    &::before {
      content: '';
      position: absolute;
      width: 409px;
      height: 2px;
      background-color: rgba(255, 255, 255, 0.4);
      left: -10px;
      bottom: -8px;
    }
  }
`;

export const StyledDivInputPassword = styled.div`
  width: 260px;
  display: flex;
  gap: 20px;
  margin-top: 48px;
  position: relative;
  background-color: inherit;
  &::before {
    content: '';
    position: absolute;
    width: 280px;
    height: 2px;
    background-color: rgba(255, 255, 255, 0.4);
    left: -10px;
    bottom: -5px;
  }
  @media screen and (min-width: 768px) {
    width: 389px;
    &::before {
      content: '';
      position: absolute;
      width: 409px;
      height: 2px;
      background-color: rgba(255, 255, 255, 0.4);
      left: -10px;
      bottom: -8px;
    }
  }
`;

export const StyledButtonLog = styled(StyledButton)`
  margin-top: 45px;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
  }
`;

export const StyledLinkReg = styled(StyledLink)`
  margin-top: 20px;
`;

export const StyledLabels = styled.label`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const StyledDivSpriteSvgLogo = styled.div`
  width: 25.5px;
  height: 25.5px;
  @media screen and (min-width: 768px) {
    width: 36px;
    height: 36px;
  }
`;

export const StyledDivSpriteSvgIcons = styled.div`
  width: 24px;
  height: 24px;
  fill: rgba(255, 255, 255, 0.4);
`;
