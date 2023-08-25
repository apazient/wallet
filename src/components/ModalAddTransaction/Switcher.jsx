import React from 'react';
import {
  SwitcherInput,
  SwitcherLabel,
  SwitcherSpan,
  SwitcherWrapper,
} from './Switcher.styled';
import { StyledPlusSvg } from './ModalAddTransaction.styled';
import { SpriteSVG } from 'pictures/SpriteSVG';

export const Switcher = () => {
  return (
    <SwitcherWrapper>
      <SwitcherLabel>
        <SwitcherInput type="checkbox" />
        <SwitcherSpan>
          <StyledPlusSvg>
            <SpriteSVG name={'close'} />
          </StyledPlusSvg>
        </SwitcherSpan>
      </SwitcherLabel>
    </SwitcherWrapper>
  );
};
