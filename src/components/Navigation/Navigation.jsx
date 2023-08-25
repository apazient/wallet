import React from 'react';

import {
  NavIconStyled,
  NavLinkStyled,
  NavLinkWrapperStyled,
  NavWrapperStyled,
} from './Navigation.styled';

const Navigation = () => {
  return (
    <NavWrapperStyled>
      <NavLinkWrapperStyled>
        <NavIconStyled></NavIconStyled>
        <NavLinkStyled href="/">Home</NavLinkStyled>
      </NavLinkWrapperStyled>

      <NavLinkWrapperStyled>
        <NavIconStyled></NavIconStyled>
        <NavLinkStyled href="/">Statistics</NavLinkStyled>
      </NavLinkWrapperStyled>
    </NavWrapperStyled>
  );
};

export default Navigation;
