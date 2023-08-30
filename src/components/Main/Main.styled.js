import styled from 'styled-components';

export const MainContainer = styled.main`
  margin: 0px auto;
  overflow-x: hidden;
  max-width: 320px;
  height: 90vh;
  padding: 0 20px;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(82, 59, 126, 0.6);
  }
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.082) 0%,
      rgba(255, 255, 255, 0.2) 100%
    );

    border-radius: 4px;
  }
  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
    overflow-y: hidden;
  }
  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    padding: 0 16px;
    overflow-y: hidden;
  }
`;

export const Overlay16 = styled.div`
  position: fixed;
  pointer-events: none;
  z-index: -1;
  width: 362.381px;
  height: 362.381px;
  border-radius: 362.381px;
  bottom: -390.93px;
  right: -102.38px;
  background: linear-gradient(
    220deg,
    rgba(109, 84, 235, 0.6) 3.47%,
    rgba(101, 35, 146, 0.6) 90.06%
  );
  filter: blur(200px);

  @media screen and (min-width: 768px) {
    width: 893px;
    height: 901px;
    border-radius: 901px;
    bottom: -407px;
    right: -455px;
  }

  @media screen and (min-width: 1280px) {
    bottom: -457px;
    right: -311px;
  }
`;

export const Overlay18 = styled.div`
  position: fixed;
  pointer-events: none;
  z-index: -1;
  width: 134px;
  height: 134px;
  border-radius: 134px;
  bottom: -36px;
  right: 51px;
  filter: blur(91px);
  background: #6d1c77;

  @media screen and (min-width: 768px) {
    width: 330px;
    height: 333px;
    border-radius: 333px;
    bottom: -204px;
    right: 39px;
    filter: blur(150px);
  }
  @media screen and (min-width: 1280px) {
    bottom: -309px;
    right: 271px;
  }
`;

export const Overlay14 = styled.div`
  position: fixed;
  pointer-events: none;
  z-index: -1;
  width: 434px;
  height: 434px;
  border-radius: 434px;
  left: -281px;
  top: -150px;
  background: linear-gradient(
    220deg,
    rgba(109, 84, 235, 0.73) 3.47%,
    rgba(101, 35, 146, 0.73) 90.06%
  );
  filter: blur(122px);

  @media screen and (min-width: 768px) {
    width: 739px;
    height: 745px;
    border-radius: 745px;
    bottom: 245px;
    left: -503px;
    filter: blur(200px);
  }

  @media screen and (min-width: 1280px) {
    left: -223px;
    top: -164px;
  }
`;

export const Overlay17 = styled.div`
  position: fixed;
  pointer-events: none;
  z-index: -1;
  background: #302e8e;
  filter: blur(150px);
  width: 172px;
  height: 172px;
  border-radius: 172px;
  bottom: 153px;
  right: -137px;
  filter: blur(91px);
  @media screen and (min-width: 768px) {
    width: 363px;
    height: 366px;
    border-radius: 366px;
    bottom: 385px;
    right: -306px;
    filter: blur(150px);
  }

  @media screen and (min-width: 1280px) {
    top: 151px;
    right: -212px;
  }
`;

export const Overlay19 = styled.div`
  position: fixed;
  pointer-events: none;
  z-index: -1;
  width: 760px;
  height: 766px;
  border-radius: 766px;
  bottom: -314px;
  left: -196;
  background: linear-gradient(207deg, #341fa0 44.63%, #652392 88.57%);
  filter: blur(200px);

  @media screen and (min-width: 768px) {
    width: 819px;
    height: 825px;
    border-radius: 825px;
    bottom: -410px;
    left: -328px;
  }
  @media screen and (min-width: 1280px) {
    width: 760px;
    height: 766px;
    border-radius: 766px;
    bottom: -314px;
    left: -194px;
  }
`;

export const Overlay20 = styled.div`
  position: fixed;
  pointer-events: none;
  z-index: -1;
  width: 434px;
  height: 434px;
  border-radius: 434px;
  bottom: -204px;
  right: -118px;
  background: linear-gradient(
    220deg,
    rgba(109, 84, 235, 0.73) 3.47%,
    rgba(101, 35, 146, 0.73) 90.06%
  );
  filter: blur(122px);
  @media screen and (min-width: 768px) {
    width: 549px;
    height: 554px;
    border-radius: 554px;
    right: -127px;
    top: -166px;
    background: linear-gradient(211deg, #652392 48.96%, #341fa0 86.46%);
    filter: blur(150px);
  }
  @media screen and (min-width: 1280px) {
    position: fixed;
    pointer-events: none;
    z-index: -1;
    width: 434.249px;
    height: 434.249px;
    border-radius: 434.249px;
    bottom: -204.25px;
    left: -118;
    background: linear-gradient(211deg, #652392 48.96%, #341fa0 86.46%);
    filter: blur(150px);
  }
`;
