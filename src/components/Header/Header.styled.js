import { styled } from 'styled-components';

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  background: linear-gradient(276deg, #2e1746 3.19%, #2e225f 100%);
  box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 0.25),
    0px -3px 2px 0px rgba(0, 0, 0, 0.1) inset;
  @media screen and (min-width: 768px) {
    padding: 16px 32px;
  }
`;
export const StyledLogoThumb = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const StyledLogoSvg = styled.div`
  width: 18px;
  height: 18px;
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;
export const StyledLogoText = styled.p`
  margin: 0;
  font-family: ‘Poppins-Regular’;
  font-size: 12.84px;
  line-height: 1.58;
  color: ${({ theme }) => theme.colors.colorText};

  @media screen and (min-width: 768px) {
    font-size: 17.1px;
    line-height: 1.53;
  }
`;

export const StyledUserThumb = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  @media screen and (min-width: 768px) {
    gap: ${({ theme }) => theme.spacing(3)};
  }
`;

export const StyledHeaderText = styled.p`
  margin: 0;
  font-family: ‘Poppins-Regular’;
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.navLink};
`;
export const StyledUserWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    border-left: 1px solid ${({ theme }) => theme.colors.navLink};
    padding-left: ${({ theme }) => theme.spacing(3)};
  }
`;

export const StyledHeaderBtn = styled.button`
  display: none;
  border: none;
  background-color: transparent;
  margin: 0;
  padding: 0;
  font-family: ‘Poppins-Regular’;
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.navLink};
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const StyledExitSvg = styled.div`
  width: 18px;
  height: 18px;
  fill: ${({ theme }) => theme.colors.navLink};
`;
