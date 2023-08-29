import { styled } from 'styled-components';
import { StyledButton, StyledLink } from 'styles/Button';
import { ErrorMessage } from 'formik';

export const DivContainer = styled.div`
  box-sizing: border-box;
  padding: 23px 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  @media screen and (min-width: 768px) {
    padding: 60px 62px;
  }
`;

export const ButtonReg = styled(StyledButton)`
  margin-top: 40px;
`;

export const LinkLog = styled(StyledLink)`
  margin-top: 20px;
`;

export const StyledErrorMessageEmail = styled(ErrorMessage)`
  font-size: 12px;
  color: orange;
  position: absolute;
  top: 275px;
  @media screen and (min-width: 768px) {
    top: 185px;
  }
`;

export const StyledErrorMessagePassword = styled(ErrorMessage)`
  font-size: 12px;
  color: orange;
  position: absolute;
  top: 345px;
  @media screen and (min-width: 768px) {
    top: 255px;
  }
`;

export const StyledErrorMessagePwd = styled(ErrorMessage)`
  font-size: 12px;
  color: orange;
  position: absolute;
  top: 425px;
  @media screen and (min-width: 768px) {
    top: 335px;
  }
`;

export const StyledErrorMessageFirstName = styled(ErrorMessage)`
  font-size: 12px;
  color: orange;
  position: absolute;
  top: 490px;
  @media screen and (min-width: 768px) {
    top: 400px;
  }
`;

// Полоса надёжности пароля
export const SpanStrengthMeter = styled.span`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    width: ${props => {
      if (props.$size <= 12) {
        return `${props.$size * 11.1}%`;
      } else return '280px';
    }};
    transition: width 0.5s ease-in-out, background-color 0.25s;
    border-radius: 2px;
    height: 4px;
    background-color: ${props => {
      if (props.$size <= 3) return 'darkred';
      else if (props.$size <= 5) return 'orangered';
      else if (props.$size <= 9) return 'orange';
      else if (props.$size <= 12) return 'green';
      else if (props.$size >= 13) return 'red';
    }};
    filter: drop-shadow(0px 1px 8px rgba(255, 182, 39, 0.5));
    left: -54px;
    bottom: -17px;
    @media screen and (min-width: 768px) {
      width: ${props => {
        if (props.$size <= 12) {
          return `${props.$size * 10.2}%`;
        } else return '409px';
      }};
    }
  }
`;
