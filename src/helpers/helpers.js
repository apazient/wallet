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

export const formatNumber = number => {
  const parts = number.toString().split('.');
  const integerPart = parts[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
  const formattedNumber = integerPart + (parts[1] ? '.' + parts[1] : '');
  return formattedNumber;
};

const expenseSummary = 23456534.3455;

const sum = formatNumber(expenseSummary.toFixed(2));
console.log(sum);
