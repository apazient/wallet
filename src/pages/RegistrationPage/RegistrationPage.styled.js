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
