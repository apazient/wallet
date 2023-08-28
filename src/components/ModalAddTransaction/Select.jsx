import { SpriteSVG } from 'pictures/SpriteSVG';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectChoosenCategorie } from 'redux/TransactionCategories/selectors';
import { StyledSelect } from './Select.styled';
import { StyledIconDiagram } from 'components/DiagramTab/DiagramTab.styled';

export const SelectExpenses = ({ handleCategoriId, values }) => {
  const categories = useSelector(selectChoosenCategorie);
  const normalized = categories.map(({ id, name }) => ({
    value: id,
    label: name,
  }));
  let initialValue = { value: '', label: '' };
  if (values.value) {
    initialValue = normalized.find(e => e.value === values.value);
  }

  return (
    <StyledSelect
      placeholder="Select a category"
      options={normalized}
      defaultValue={initialValue}
      value={initialValue}
      classNamePrefix="react-select"
      onChange={e => handleCategoriId(e)}
      components={{
        DropdownIndicator: () => (
          <StyledIconDiagram>
            <SpriteSVG name={'select'} />
          </StyledIconDiagram>
        ),
      }}
    ></StyledSelect>
  );
};
