import React from 'react';
import { useMediaQuery } from 'react-responsive'
import {
  NavIconStyled,
  NavLinkStyled,
  NavLinkWrapperStyled,
  NavWrapperStyled,
} from './Navigation.styled';
import { SpriteSVG } from 'pictures/SpriteSVG';
// import { useMediaQuery } from 'react-responsive';


const Navigation = () => {
  const isMob = useMediaQuery({ minWidth: 220, maxWidth:767 });
  const isTab = useMediaQuery({ minWidth: 768, maxWidth:1200 });
  const isDesc = useMediaQuery({ minWidth: 1200 });
  return (
    <div>
    {isMob && (
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
        </NavWrapperStyled>)}
    {isTab && (
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
        </NavWrapperStyled>
    )}
    {isDesc && (
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
        </NavWrapperStyled>
    )}
     </div>
  );
};

export default Navigation;
