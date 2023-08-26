import { SpriteSVG } from 'pictures/SpriteSVG';
import styled from 'styled-components';
export const NavWrapperStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  list-style: none;
  padding: 0;
  padding-left: 19px;
  padding-top: 42px;
  padding-bottom: 28px;

  background: linear-gradient(
    220deg,
    rgba(109, 84, 235, 0.6) 3.47%,
    rgba(101, 35, 146, 0.6) 90.06%
  );
`;

export const NavIconStyled = styled.div`
display: flex;
fill: rgba(255, 255, 255, 0.4);
flex-direction: column;
width: 44px;
height: 44px;
margin: 0;
border: none;
`


export const NavLinkWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const NavLinkStyled = styled.a`
  color: ${({ theme }) => theme.colors.colorText};
  font-family: Poppins-Regular;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  text-decoration: none; 
  &:hover {
    font-weight: 700;
    font-family: 'Poppins Bold';
  }
`;
