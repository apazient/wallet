import { styled } from 'styled-components';
import Select from 'react-select';
export const StyledSelect = styled(Select)`
  position: relative;
  width: 280px;
  height: 50px;
  background: transparent;
  @media screen and (min-width: 768px) {
    width: 394px;
  }
  /* Стили для выбранного значения */
  .react-select__single-value {
    color: ${({ theme }) => theme.colors.colorText};
    font-size: 16px;
    line-height: 1.5;
    padding: 12px 20px 14px 20px;

    font-family: Poppins-Regular;
  }
  .react-select__value-container {
    padding: 0;
  }
  .react-select__control {
    background: transparent;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 0px;
    padding-left: ${({ theme }) => theme.spacing(5)};
    padding-bottom: ${({ theme }) => theme.spacing(2)};
    @media screen and (min-width: 768px) {
      padding-left: ${({ theme }) => theme.spacing(2)};
    }
  }

  /* Убираем обводку при фокусе */
  .react-select__control:focus {
    outline: none !important;
    border: 1px solid transparent;
  }
  /*Убираем синий ховер  */
  .react-select__control:hover {
    border: none;
    box-shadow: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
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
    color: ${({ theme }) => theme.colors.colorText};
    font-family: Poppins-Regular;
    font-size: 16px;
    transition: background-color 0.3s, color 0.3s;
    margin-top: 0;
    &:hover,
    &.react-select__option--is-focused,
    &.react-select__option--is-selected {
      background-color: rgba(255, 255, 255, 0.1);
      color: ${({ theme }) => theme.colors.hover};
      font-family: Poppins-Regular;
      font-size: 16px;
    }
  }

  .react-select__menu {
    border-radius: 8px;
    max-height: 352px;
    overflow: hidden;
    margin: 0;
    background-color: linear-gradient(
      360deg,
      rgba(83, 61, 186, 0.7) 0%,
      rgba(80, 48, 154, 0.7) 35.94%,
      rgba(106, 70, 165, 0.52) 61.04%,
      rgba(133, 93, 175, 0.13) 100%
    );
  }
  .react-select__menu-list {
    overflow-y: auto; /* Добавляем вертикальную прокрутку при необходимости */
    overflow-x: hidden; /* Скрываем горизонтальную полосу прокрутки */
  }
  .react-select__input::placeholder {
    font-family: Poppins-Regular;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.colorText};
  }

  .react-select__indicators {
    display: none;
  }
`;

export const StyledSelectorSVG = styled.div`
  position: absolute;
  right: 12px;
  top: 8px;
  stroke: ${({ theme }) => theme.colors.colorText};
  width: 18px;
  height: 9px;
  pointer-events: none;
`;
export const StylesSelectWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;
