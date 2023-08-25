import styled from 'styled-components';

export const StyledStatisticsTable = styled.div`
  margin-bottom: 46px;

  .statistics-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 280px;
    height: 56px;
    padding: 16px;
    margin-top: 20px;

    border-radius: 8px;
    background-color: rgba(82, 59, 126, 0.6);
    box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(50px);
    & p {
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      padding: 16px;
    }
  }
  @media only screen and (min-width: 768px) {
    .statistics-header {
      width: 336px;
    }
  }
  @media only screen and (min-width: 1280px) {
    .statistics-header {
      width: 395px;
    }
  }
`;

export const StyledStatisticsList = styled.ul`
  display: flex;
  flex-direction: column;
  & li {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    width: 280px;
    padding: 16px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .category-color {
    width: 24px;
    height: 24px;
    border-radius: 2px;
  }
  .category-sum {
    margin-left: auto;
  }
  .category-item {
    padding-left: 16px;
  }

  .gradient {
    height: 2px;
    width: 280px;
    background: linear-gradient(
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.41)
    );
  }

  @media only screen and (min-width: 768px) {
    & li {
      width: 336px;
    }
    .gradient {
      width: 336px;
    }
  }
  @media only screen and (min-width: 1280px) {
    & li {
      width: 395px;
    }
    .gradient {
      width: 395px;
    }
  }
`;

export const StyledStatisticsTotal = styled.ul`
  display: flex;
  flex-direction: column;
  & li {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    width: 280px;
    padding: 16px 16px 0;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .total-sum-exp {
    margin-left: auto;

    color: #ff868d;
    text-align: right;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .total-sum-inc {
    margin-left: auto;

    color: #ffb627;
    text-align: right;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .total-item {
    color: #fbfbfb;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  @media only screen and (min-width: 768px) {
    & li {
      width: 336px;
    }
  }

  @media only screen and (min-width: 1280px) {
    & li {
      width: 395px;
    }
  }
`;
