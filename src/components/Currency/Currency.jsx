import React, { useEffect } from 'react';
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
  WaveImgStyled,
} from './Currency.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrencyData } from 'redux/Currentcy/operations';
import {
  selectCurrency,
  selectCurrencyLoading,
} from '../../redux/Currentcy/selectors';
import { SpriteSVG } from 'pictures/SpriteSVG';

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
          <SpriteSVG name={'currencyEllipse'} />
        </EllipseImgStyled>
        <EllipseImgStyled2>
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
