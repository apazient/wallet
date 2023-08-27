import React from 'react';

import {
  NavIconStyled,
  NavLinkStyled,
  NavLinkWrapperStyled,
  NavWrapperStyled,
} from './Navigation.styled';
import { SpriteSVG } from 'pictures/SpriteSVG';

const Navigation = () => {
  const { useMediaQuery } = require('react-responsive');

  //brackpoints
  const isMobile = useMediaQuery({ minWidth: 220, maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1200 });
  const isDesctop = useMediaQuery({ minWidth: 1200 });
  return (
    <>
      {isMobile && (
        <NavWrapperStyled>
          <NavLinkWrapperStyled>
            <NavIconStyled>
              <SpriteSVG name={'home-page'} />
            </NavIconStyled>

            <NavLinkStyled to="/">Home</NavLinkStyled>
          </NavLinkWrapperStyled>
          <NavLinkWrapperStyled>
            <NavIconStyled>
              <SpriteSVG name={'statistic'} />
            </NavIconStyled>

            <NavLinkStyled to="/summary">Statistics</NavLinkStyled>
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
            <NavLinkStyled to="/">Home</NavLinkStyled>
          </NavLinkWrapperStyled>
          <NavLinkWrapperStyled>
            <NavIconStyled>
              <SpriteSVG name={'statistic'} />
            </NavIconStyled>
            <NavLinkStyled to="/summary">Statistics</NavLinkStyled>
          </NavLinkWrapperStyled>
        </NavWrapperStyled>
      )}
      {isDesctop && (
        <NavWrapperStyled>
          <NavLinkWrapperStyled>
            <NavIconStyled>
              <SpriteSVG name={'home-page'} />
            </NavIconStyled>
            <NavLinkStyled to="/">Home</NavLinkStyled>
          </NavLinkWrapperStyled>
          <NavLinkWrapperStyled>
            <NavIconStyled>
              <SpriteSVG name={'statistic'} />
            </NavIconStyled>
            <NavLinkStyled to="/summary">Statistics</NavLinkStyled>
          </NavLinkWrapperStyled>
        </NavWrapperStyled>
      )}
    </>
  );
};

export default Navigation;
