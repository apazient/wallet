import React from 'react';
import {
  Overlay14,
  Overlay16,
  Overlay17,
  Overlay18,
  Overlay19,
  Overlay20,
} from './Main.styled';

export const Main = ({ children }) => {
  return (
    <main>
      <Overlay16 />
      <Overlay18 />
      <Overlay14 />
      <Overlay19 />
      <Overlay17 />
      <Overlay20 />
      {children}
    </main>
  );
};
