import { styled } from 'styled-components';
import Select from 'react-select';
export const StyledSelect = styled(Select)`
  position: relative;
  width: 280px;

  background: transparent;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  @media screen and (min-width: 768px) {
    width: 394px;
  }
  /* Стили для выбранного значения */
  .react-select__single-value {
    margin: 0px;
    color: ${({ theme }) => theme.colors.colorText};
    font-size: 16px;
    font-family: Poppins-Regular;
  }
  .react-select__value-container {
    padding: 0;
  }
  .react-select__control {
    height: 32px;
    background: transparent;
    border-radius: 0px;
    padding: 0 20px 0 20px;
    cursor: pointer;
    border: none !important;
    box-shadow: none !important;
    outline: none !important;
    @media screen and (min-width: 768px) {
      padding-left: ${({ theme }) => theme.spacing(2)};
      padding-right: ${({ theme }) => theme.spacing(2)};
    }
  }

  .react-select__control:hover,
  .react-select__control:focus {
    border: none;
    box-shadow: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  }

  .react-select__input-container {
    padding: 0;
    margin: 0;
  }

  /* Стили для опций (вариантов) */
  .react-select__option {
    color: ${({ theme }) => theme.colors.colorText};
    font-family: Poppins-Regular;
    font-size: 16px;
    transition: all 300ms ease-in-out;
    margin-top: 0;
    cursor: pointer;
    &:hover,
    &.react-select__option--is-focused,
    &.react-select__option--is-selected {
      background-color: rgba(255, 255, 255, 0.1);
      color: ${({ theme }) => theme.colors.hover};
      font-family: Poppins-SemiBold;
      font-size: 16px;
    }
  }

  .react-select__menu {
    border-radius: 8px;
    max-height: 352px;
    overflow: hidden;
    margin: 0;
    background: linear-gradient(
      360deg,
      rgba(83, 61, 186, 1) 0%,
      rgba(80, 48, 154, 1) 35.94%,
      rgba(106, 70, 165, 1) 61.04%,
      rgba(133, 93, 175, 1) 100%
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
  .react-select__indicator-separator {
    display: none;
  }
  .react-select__control.react-select__control--menu-is-open
    .react-select__indicators {
    transform: rotate(-180deg);
  }
`;
