import { styled } from 'styled-components';

export const StyledButton = styled.button`
  padding: 13px 0 13px 0;
  min-width: 280px;
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
    min-width: 300px;
  }
`;

export const StyledButtonWhite = styled(StyledButton)`
  color: #623f8b;
  background: ${({ theme }) => theme.colors.whiteBtn};
`;
