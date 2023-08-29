import styled from 'styled-components';

export const CurrencyContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 767px) {
    display: block;
  }
  @media screen and (min-width: 1280px) {
  }
`;
export const TheadCurrencyStyled = styled.thead`
  margin-top: 0;
  width: 320px;
  height: 50px;
  background: rgba(255, 255, 255, 0.2);
`;
export const TableCurrencyStyled = styled.table`
  width: 320px;
  border-collapse: collapse;
  border-radius: 0px 0px 8px 8px;
  background: rgba(74, 86, 226, 0.1);
  @media screen and (min-width: 767px) {
    width: 336px;
    height: 80px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 480px;
    height: 56px;
    width: 100%;
  }
`;

export const TrCurrencyStyled = styled.tr`
  color: var(--white, #fbfbfb);
  font-family: Poppins-SemiBold;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  @media screen and (min-width: 1280px) {
  }
`;
export const ThCurrencyStyled = styled.th``;
export const TbodyCurrencyStyled = styled.tbody`
  @media screen and (min-width: 767px) {
  }
  @media screen and (min-width: 1280px) {
    width: 100%;
  }
`;

export const TdCurrencyStyled = styled.td`
  padding-top: 8px;
  color: var(--white, #fbfbfb);
  font-family: Poppins-Regular;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  text-transform: uppercase;

  @media screen and (min-width: 767px) {
  }
  @media screen and (min-width: 1280px) {
    padding-top: 24px;
  }
`;

export const CurrencyImgStyled = styled.div`
  width: 320px;
  height: 88px;
  border-radius: 0px 0px 8px 8px;
  background: rgba(74, 86, 226, 0.1);
  @media screen and (min-width: 767px) {
    width: 336px;
  }
  @media screen and (min-width: 1280px) {
    width: 480px;
    height: 235px;
  }
`;
export const EuroImgStyled = styled.span`
  display: none;
  @media screen and (min-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 1280px) {
    display: block;
    color: var(--dashboard-text, #ff868d);
    font-family: Poppins-Regular;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    position: absolute;
    left: -10px;
    bottom: 10px;
  }
`;
export const EllipseImgStyled = styled.div`
  position: relative;
  left: 242px;
  top: -16px;
  z-index: 1;
  @media screen and (min-width: 767px) {
    left: 254px;
  }
  @media screen and (min-width: 1280px) {
    left: 362px;
    top: 34px;
    width: 9px;
    height: 9px;
  }
`;
export const UsdImgStyled = styled.span`
  display: none;
  @media screen and (min-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 1280px) {
    display: block;
    color: var(--dashboard-text, #ff868d);
    font-family: Poppins-Regular;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    position: absolute;
    left: -10px;
    bottom: 10px;
  }
`;
export const EllipseImgStyled2 = styled.div`
  position: relative;
  left: 38px;
  top: -14px;
  z-index: 1;
  @media screen and (min-width: 767px) {
    left: 40px;
    /* top: 16px; */
  }
  @media screen and (min-width: 1280px) {
    left: 58px;
    top: 58px;
    width: 9px;
    height: 9px;
  }
`;
export const LineImgStyled = styled.div`
  position: absolute;
  width: 320px;
  height: 70px;
  top: 267px;
  @media screen and (min-width: 767px) {
    top: 195px;

  }
  @media screen and (min-width: 1280px) {
    top: 474px;
    width: 480px;
    height: 100.356px;
  }
`;
export const WaveImgStyled = styled.div`
  position: relative;
  width: 320px;
  height: 88px;
  top: -38px;
  fill: linear-gradient(
      0deg,
      rgba(57, 0, 150, 0.2) 0%,
      rgba(57, 0, 150, 0.2) 100%
    ),
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.6) 0%,
      rgba(255, 255, 255, 0.32) 37.49%,
      rgba(255, 255, 255, 0.16) 60.91%,
      rgba(255, 255, 255, 0.09) 76.6%,
      rgba(255, 255, 255, 0) 100%
    );

  @media screen and (min-width: 767px) {
    top: -36px;
  }
  @media screen and (min-width: 1280px) {
    top: 40px;
    width: 480px;
    height: 167px;
  }
`;
