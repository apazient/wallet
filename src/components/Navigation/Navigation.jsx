import React from 'react';

import {
  NavIconStyled,
  NavLinkStyled,
  NavLinkWrapperStyled,
  NavWrapperStyled,
} from './Navigation.styled';
import { SpriteSVG } from 'pictures/SpriteSVG';

const Navigation = () => {
  return (
    <NavWrapperStyled>
      <NavLinkWrapperStyled>
        <NavIconStyled>
          <SpriteSVG name={'home-page'} />
        </NavIconStyled>
        <NavLinkStyled href="/">Home</NavLinkStyled>
      </NavLinkWrapperStyled>
      <NavLinkWrapperStyled>
        <NavIconStyled>
          <SpriteSVG name={'statistic'} />
        </NavIconStyled>
        <NavLinkStyled href="/">Statistics</NavLinkStyled>
      </NavLinkWrapperStyled>
      <NavLinkWrapperStyled>
      <NavIconStyled>
        <SpriteSVG name={'currency'} />
      </NavIconStyled>
        <NavLinkStyled href="/">Currency</NavLinkStyled>
      </NavLinkWrapperStyled>
    </NavWrapperStyled>
  );
};

export default Navigation;
