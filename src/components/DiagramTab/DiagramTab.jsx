import React from 'react';
import { StyledDiagramTab } from './DiagramTab.styled';
import { DiagramTabMonthes } from './DiagramTabMonthes';
import { DiagramTabYears } from './DiagramTabYears.jsx';

export const DiagramTab = () => {
  return (
    <div>
      <StyledDiagramTab>
        <DiagramTabMonthes />
        <DiagramTabYears />
      </StyledDiagramTab>
    </div>
  );
};
