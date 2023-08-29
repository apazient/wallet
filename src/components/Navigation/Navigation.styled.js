import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavWrapperStyled = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 35px;
  padding: 12px 0 12px 0;
  @media screen and (min-width: 768px) {
    gap: ${({ theme }) => theme.spacing(5)};
  }
`;
export const NavIconStyled = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 7px;
  transition: all 250ms ease-in-out;
  fill: ${({ theme }) => theme.colors.navLink};
  &:hover,
  &:active {
    fill: #734aef;
    filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
    background-color: ${({ theme }) => theme.colors.colorText};
  }
  //Медіаправила
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;
export const NavLinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 44px;
  height: 44px;
  font-family: Poppins-Regular;
  font-size: 18px;
  font-style: normal;
  cursor: pointer;
  transition: all 250ms ease-in-out;
  color: ${({ theme }) => theme.colors.navLink};

  //Ховер і Актів
  &.hover,
  &.active {
    font-family: Poppins-Bold;
    color: ${({ theme }) => theme.colors.colorText};

    ${NavIconStyled} {
      fill: #734aef;
      filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
      background-color: ${({ theme }) => theme.colors.colorText};
    }
  }
`;

export const NavLinkStyledTablet = styled(NavLinkStyled)`
  flex-direction: row;
  width: 100%;
  height: 100%;
  gap: ${({ theme }) => theme.spacing(5)};
`;

export const NavWrapperStyledTablet = styled(NavWrapperStyled)`
  padding: 40px 0 28px 0;
  flex-direction: column;
  align-items: flex-start;
`;
