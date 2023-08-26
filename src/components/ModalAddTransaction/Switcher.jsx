import React from 'react';
import {
  StyledMinusSvg,
  StyledPlusSvg,
  SwitcherInput,
  SwitcherLabel,
  SwitcherSpan,
  SwitcherWrapper,
} from './Switcher.styled';

import { SpriteSVG } from 'pictures/SpriteSVG';

export const Switcher = () => {
  return (
    <SwitcherWrapper>
      <SwitcherLabel>
        <SwitcherInput type="checkbox" />
        <SwitcherSpan>
          <StyledPlusSvg>
            <SpriteSVG name={'plus'} />
          </StyledPlusSvg>
          <StyledMinusSvg>
            <SpriteSVG name={'minus'} />
          </StyledMinusSvg>
        </SwitcherSpan>
      </SwitcherLabel>
    </SwitcherWrapper>
  );
};
