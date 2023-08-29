import { createSelector } from '@reduxjs/toolkit';

export const selectIsSelect = state => state.tranzCategories.isExpense;
export const selectAllCategories = state => {
  return state.tranzCategories.categories;
};

//фільтрує категорію за типом
//повертає isExpense=(10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
//повертає !isExpense={id: '063f1132-ba5d-42b4-951d-44011ca46262', name: 'Income', type: 'INCOME'}
export const selectChoosenCategorie = createSelector(
  [selectAllCategories, selectIsSelect],
  (items, isExpense) => {
    return !isExpense
      ? items.find(cat => cat.type === 'INCOME')
      : items.filter(cat => cat.type === 'EXPENSE');
  }
);
