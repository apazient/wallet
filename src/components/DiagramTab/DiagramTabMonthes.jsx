import React from 'react';
import { StyledSelect } from './DiagramTab.styled';
import { useState } from 'react';

export const DiagramTabMonthes = () => {
  const months = [
    { value: 'january', label: 'January' },
    { value: 'february', label: 'February' },
    { value: 'march', label: 'March' },
    { value: 'april', label: 'April' },
    { value: 'may', label: 'May' },
    { value: 'june', label: 'June' },
    { value: 'july', label: 'July' },
    { value: 'august', label: 'August' },
    { value: 'september', label: 'September' },
    { value: 'october', label: 'October' },
    { value: 'november', label: 'November' },
    { value: 'october', label: 'December' },
  ];
  const [selectedMonth, setSelectedMonth] = useState(null);

  const handleMonthChange = selectedOption => {
    setSelectedMonth(selectedOption);
  };

  return (
    <div>
      <StyledSelect
        options={months}
        value={selectedMonth}
        onChange={handleMonthChange}
        placeholder="Choose month"
        classNamePrefix="react-select"
      />
    </div>
  );
};
