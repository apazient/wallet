import styled, { keyframes } from 'styled-components';

export const LoaderOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoaderSVG = styled.svg`
  display: block;
  width: 6.25em;
  height: 6.25em;
  animation: ${rotate} 2s ease-out infinite;
`;