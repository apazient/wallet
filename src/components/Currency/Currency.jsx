import React, { useEffect, useState } from 'react';
import {
  CurrencyContainerStyled,
  CurrencyImgStyled,
  EllipseImgStyled,
  EllipseImgStyled2,
  LineImgStyled,
  TableCurrencyStyled,
  TbodyCurrencyStyled,
  TdCurrencyStyled,
  ThCurrencyStyled,
  TheadCurrencyStyled,
  TrCurrencyStyled,
  EuroImgStyled,
  WaveImgStyled,
  UsdImgStyled,
} from './Currency.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrencyData } from 'redux/Currency/operations';
import {
  selectCurrency,
  selectCurrencyLoading,
  selectEuroBuy,
  selectUsdBuy,
} from '../../redux/Currency/selectors';
import { SpriteSVG } from 'pictures/SpriteSVG';

export const Currency = () => {
  const dispatch = useDispatch();
  const currencyData = useSelector(selectCurrency);
  const isLoading = useSelector(selectCurrencyLoading);

  const lastRequestDate = localStorage.getItem('lastCurrencyRequestDate');
  const storedCurrencyData = JSON.parse(localStorage.getItem('currencyData'));

  const currentTime = new Date().getTime();
  const shouldFetchNewData =
    !lastRequestDate ||
    currentTime - new Date(lastRequestDate).getTime() > 3600000;

  useEffect(() => {
    if (currencyData.length > 0) {
      localStorage.setItem('lastCurrencyRequestDate', new Date().toString());
      localStorage.setItem('currencyData', JSON.stringify(currencyData));
    }
  }, [currencyData]);

  useEffect(() => {
    if (shouldFetchNewData) {
      dispatch(fetchCurrencyData());
    }
  }, [dispatch, shouldFetchNewData]);

  //   useEffect(() => {
  //   dispatch(fetchCurrencyData());
  //   }, [dispatch]);

  const usdBuy = useSelector(selectUsdBuy);
  const euroBuy = useSelector(selectEuroBuy);
  console.log('USD Buy:', usdBuy);
  console.log('Euro Buy:', euroBuy);

  return (
    <CurrencyContainerStyled>
      <TableCurrencyStyled>
        <TheadCurrencyStyled>
          <TrCurrencyStyled>
            <ThCurrencyStyled>Currency</ThCurrencyStyled>
            <ThCurrencyStyled>Purchase</ThCurrencyStyled>
            <ThCurrencyStyled>Sale</ThCurrencyStyled>
          </TrCurrencyStyled>
        </TheadCurrencyStyled>
        <TbodyCurrencyStyled>
          {isLoading ? (
            <tr>
              <TdCurrencyStyled>Loading...</TdCurrencyStyled>
            </tr>
          ) : (
            (shouldFetchNewData ? currencyData : storedCurrencyData).map(
              (data, index) => (
                <tr key={index}>
                  <TdCurrencyStyled>{data.currency}</TdCurrencyStyled>
                  <TdCurrencyStyled>{data.buy}</TdCurrencyStyled>
                  <TdCurrencyStyled>{data.sell}</TdCurrencyStyled>
                </tr>
              )
            )
          )}
        </TbodyCurrencyStyled>
      </TableCurrencyStyled>
      <CurrencyImgStyled>
        <EllipseImgStyled>
          <EuroImgStyled>{euroBuy}</EuroImgStyled>
          <SpriteSVG name={'currencyEllipse'} />
        </EllipseImgStyled>
        <EllipseImgStyled2>
          <UsdImgStyled>{usdBuy}</UsdImgStyled>
          <SpriteSVG name={'currencyEllipse'} />
        </EllipseImgStyled2>
        <LineImgStyled>
          <SpriteSVG name={'currencyLine'} />
        </LineImgStyled>
        <WaveImgStyled>
          <SpriteSVG name={'currencyWave'} />
        </WaveImgStyled>
      </CurrencyImgStyled>
    </CurrencyContainerStyled>
  );
};
