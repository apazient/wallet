import styled from 'styled-components';
import bgRight from '../../pictures/LoginPage/logRightUsdCoins.png';
import bgLeft from '../../pictures/LoginPage/logLeftUsdCoins.png';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: #101010;
  background-image: url(${bgRight}), url(${bgLeft});
  background-size: 50% auto, 30% auto;
  background-position: bottom right, top left;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
