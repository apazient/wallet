import { styled } from 'styled-components';
import { StyledButton, StyledButtonWhite } from 'styles/Button';

export const StyledSectionLogout = styled.section`
  width: 320px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(50px);
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 238px 0;
  @media screen and (min-width: 768px) {
    width: 533px;
  }
`;

export const StyledDivSpriteSvgLogout = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    width: 36px;
    height: 36px;
  }
`;

export const StyledLogoutH2 = styled.h2`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    color: ${({ theme }) => theme.colors.colorText};
    font-family: Poppins-Regular;
    font-weight: 400;
    font-size: 27px;
    line-height: normal;
  }
`;

export const StyledLogoutP = styled.p`
  color: #fff;
  text-align: center;
  font-family: Poppins-Regular;
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  width: 214px;
  @media screen and (min-width: 768px) {
    width: 299px;
    margin-top: 52px;
  }
`;

export const StyledButtonLogout = styled(StyledButton)`
  margin-top: 40px;
`;

export const StyledButtonCancel = styled(StyledButtonWhite)`
  margin-top: 20px;
`;
