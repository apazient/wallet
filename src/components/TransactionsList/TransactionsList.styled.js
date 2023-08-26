import { styled } from 'styled-components';
export const TableStyled = styled.table`
  width: 100%;
  border-radius: 8px;
  background-color: #000;
  border-collapse: collapse;
`;
export const MainTrStyled = styled.tr`
  background-image: linear-gradient(
    219.62deg,
    rgba(109, 84, 235, 0.6) 28.31%,
    rgba(101, 35, 146, 0.6) 66.76%
  );
  height: 56px;
  padding: 16px 20px;
  border-radius: 8px;
`;
export const TrInfoStyled = styled.tr`
  height: 53px;
  position: relative;
  font-family: Poppins-Regular;
  color: ${({ theme }) => theme.colors.colorText};
  &:after {
    position: absolute;
    content: ‘’;
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
export const IconBtnWrapperStyled = styled.td`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;
export const EditIconStyled = styled.div`
  width: 14px;
  height: 14px;
  fill: rgba(255, 255, 255, 0.6);
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
  &:first-child {
    border-radius: 8px 0 0 8px;
  }
  &:last-child {
    border-radius: 0 8px 8px 0;
  }
`;
export const TdCommentStyled = styled.td`
  text-align: center;
  max-width: 118px;
`;
export const TdDateStyled = styled.td`
  text-align: left;
  max-width: 52px;
`;
export const TdTypeStyled = styled.td`
  text-align: center;
  max-width: 40px;
`;
export const TdCatagoryStyled = styled.td`
  text-align: center;
  max-width: 106px;
`;
export const TdSumStyled = styled.td`
  text-align: center;
  max-width: 70px;
  font-family: Poppins-SemiBold;
`;
export const TdActionStyled = styled.td`
  text-align: right;
  max-width: 52px;
`;
