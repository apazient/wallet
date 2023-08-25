import Select from 'react-select';
import styled from 'styled-components';
export const StyledSelect = styled(Select)`
  width: 182px;
  height: 50px;
  background: rgba(74, 86, 226, 0.1);


  /* Стили для выбранного значения */
  .react-select__single-value {
    color: var(--white, #fbfbfb);
    font-size: 16px;
    font-weight: 400;
    padding: 12px 20px 14px 20px
    line-height: normal;
    font-family: Poppins;
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
    line-height: normal;
 box-shadow: none ;
  }
    /* Убираем обводку при фокусе */
  .react-select__control:focus {
    outline: none;
    border: 1px solid transparent;
  }
  /*Убираем синий ховер  */
  .react-select__control:hover {
    border-color: rgba(255, 255, 255, 0.60);
    box-shadow: none ;
  }

  

  .react-select__input {
   
  }
    .react-select__input-container {
    padding: 0;
    margin: 0;
  }

    .react-select__indicator-separator {
    display: none; /* Скрываем разделитель индикаторов */
  }
  /* Стили для опций (вариантов) */
  .react-select__option {
    color: var(--white, #fbfbfb);
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    transition: background-color 0.3s, color 0.3s;
    margin-top: 0;
    &:hover,
    &.react-select__option--is-focused,
    &.react-select__option--is-selected {
      background: var(--form-color, rgba(255, 255, 255, 0.1));
      color: var(--dashboard-text, #ff868d);
      font-family: Poppins;
      font-size: 16px;
      font-weight: 400;
      line-height: normal;
    }
  }

  .react-select__menu {
    border-radius: 8px;
    background: var(
      --small-form-color,
      linear-gradient(
        360deg,
        rgba(83, 61, 186, 0.7) 0%,
        rgba(80, 48, 154, 0.7) 35.94%,
        rgba(106, 70, 165, 0.52) 61.04%,
        rgba(133, 93, 175, 0.13) 100%
      )
    );
    max-height: 182px;
    overflow: hidden;
    margin:0;
  }
  .react-select__menu-list {
    overflow-y: auto; /* Добавляем вертикальную прокрутку при необходимости */
    overflow-x: hidden; /* Скрываем горизонтальную полосу прокрутки */
  }
    .react-select__placeholder {
      color: var(--white, #fbfbfb);
    font-size: 16px;
    font-weight: 400;
    font-family: Poppins;
   ]
  }
`;

export const StyledDiagramTab = styled.div`
  display: flex;
  gap: 32px;
`;
