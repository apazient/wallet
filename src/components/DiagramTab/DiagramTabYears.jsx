import React from 'react';
import {
  StyledIconDiagram,
  StyledSelect,
  WrapperDiagramTab,
} from './DiagramTab.styled';
import { selectYear } from 'redux/SummaryPage/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { setYear } from 'redux/SummaryPage/summarySlice';
import { SpriteSVG } from 'pictures/SpriteSVG';

export const DiagramTabYears = () => {
  // Временая функция генерации годjd
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 5 }, (_, index) => ({
    value: currentYear - 5 + index + 1,
    label: (currentYear - 5 + index + 1).toString(),
  })).reverse();

  const dispatch = useDispatch();
  const year = useSelector(selectYear);

  const newValue = { value: year, label: `${year}` };
  const handleYearChange = selectedOption => {
    dispatch(setYear(selectedOption.value));
  };

  return (
    <WrapperDiagramTab>
      <StyledSelect
        options={years}
        value={newValue}
        onChange={handleYearChange}
        placeholder="Choose year"
        isSearchable={false}
        classNamePrefix="react-select"
        components={{
          DropdownIndicator: () => (
            <StyledIconDiagram>
              <SpriteSVG name={'select'} />
            </StyledIconDiagram>
          ),
        }}
      />
    </WrapperDiagramTab>
  );
};
