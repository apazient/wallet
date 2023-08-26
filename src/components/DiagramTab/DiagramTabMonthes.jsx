import React from 'react';
import { StyledSelect } from './DiagramTab.styled';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMonth } from 'redux/SummaryPage/summarySlice';
import { selectMonth, selectYear } from 'redux/SummaryPage/selectors';

export const DiagramTabMonthes = () => {
  const months = [
    { value: 1, label: 'January' },
    { value: 2, label: 'February' },
    { value: 3, label: 'March' },
    { value: 4, label: 'April' },
    { value: 5, label: 'May' },
    { value: 6, label: 'June' },
    { value: 7, label: 'July' },
    { value: 8, label: 'August' },
    { value: 9, label: 'September' },
    { value: 10, label: 'October' },
    { value: 11, label: 'November' },
    { value: 12, label: 'December' },
  ];

  const dispatch = useDispatch();
  const month = useSelector(selectMonth);

  const handleMonthChange = selectedOption => {
    console.log(selectedOption);
    dispatch(setMonth(selectedOption.value));
  };

  return (
    <div>
      <StyledSelect
        options={months}
        // value={month}
        onChange={handleMonthChange}
        placeholder="Choose month"
        classNamePrefix="react-select"
      />
    </div>
  );
};
