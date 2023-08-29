import { styled } from 'styled-components';

export const OverlayCenterMobile = styled.div`
  position: fixed;
  pointer-events: none;
  z-index: -1;
  width: 454px;
  height: 454px;
  border-radius: 454px;
  transform: translate(50%, 50%);
  bottom: 50%;
  right: 50%;
  background: rgba(47, 21, 176, 0.73);
  filter: blur(100px);
`;

export const OverlayCenterLogout = styled.div`
  position: fixed;
  pointer-events: none;
  z-index: -1;
  width: 353px;
  height: 353px;
  border-radius: 353px;
  transform: translate(50%, 50%);
  bottom: 50%;
  right: 50%;
  background: rgba(47, 21, 176, 1);
  filter: blur(100px);
`;
