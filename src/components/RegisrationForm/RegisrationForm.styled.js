import { styled } from 'styled-components';
import { StyledButton, StyledLink } from 'styles/Button';

export const ButtonReg = styled(StyledButton)`
  margin-top: 40px;
`;

export const LinkLog = styled(StyledLink)`
  margin-top: 20px;
`;

// Полоса надёжности пароля
export const SpanStrengthMeter = styled.span`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    width: ${props => {
      if (props.$size <= 12) {
        return `${props.$size * 8}%`;
      } else return '280px';
    }};
    transition: all 0.5s ease;
    border-radius: 2px;
    height: 4px;
    background-color: ${props => {
      if (props.$size < 6) return 'darkred';
      else if (props.$size >= 6 && props.$size < 9) return 'yellow';
      else if (props.$size >= 9 && props.$size < 13) return 'green';
      else if (props.$size >= 13) return 'red';
    }};
    filter: drop-shadow(0px 1px 8px rgba(255, 182, 39, 0.5));
    left: -54px;
    bottom: -17px;
    @media screen and (min-width: 768px) {
      width: ${props => {
        if (props.$size <= 12) {
          return `${props.$size * 8}%`;
        } else return '409px';
      }};
    }
  }
`;
