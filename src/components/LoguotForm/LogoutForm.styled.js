import { styled } from 'styled-components';
import { StyledButton, StyledButtonWhite } from 'styles/Button';

export const StyledSectionLogout = styled.section`
  width: 320px;
  height: 691px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(50px);
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 239px;
`;

export const StyledLogoutP = styled.p`
  color: #fff;
  text-align: center;
  font-family: Poppins-Regular;
  font-size: 18px;
  font-weight: 400;
  width: 214px;
`;

export const StyledButtonLogout = styled(StyledButton)`
  margin-top: 40px;
`;

export const StyledButtonCancel = styled(StyledButtonWhite)`
  margin-top: 20px;
`;
