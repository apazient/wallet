//шукає категорію у списку катергій і віддає іся категорії за знайденим ключемю
//приймає масив оьбєктів категорій і id категорії
export const getCategoriName = (list, categoryId) => {
  const getObject = list.find(el => el.id === categoryId);
  if (getObject) {
    return getObject.name;
  }
};

export const editString = name => {
  const arrFromStr = name.split(' ');
  const res = arrFromStr.map(el => el[0].toUpperCase() + el.slice(1));
  return res.join(' ');
};
