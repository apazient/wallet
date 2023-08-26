import React, { useEffect } from 'react';
import {
  CurrencyContainerStyled,
  CurrencyImgStyled,
  ImgStyled,
  ImgStyled2,
  TableCurrencyStyled,
  TdCurrencyStyled,
  ThCurrencyStyled,
  TrCurrencyStyled,
} from './currency.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrencyData } from 'redux/currentcy/operations';
import {
  selectCurrency,
  selectCurrencyLoading,
} from 'redux/currentcy/selectors';

import currentImg1 from '../../pictures/currentImage/Vector 8.svg';
import currentImg2 from '../../pictures/currentImage/Vector 7.svg';

export const Currency = () => {
  const dispatch = useDispatch();
  const currencyData = useSelector(selectCurrency);
  const isLoading = useSelector(selectCurrencyLoading);

  useEffect(() => {
    dispatch(fetchCurrencyData());
  }, [dispatch]);

  return (
    <CurrencyContainerStyled>
      <TableCurrencyStyled>
        <thead>
          <TrCurrencyStyled>
            <ThCurrencyStyled>Currency</ThCurrencyStyled>
            <ThCurrencyStyled>Purchase</ThCurrencyStyled>
            <ThCurrencyStyled>Sale</ThCurrencyStyled>
          </TrCurrencyStyled>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <TdCurrencyStyled>Loading...</TdCurrencyStyled>
            </tr>
          ) : (
            currencyData.map((data, index) => (
              <tr key={index}>
                <TdCurrencyStyled>{data.currency}</TdCurrencyStyled>
                <TdCurrencyStyled>{data.buy}</TdCurrencyStyled>
                <TdCurrencyStyled>{data.sell}</TdCurrencyStyled>
              </tr>
            ))
          )}
        </tbody>
      </TableCurrencyStyled>
      <CurrencyImgStyled>
        <ImgStyled src={currentImg1} alt="Image1" />
        <ImgStyled2 src={currentImg2} alt="Image2" />
      </CurrencyImgStyled>
    </CurrencyContainerStyled>
  );
};
