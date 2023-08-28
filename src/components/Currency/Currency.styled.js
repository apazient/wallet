import styled from 'styled-components';

export const CurrencyContainerStyled = styled.div`
  justify-content: center;
  align-items: center;
  // width: 480px;
  height: 395px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 336px;
    height: 214px;
  }
`;
export const TheadCurrencyStyled = styled.thead`
  /* background-color: #523b7e; */
  background: rgba(255, 255, 255, 0.2);
  max-width: 480px;
  height: 56px;
`;
export const TableCurrencyStyled = styled.table`
  margin-top: 32px;
  width: 100%;
  background-color: #523b7e;
  /* border-collapse: collapse; */

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 336px;
    height: 80px;
    margin-top: 0;
    box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(50px);
  }
  @media screen and (max-width: 767px) {
    margin-top: 0;
    width: 320px;
    height: 50px;
  }
`;

export const TrCurrencyStyled = styled.tr`
  color: var(--white, #fbfbfb);
  font-family: Poppins-SemiBold;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const ThCurrencyStyled = styled.th`
  background-color: black;
`;
export const TbodyCurrencyStyled = styled.tbody`
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 336px;
    border-radius: 0px 0px 8px 8px;
    background: rgba(74, 86, 226, 0.1);
  }
  /* @media screen and (max-width: 767px) {
    width: 320px;
    border-radius: 0px 0px 8px 8px;
    background: rgba(74, 86, 226, 0.1);
  } */
`;

export const TdCurrencyStyled = styled.td`
  color: var(--white, #fbfbfb);
  font-family: Poppins-Regular;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  padding-top: 24px;
  text-transform: uppercase;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    padding-top: 8px;
  }
`;
export const CurrencyImgStyled = styled.div`
  background-color: #523b7e;
  width: 320px;
  @media screen and (min-width: 767px) {
    width: 336px;
  }
  @media screen and (min-width: 1280px) {
    width: 480px;
  }
`;
export const EuroImgStyled = styled.span`
  color: var(--dashboard-text, #ff868d);
  font-family: Poppins-Regular;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  position: absolute;
  left: -10px;
  bottom: 10px;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: none;
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
export const EllipseImgStyled = styled.div`
  position: relative;
  left: 362px;
  top: 34px;
  z-index: 1;
  width: 9px;
  height: 9px;
  flex-shrink: 0;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    left: 254px;
    top: 1px;
  }
  @media screen and (max-width: 767px) {
    left: 242px;
    top: -7px;
  }
`;
export const UsdImgStyled = styled.span`
  color: var(--dashboard-text, #ff868d);
  font-family: Poppins-Regular;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  position: absolute;
  left: -10px;
  bottom: 10px;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: none;
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
export const EllipseImgStyled2 = styled.div`
  position: relative;
  left: 58px;
  top: 60px;
  z-index: 1;
  width: 9px;
  height: 9px;
  flex-shrink: 0;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    left: 40px;
    top: 16px;
  }

  @media screen and (max-width: 767px) {
    left: 38px;
    top: 8px;
  }
`;
export const LineImgStyled = styled.div`
  position: absolute;
  height: 100.356px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    top: 222px;
  }

  @media screen and (max-width: 767px) {
    width: 320px;
    height: 70px;
    top: 320px;
  }
`;
export const WaveImgStyled = styled.div`
  position: relative;
  top: 40px;
  width: 480px;
  height: 167px;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    position: static;
    width: 336px;
    height: 88px;
  }
  @media screen and (min-width: 767px) {
    width: 320px;
    height: 88px;
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
  }
`;
