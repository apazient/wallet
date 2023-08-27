import { styled } from 'styled-components';

export const StyledAdd = styled.button`
  height: 44px;
  width: 44px;
  border: none;
  border-radius: 50%;
  margin-left: auto;
  margin-right: ${({ theme }) => theme.spacing(10)};
  margin-bottom: ${({ theme }) => theme.spacing(10)};
  padding: 12px;
  outline: none;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.spacing(5)};
  color: ${({ theme }) => theme.colors.colorText};
  background: ${({ theme }) => theme.colors.coloredBtn};
  box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);
`;
export const StyledPlusAddSvg = styled.div`
  width: 20px;
  height: 20px;

  stroke: #ffffff;
`;
