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

export const OverlayGradient1 = styled.div`
  position: fixed;
  pointer-events: none;
  width: 595px;
  height: 595px;
  border-radius: 595px;
  bottom: -169px;
  right: -78px;
  background-image: linear-gradient(220deg, #6d54eb 3.47%, #652392 90.06%);
  background-size: 595px;
  filter: blur(200px);
`;
export const OverlayGradient2 = styled.div`
  position: fixed;
  pointer-events: none;
  width: 713px;
  height: 713px;
  border-radius: 713px;
  top: -254px;
  left: -219px;
  background-image: linear-gradient(
    220deg,
    rgba(109, 84, 235, 0.73) 3.47%,
    rgba(101, 35, 146, 0.73) 90.06%
  );
  filter: blur(200px);
`;
export const OverlayGradient3 = styled.div`
  position: fixed;
  pointer-events: none;
  width: 284px;
  height: 284px;
  border-radius: 284px;
  top: -196px;
  left: -103px;
  background-image: linear-gradient(
    46deg,
    rgba(142, 46, 121, 0.68) 0%,
    rgba(171, 51, 173, 0.68) 100%
  );
  filter: blur(100px);
`;
export const OverlayGradient4 = styled.div`
  position: fixed;
  pointer-events: none;
  width: 284px;
  height: 284px;
  border-radius: 284px;
  top: 196px;
  right: 0;
  background-color: #302e8e;
  filter: blur(150px);
`;
export const OverlayGradient5 = styled.div`
  position: fixed;
  pointer-events: none;
  width: 220px;
  height: 220px;
  border-radius: 220px;
  bottom: -71px;
  right: 310px;
  background-color: #6d1c77;
  filter: blur(150px);
`;
