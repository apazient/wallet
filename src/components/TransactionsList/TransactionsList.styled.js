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
//styled mobile List

export const StyledUlTransList = styled.ul`
  background: rgba(
    47,
    21,
    176,
    0.73
  ); // нужно поменять цвет фона на rgba(255, 255, 255, 1)
  border-radius: 18px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    background-color: rgba(255, 134, 141, 1); // Цвет полоски
    border-radius: 18px 0 0 18px;
  }
`;

export const StyledLiTransList = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  color: ${({ theme }) => theme.colors.colorText};
  font-size: 16px;
  line-height: 1.5;
  font-family: Poppins-Regular;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 1px;
    background-image: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.082) 0%,
      rgba(255, 255, 255, 0.2) 100%
    );
  }
`;

export const StyledNameTranList = styled.div`
  font-family: Poppins-SemiBold;
`;

export const DeletBtnMobTrans = styled.button`
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
export const EditBtnMobTrans = styled.button`
  border: none;
  display: flex;
  align-items: center;
  background-color: transparent;
  gap: 4px;
  color: rgba(255, 255, 255, 0.6);
  padding: 4px 12px;
`;

export const EditIconMobTrans = styled.div`
  width: 14px;
  height: 14px;
  fill: rgba(255, 255, 255, 0.6);
`;

export const CommentMobTrans = styled.div`
  max-width: 130px;
`;
