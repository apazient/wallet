import React from 'react';

import {
  NavIconStyled,
  NavLinkStyled,
  NavWrapperStyled,
  NavWrapperStyledTablet,
  NavLinkStyledTablet,
} from './Navigation.styled';
import { SpriteSVG } from 'pictures/SpriteSVG';
import { IS_DESKTOP, IS_MOBILE, IS_TABLET } from 'styles/const ';

const Navigation = () => {
  const { useMediaQuery } = require('react-responsive');

  //brackpoints
  const isMobile = useMediaQuery(IS_MOBILE);
  const isTablet = useMediaQuery(IS_TABLET);
  const isDesktop = useMediaQuery(IS_DESKTOP);
  return (
    <>
      {isMobile && (
        <NavWrapperStyled>
          <li>
            <NavLinkStyled to="/">
              <NavIconStyled>
                <SpriteSVG name={'home-page'} />
              </NavIconStyled>
            </NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled to="/summary">
              <NavIconStyled>
                <SpriteSVG name={'statistic'} />
              </NavIconStyled>
            </NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled to="/currency">
              <NavIconStyled>
                <SpriteSVG name={'currency'} />
              </NavIconStyled>
            </NavLinkStyled>
          </li>
        </NavWrapperStyled>
      )}
      {isTablet && (
        <NavWrapperStyledTablet>
          <li>
            <NavLinkStyledTablet to="/">
              <NavIconStyled>
                <SpriteSVG name={'home-page'} />
              </NavIconStyled>
              <span>Home</span>
            </NavLinkStyledTablet>
          </li>
          <li>
            <NavLinkStyledTablet to="/summary">
              <NavIconStyled>
                <SpriteSVG name={'statistic'} />
              </NavIconStyled>
              <span>Statistics</span>
            </NavLinkStyledTablet>
          </li>
        </NavWrapperStyledTablet>
      )}
      {isDesktop && (
        <NavWrapperStyledTablet>
          <li>
            <NavLinkStyledTablet to="/">
              <NavIconStyled>
                <SpriteSVG name={'home-page'} />
              </NavIconStyled>
              <span>Home</span>
            </NavLinkStyledTablet>
          </li>
          <li>
            <NavLinkStyledTablet to="/summary">
              <NavIconStyled>
                <SpriteSVG name={'statistic'} />
              </NavIconStyled>
              <span>Statistics</span>
            </NavLinkStyledTablet>
          </li>
        </NavWrapperStyledTablet>
      )}
    </>
  );
};

export default Navigation;
