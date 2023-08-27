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
    {isMobile && (
    <NavWrapperStyled>
      <NavLinkWrapperStyled>
        <NavIconStyled>
          <SpriteSVG name={'home-page'} />
        </NavIconStyled>
        <NavLinkStyled to="/home">Home</NavLinkStyled>
      </NavLinkWrapperStyled>
      <NavLinkWrapperStyled>
        <NavIconStyled>
          <SpriteSVG name={'statistic'} />
        </NavIconStyled>
        <NavLinkStyled to="/statistic">Statistics</NavLinkStyled>
      </NavLinkWrapperStyled>
      <NavLinkWrapperStyled>
      <NavIconStyled>
        <SpriteSVG name={'currency'} />
      </NavIconStyled>
        <NavLinkStyled to="/currency">Currency</NavLinkStyled>
      </NavLinkWrapperStyled>
    </NavWrapperStyled>
    )}
    {isTablet && (
      <NavWrapperStyled>
      <NavLinkWrapperStyled>
        <NavIconStyled>
          <SpriteSVG name={'home-page'} />
        </NavIconStyled>
        <NavLinkStyled to="/home">Home</NavLinkStyled>
      </NavLinkWrapperStyled>
      <NavLinkWrapperStyled>
        <NavIconStyled>
          <SpriteSVG name={'statistic'} />
        </NavIconStyled>
        <NavLinkStyled to="/statistic">Statistics</NavLinkStyled>
      </NavLinkWrapperStyled>
      </NavWrapperStyled>
    )}
    {isDesctop && (
      <NavWrapperStyled>
        <NavLinkWrapperStyled>
          <NavIconStyled>
            <SpriteSVG name={'home-page'} />
          </NavIconStyled>
          <NavLinkStyled to="/home">Home</NavLinkStyled>
        </NavLinkWrapperStyled>
        <NavLinkWrapperStyled>
          <NavIconStyled>
            <SpriteSVG name={'statistic'} />
          </NavIconStyled>
          <NavLinkStyled to="/statistic">Statistics</NavLinkStyled>
        </NavLinkWrapperStyled>
      </NavWrapperStyled>
    )}
  );
}

export default Navigation;
