import styled from 'styled-components';
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
