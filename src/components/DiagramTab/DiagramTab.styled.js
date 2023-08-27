import Select from 'react-select';
import styled from 'styled-components';
export const StyledSelect = styled(Select)`
  width: 100%;
  height: 50px;
  background: rgba(74, 86, 226, 0.1);
  /* Стили для выбранного значения */
  .react-select__single-value {
    color: var(--white, #fbfbfb);
    font-size: 16px;
    font-weight: 400;
    padding: 12px 20px 14px 20px;
    line-height: 1.5;
    font-family: Poppins-Regular;
    margin: 0;
  }

  .react-select__control {
    border-radius: 8px;
    height: 50px;
    border: 1px solid var(--white-60, rgba(255, 255, 255, 0.6));
    background: rgba(74, 86, 226, 0.1);
    margin-bottom: 0;
    color: var(--white, #fbfbfb);
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    box-shadow: none;
  }
  .react-select__value-container {
    padding: 0;
  }
  /* Убираем обводку при фокусе */
  .react-select__control:focus {
    outline: none;
    border: 1px solid transparent;
  }
  /*Убираем синий ховер  */
  .react-select__control:hover {
    border-color: rgba(255, 255, 255, 0.6);
    box-shadow: none;
  }

  .react-select__input-container {
    padding: 0;
    margin: 0;
  }

  .react-select__indicators {
    // падинг для иконки
    padding: 0px 20px;
    display: flex;
    align-items: center;
  }

  .react-select__indicator-separator {
    display: none; /* Скрываем разделитель индикаторов */
  }
  /* Стили для опций (вариантов) */
  .react-select__option {
    color: var(--white, #fbfbfb);
    font-family: Poppins-Regular;
    font-size: 16px;
    transition: background-color 0.3s, color 0.3s;
    margin-top: 0;
    cursor: pointer;
    &:hover,
    &.react-select__option--is-focused,
    &.react-select__option--is-selected {
      background: rgba(255, 255, 255, 0.1);
      color: var(--dashboard-text, #ff868d);
      font-family: Poppins-Regular;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5;
    }
  }

  .react-select__menu {
    border-radius: 8px;
    background: var(
      --small-form-color,
      linear-gradient(
        360deg,
        rgba(83, 61, 186, 1) 0%,
        rgba(80, 48, 154, 1) 35.94%,
        rgba(106, 70, 165, 1) 61.04%,
        rgba(133, 93, 175, 1) 100%
      )
    );
    max-height: 182px;
    overflow: hidden;
    margin: 0;
  }
  .react-select__menu-list {
    overflow-y: auto; /* Добавляем вертикальную прокрутку при необходимости */
    overflow-x: hidden; /* Скрываем горизонтальную полосу прокрутки */
  }
  .react-select__placeholder {
    color: var(--white, #fbfbfb);
    font-size: 16px;
    font-weight: 400;
    font-family: Poppins-Regular;
  }
  .react-select__dropdown-indicator {
    background-image: url('../../pictures/SpriteSVG.jsx={'select'}'); /* замените на путь к вашей SVG иконке */
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
  @media screen and (min-width: 768px) {
    width: 160px;
  }
  @media screen and (min-width: 1280px) {
    width: 180px;
  }
`;

export const StyledIconDiagram = styled.div`
  width: 18px;
  height: 10px;
  display: flex;
  align-items: center;
  transition: transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);
  cursor: pointer;

  svg {
    transform: ${props =>
      props.selectProps.menuIsOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  }
`;

export const StyledDiagramTab = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  margin-top: 32px; // отступ от бублика
  margin-bottom: 20px; // отступ от catagory
  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 16px;
    margin-top: 40px; // отступ от баланса
    margin-bottom: 20px; // отступ от catagory
  }
  @media screen and (min-width: 1280px) {
    gap: 32px;
  }
`;
