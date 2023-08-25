import { SpriteSVG } from 'pictures/SpriteSVG';
import styled from 'styled-components';

export const NavWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 42px 0 30px;

  background: linear-gradient(
    220deg,
    rgba(109, 84, 235, 0.6) 3.47%,
    rgba(101, 35, 146, 0.6) 90.06%
  );
`;

export const NavIconStyled = styled.div`
width: 24px;
height: 24px;`
// export const NavIconStyled = styled.div`
//   /* зашлушка иконки*/
//   width: 24px;
//   height: 24px;
//   background: purple;
//   margin-right: 20px;
// `;

export const NavLinkWrapperStyled = styled.div`
  display: flex;
  align-items: center;
`;

export const NavLinkStyled = styled.a`
  color: ${({ theme }) => theme.colors.colorText};
  font-family: Poppins; /*  нужно поменять шрифт */
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  text-decoration: none; /*  нужно убрать стили для тега а */
  &.active {
    font-weight: 700;
  }
`;
