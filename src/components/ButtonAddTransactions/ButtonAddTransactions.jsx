import React from 'react';
import { useDispatch } from 'react-redux';
import { setIsModalAddTransactionOpen } from '../../redux/Global/globalSlice';
import { SpriteSVG } from 'pictures/SpriteSVG';
import { StyledAdd, StyledPlusAddSvg } from './ButtonAddTransactions.styled';

const ButtonAddTransactions = () => {
  const dispatch = useDispatch();
  return (
    <StyledAdd
      onClick={() => {
        dispatch(setIsModalAddTransactionOpen(true));
      }}
    >
      <StyledPlusAddSvg>
        <SpriteSVG name={'plus'} />
      </StyledPlusAddSvg>
    </StyledAdd>
  );
};

export default ButtonAddTransactions;
