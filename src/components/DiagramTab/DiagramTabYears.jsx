import React, { useState } from 'react';
import { StyledSelect } from './DiagramTab.styled';
// import { useState } from 'react';
import { selectYear } from 'redux/SummaryPage/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { setYear } from 'redux/SummaryPage/summarySlice';

export const DiagramTabYears = () => {
  // const years = [
  //   { value: 1, label: 'January' },
  //   { value: 2, label: 'February' },
  //   { value: 3, label: 'March' },
  //   { value: 4, label: 'April' },
  //   { value: 5, label: 'May' },
  //   { value: 6, label: 'June' },
  //   { value: 7, label: 'July' },
  //   { value: 8, label: 'August' },
  //   { value: 9, label: 'September' },
  //   { value: 10, label: 'October' },
  //   { value: 11, label: 'November' },
  //   { value: 12, label: 'December' },
  // ];

  // const [selectedYear, setSelectedYear] = useState(null);

  // Временая функция генерации годjd
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, index) => ({
    value: currentYear - 50 + index,
    label: (currentYear - 50 + index).toString(),
  }));

  const dispatch = useDispatch();
  const year = useSelector(selectYear);

  const handleYearChange = selectedOption => {
    console.log(selectedOption.value);
    dispatch(setYear(selectedOption.value));
  };

  return (
    <div>
      <StyledSelect
        options={years}
        // value={selectedYear}
        onChange={handleYearChange}
        placeholder="Choose year"
        isSearchable
        classNamePrefix="react-select"
      />
    </div>
  );
};
