//шукає категорію у списку катергій і віддає іся категорії за знайденим ключемю
//приймає масив оьбєктів категорій і id категорії
export const getCategoriName = (list, categoryId) => {
  const getObject = list.find(el => el.id === categoryId);

  return getObject.name;
};
