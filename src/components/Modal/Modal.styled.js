import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(34, 13, 91, 0.23);
  backdrop-filter: blur(3.5px);
`;
