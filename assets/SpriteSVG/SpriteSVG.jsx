import React from 'react';

export const SpriteSVG = ({ name }) => {
  switch (name) {
    case 'calendar':
      return SpriteSVG;
    default:
      return 'SVG not found';
  }
};
