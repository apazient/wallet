import React from 'react';

import {
  NavIconStyled,
  NavLinkStyled,
  NavLinkWrapperStyled,
  NavWrapperStyled,
  NavWrapperStyledTablet,
  NavLinkStyledTablet,
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
            <NavLinkStyled to="/">
              <NavIconStyled>
              <SpriteSVG name={'home-page'} />
            </NavIconStyled>
            </NavLinkStyled>
          </NavLinkWrapperStyled>
          <NavLinkWrapperStyled>
            <NavLinkStyled to="/summary">
              <NavIconStyled>
              <SpriteSVG name={'statistic'} />
            </NavIconStyled>
            </NavLinkStyled>
          </NavLinkWrapperStyled>
          <NavLinkWrapperStyled>
            <NavLinkStyled to="/currency">
              <NavIconStyled>
              <SpriteSVG name={'currency'} />
            </NavIconStyled>
            </NavLinkStyled>
          </NavLinkWrapperStyled>
        </NavWrapperStyled>
      )}
      {isTablet && (
        <NavWrapperStyledTablet>
          <NavLinkWrapperStyled>
            <NavLinkStyledTablet to="/">
              <NavIconStyled>
              <SpriteSVG name={'home-page'} />
            </NavIconStyled>
            Home
            </NavLinkStyledTablet>
          </NavLinkWrapperStyled>
          <NavLinkWrapperStyled>
            <NavLinkStyledTablet to="/summary">
              <NavIconStyled>
              <SpriteSVG name={'statistic'} />
            </NavIconStyled>
              Statistics
              </NavLinkStyledTablet>
          </NavLinkWrapperStyled>
        </NavWrapperStyledTablet>
      )}
      {isDesctop && (
        <NavWrapperStyled>
        <NavLinkWrapperStyled>
          <NavLinkStyledTablet to="/">
            <NavIconStyled>
            <SpriteSVG name={'home-page'} />
          </NavIconStyled>
          Home
          </NavLinkStyledTablet>
        </NavLinkWrapperStyled>
        <NavLinkWrapperStyled>
          <NavLinkStyledTablet to="/summary">
            <NavIconStyled>
            <SpriteSVG name={'statistic'} />
          </NavIconStyled>
            Statistics
            </NavLinkStyledTablet>
        </NavLinkWrapperStyled>
      </NavWrapperStyled>
      )}
    </>
  );
};

export default Navigation;
