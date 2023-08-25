import { SpriteSVG } from 'pictures/SpriteSVG';
import React from 'react';
import {
  StyledHeader,
  StyledHeaderBtn,
  StyledExitSvg,
  StyledHeaderText,
  StyledLogoText,
  StyledLogoThumb,
  StyledUserThumb,
  StyledLogoSvg,
  StyledUserWrapper,
} from './Header.styled';

const Header = () => {
  return (
    <StyledHeader>
      <StyledLogoThumb>
        <a href="/">
          <StyledLogoSvg>
            <SpriteSVG name={'logo'} />
          </StyledLogoSvg>
        </a>
        <StyledLogoText>Money Guard</StyledLogoText>
      </StyledLogoThumb>

      <StyledUserThumb>
        <StyledHeaderText>Name</StyledHeaderText>
        <StyledUserWrapper>
          <StyledExitSvg>
            <SpriteSVG name={'exit'} />
          </StyledExitSvg>
          <StyledHeaderBtn type="button">Exit</StyledHeaderBtn>
        </StyledUserWrapper>
      </StyledUserThumb>
    </StyledHeader>
  );
};

export default Header;
