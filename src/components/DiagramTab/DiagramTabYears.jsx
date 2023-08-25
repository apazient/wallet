import React from 'react';
import { StyledSelect } from './DiagramTab.styled';
import { useState } from 'react';

export const DiagramTabYears = () => {
  const [selectedYear, setSelectedYear] = useState(null);

  // Временая функция генерации годов
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, index) => ({
    value: currentYear - 50 + index,
    label: (currentYear - 50 + index).toString(),
  }));

  const handleYearChange = selectedOption => {
    setSelectedYear(selectedOption);
  };

  return (
    <div>
      <StyledSelect
        options={years}
        value={selectedYear}
        onChange={handleYearChange}
        placeholder="Choose year"
        isSearchable
        classNamePrefix="react-select"
      />
    </div>
  );
};
