import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavWrapperStyled = styled.ul`
  display: flex;
  flex-direction: row;
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
  width: 24px;
  height: 24px;
`;

export const NavLinkWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  &:hover {
    ${NavIconStyled} {
      svg {
        background-color: rgba(255, 255, 255, 1);
        filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
        fill: #734aef;
        fillopacity: 1;
        border-radius: 5px;
      }
    }
  }
`;

export const NavLinkStyled = styled(NavLink)`
  color: ${({ theme }) => theme.colors.colorText};
  font-family: Poppins-Regular; /*  нужно поменять шрифт */
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  text-decoration: none; /*  нужно убрать стили для тега а */

  &.hover {
    font-weight: 700px;
    ${NavIconStyled} {
      svg {
        background-color: rgba(255, 255, 255, 1);
        filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
        fill: #4a56e2;
        fillopacity: 1;
        border-radius: 5px;
      }
    }
  }
  &.active {
    font-weight: 700;
    ${NavIconStyled} {
      svg {
        background-color: rgba(255, 255, 255, 1);
        filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
        fill: #4a56e2;
        fillopacity: 1;
        border-radius: 5px;
      }
    }
  }
`;

export const NavWrapperStyledTablet = styled(NavWrapperStyled)`
  flex-direction: column;
`;

export const NavLinkStyledTablet = styled(NavLinkStyled)`
  display: flex;
  gap: 20px;
`;
