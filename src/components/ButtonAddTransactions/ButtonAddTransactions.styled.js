import { styled } from 'styled-components';

export const StyledAdd = styled.button`
  position: absolute;
  right: 40px;
  bottom: 40px;
  height: 44px;
  width: 44px;
  border: none;
  border-radius: 50%;
  margin-left: auto;
  padding: 12px;
  outline: none;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.spacing(5)};
  color: ${({ theme }) => theme.colors.colorText};
  background: linear-gradient(
    96.76deg,
    #ffc727 -16.42%,
    #9e40ba 97.04%,
    #7000ff 150.71%
  );
  box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);
`;
export const StyledPlusAddSvg = styled.div`
  width: 20px;
  height: 20px;

  stroke: #ffffff;
`;
