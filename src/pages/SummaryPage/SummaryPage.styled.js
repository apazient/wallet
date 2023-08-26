import styled from 'styled-components';

export const SummaryPageStyled = styled.div`
  background-color: ${({ theme }) => theme.colors.mainBackground};
`;
export const SummaryPageContStyled = styled.div`
  background-color: transparent;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 0 20px;
  width: 320px;
  @media screen and (min-width: 768px) {
    padding: 20px 32px;
    width: 768px;
    flex-direction: row;
  }
  @media screen and (min-width: 1280px) {
    padding: 32px 16px 0 69px;
    width: 800px;
  }
`;
export const SummaryTitleStyled = styled.div`
  /* background-color: ${({ theme }) => theme.colors.mainBackground}; */
  background-color: transparent;
  color: ${({ theme }) => theme.colors.colorText};
  font-family: Poppins-Regular;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 8px;
  @media screen and (min-width: 768px) {
  }
`;
