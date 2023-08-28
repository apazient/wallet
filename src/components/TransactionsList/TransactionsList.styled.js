import { styled } from 'styled-components';
export const TableStyled = styled.table`
  width: 100%;
  border-radius: 8px;
  background: linear-gradient(
    219.62deg,
    rgba(109, 84, 235, 0.6) 28.31%,
    rgba(101, 35, 146, 0.6) 66.76%
  );
  border-collapse: collapse;
`;
export const MainTrStyled = styled.tr`
  background: rgba(82, 59, 126, 0.6);
  height: 56px;
  border-radius: 8px;
`;
export const TrInfoStyled = styled.tr`
  height: 53px;
  position: relative;
  font-family: Poppins-Regular;
  color: ${({ theme }) => theme.colors.colorText};
  background: linear-gradient(
    219.62deg,
    rgba(109, 84, 235, 0.6) 28.31%,
    rgba(101, 35, 146, 0.6) 66.76%
  );
  &:not(:last-child):after {
    position: absolute;
    content: '';
    left: 20px;
    bottom: 0;
    width: calc(100% - 20px);
    height: 1px;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.082) 0%,
      rgba(255, 255, 255, 0.2) 100%
    );
  }
`;
export const IconBtnWrapperStyled = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-end;
  padding-right: 6px;
`;
export const EditIconStyled = styled.div`
  width: 14px;
  height: 14px;
  fill: none;
  stroke: rgba(255, 255, 255, 0.6);
  cursor: pointer;
`;

export const EditTabBtn = styled.button`
  width: 14px;
  height: 14px;
  border: none;
  cursor: pointer;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
`;
export const DeleteTabBtn = styled.button`
  background: linear-gradient(
    96.76deg,
    #ffc727 -16.42%,
    #9e40ba 97.04%,
    #7000ff 150.71%
  );
  border: none;
  font-family: Poppins-Regular;
  color: ${({ theme }) => theme.colors.colorText};
  border-radius: 20px;
  cursor: pointer;
  line-height: 1.5;
  padding: 4px 12px;
`;
export const ThStyled = styled.th`
  font-family: Poppins-SemiBold;
  color: ${({ theme }) => theme.colors.colorText};
  text-align: left;
  padding-left: 20px;
  &:first-child {
    border-radius: 8px 0 0 8px;
  }
  &:last-child {
    border-radius: 0 8px 8px 0;
  }
`;

export const ThDateStyled = styled.th`
  text-align: start;
  padding-left: 20px;
`;
export const ThSumStyled = styled.th`
  text-align: end;
`;
export const TdCommentStyled = styled.td`
  text-align: left;
  width: 25%;
  padding-left: 20px;
`;
export const TdDateStyled = styled.td`
  text-align: left;
  width: 15%;
  padding-left: 25px;
  @media screen and (min-width: 768px) {
    width: 20%;
  }
`;
export const TdTypeStyled = styled.td`
  text-align: center;
  width: 10%;
`;
export const TdCatagoryStyled = styled.td`
  text-align: left;
  width: 25%;
  padding-left: 20px;
  @media screen and (min-width: 768px) {
    width: 20%;
  }
`;
export const TdSumStyled = styled.td`
  width: 15%;
  font-family: Poppins-SemiBold;
  text-align: end;
  padding-left: 20px;
`;
export const TdActionStyled = styled.td`
  text-align: left;
  width: 10%;
  padding-left: 32px;
`;
