const { default: styled } = require('styled-components');

export const Container = styled.div`
  display: flex;
  flex: 1 1 auto;
  width: 100%;
  overflow-x: hidden;
  margin: 0 auto;
  padding: 0 20px 0 20px;
  flex-direction: column;
`;

export const WrapperNavBalCur = styled.div`
  justify-content: center;
  display: flex;
  gap: 32px;
  margin-bottom: 20px;
`;
export const WrapperNavCur = styled.div`
  flex: 1 1 auto;
`;
