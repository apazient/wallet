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
import { useDispatch } from 'react-redux';
import { showSelect } from 'redux/TransactionCategories/categoriesSlice';

export const Switcher = () => {
  const dispatch = useDispatch();

  return (
    <SwitcherWrapper>
      <SwitcherLabel>
        <SwitcherInput
          type="checkbox"
          onChange={e => dispatch(showSelect(e.target.checked))}
        />
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
