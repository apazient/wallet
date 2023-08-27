import React from 'react';
import { StyledSelect } from './DiagramTab.styled';
// import { useState } from 'react';
import { selectYear } from 'redux/SummaryPage/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { setYear } from 'redux/SummaryPage/summarySlice';

export const DiagramTabYears = () => {
  // const [selectedYear, setSelectedYear] = useState(null);

  // Временая функция генерации годjd
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 20 }, (_, index) => ({
    value: currentYear - 20 + index + 1,
    label: (currentYear - 20 + index + 1).toString(),
  }));

  const dispatch = useDispatch();
  const year = useSelector(selectYear);

  const newValue = { value: year, label: `${year}` };
  const handleYearChange = selectedOption => {
    dispatch(setYear(selectedOption.value));
  };

  return (
    <div>
      <StyledSelect
        options={years}
        value={newValue}
        onChange={handleYearChange}
        placeholder="Choose year"
        isSearchable
        classNamePrefix="react-select"
      />
    </div>
  );
};
