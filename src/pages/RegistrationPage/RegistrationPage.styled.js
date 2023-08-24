import styled from 'styled-components';
import bgRight from '../../pictures/RegPage/RegDollarsRight.png';
import bgLeft from '../../pictures/RegPage/RegDollarsLeft.png';

export const RegistrOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: #101010;
  background-image: url(${bgRight}), url(${bgLeft});
  background-size: 40% 100%, 40% 100%;
  background-position: top right, top left;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OverlayGradient11 = styled.div`
  position: fixed;
  width: 707px;
  height: 707px;
  border-radius: 707px;
  bottom: -366px;
  left: -81px;
  background-image: linear-gradient(220deg, #6d54eb 3.47%, #652392 90.06%);
  filter: blur(200px);
`;
export const OverlayGradient12 = styled.div`
  position: fixed;
  width: 515px;
  height: 515px;
  border-radius: 515px;
  top: -107px;
  right: -172px;
  background-color: #6d1c77;
  filter: blur(150px);
`;
export const OverlayGradient13 = styled.div`
  position: fixed;
  width: 454px;
  height: 454px;
  border-radius: 454px;
  top: -153px;
  left: 107px;
  background-color: rgba(47, 21, 176, 0.73);
  filter: blur(100px);
`;
export const OverlayGradient14 = styled.div`
  position: fixed;
  width: 654px;
  height: 654px;
  border-radius: 654px;
  top: -240px;
  right: -137px;
  background-image: linear-gradient(
    220deg,
    rgba(109, 84, 235, 0.73) 3.47%,
    rgba(101, 35, 146, 0.73) 90.06%
  );
  filter: blur(200px);
`;
export const OverlayGradient15 = styled.div`
  position: fixed;
  width: 251px;
  height: 251px;
  border-radius: 251px;
  bottom: -97px;
  left: -92px;
  background-image: linear-gradient(
    46deg,
    rgba(142, 46, 121, 0.68) 0%,
    rgba(171, 51, 173, 0.68) 100%
  );
  filter: blur(100px);
`;
export const OverlayGradient16 = styled.div`
  position: fixed;
  width: 369px;
  height: 369px;
  border-radius: 369px;
  top: -68px;
  left: -120px;
  background-color: #302e8e;
  filter: blur(150px);
`;
