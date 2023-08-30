import React, { useEffect } from 'react';
import MediaQuery from 'react-responsive';
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
  selectLastRequestTime,
  selectUsdBuy,
} from '../../redux/Currency/selectors';
import { SpriteSVG } from 'pictures/SpriteSVG';

export const Currency = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectCurrencyLoading);
  const lastRequestDate = useSelector(selectLastRequestTime);
  const currentTime = new Date().getTime();
  const isHourFinish = currentTime - lastRequestDate > 3600000 ? true : false;
  const currencyData = useSelector(selectCurrency);

  useEffect(() => {
    if (isHourFinish) {
      dispatch(fetchCurrencyData());
    }
  }, [dispatch, isHourFinish]);

  const usdBuy = useSelector(selectUsdBuy);
  const euroBuy = useSelector(selectEuroBuy);

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
            currencyData.map((data, index) => (
              <tr key={index}>
                <TdCurrencyStyled>{data.currency}</TdCurrencyStyled>
                <TdCurrencyStyled>{data.buy}</TdCurrencyStyled>
                <TdCurrencyStyled>{data.sell}</TdCurrencyStyled>
              </tr>
            ))
          )}
        </TbodyCurrencyStyled>
      </TableCurrencyStyled>
      <CurrencyImgStyled>
        <EllipseImgStyled>
          <EuroImgStyled>{euroBuy}</EuroImgStyled>
          <MediaQuery maxWidth={1280}>
            <SpriteSVG name={'currencyEllipse320768'} />
          </MediaQuery>
          <MediaQuery minWidth={1279}>
            <SpriteSVG name={'currencyEllipse'} />
          </MediaQuery>
        </EllipseImgStyled>
        <EllipseImgStyled2>
          <UsdImgStyled>{usdBuy}</UsdImgStyled>
          <MediaQuery maxWidth={1280}>
            <SpriteSVG name={'currencyEllipse320768'} />
          </MediaQuery>
          <MediaQuery minWidth={1279}>
            <SpriteSVG name={'currencyEllipse'} />
          </MediaQuery>
        </EllipseImgStyled2>
        <LineImgStyled>
          <MediaQuery maxWidth={768}>
            <SpriteSVG name={'currencyLine320'} />
          </MediaQuery>
          <MediaQuery minWidth={769} maxWidth={1279}>
            <SpriteSVG name={'currencyLine768'} />
          </MediaQuery>
          <MediaQuery minWidth={1280}>
            <SpriteSVG name={'currencyLine'} />
          </MediaQuery>
        </LineImgStyled>
        <WaveImgStyled>
          <MediaQuery maxWidth={768}>
            <SpriteSVG name={'currencyWave320'} />
          </MediaQuery>
          <MediaQuery minWidth={769} maxWidth={1279}>
            <SpriteSVG name={'currencyWave767'} />
          </MediaQuery>
          <MediaQuery minWidth={1280}>
            <SpriteSVG name={'currencyWave'} />
          </MediaQuery>
        </WaveImgStyled>
      </CurrencyImgStyled>
    </CurrencyContainerStyled>
  );
};
