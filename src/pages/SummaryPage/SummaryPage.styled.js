import styled from 'styled-components';

export const SummaryPageStyled = styled.div`
  background-color: #101010;
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
  background-color: #101010;
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

export const OverlayGradient1 = styled.div`
  position: fixed;
  pointer-events: none;
  width: 893px;
  height: 901px;
  border-radius: 901px;
  right: -311px;
  bottom: -278px;
  flex-shrink: 0;
  background-image: linear-gradient(
    220deg,
    rgba(109, 84, 235, 0.6) 3.47%,
    rgba(101, 35, 146, 0.6) 90.06%
  );
  filter: blur(200px);
`;

export const OverlayGradient2 = styled.div`
  position: fixed;
  pointer-events: none;
  width: 330px;
  height: 333px;
  border-radius: 333px;
  right: 582px;
  bottom: -130px;
  flex-shrink: 0;
  background-image: #6d1c77;
  filter: blur(150px);
`;

export const OverlayGradient3 = styled.div`
  position: fixed;
  pointer-events: none;
  width: 363px;
  height: 366.105px;
  flex-shrink: 0;
  border-radius: 366.105px;
  right: -212px;
  top: 151px;

  background-image: #302e8e;
  filter: blur(150px);
`;

// background-color: ${({ theme }) => theme.colors.mainBackground};
