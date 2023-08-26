import { styled } from 'styled-components';

export const SwitcherWrapper = styled.div`
  align-items: center;
  display: flex;
`;
export const SwitcherLabel = styled.label`
  width: 80px;
  height: 40px;
  display: inline-block;
  position: relative;
`;
export const SwitcherInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;
export const SwitcherSpan = styled.span`
  background-color: #ffffff;
  transition: all 0.4s;
  position: absolute;
  inset: 0;
  border-radius: ${({ theme }) => theme.spacing(5)};

  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-transition: 0.4s;
  transition: 0.4s;

  &::before {
    position: absolute;
    content: '';
    height: 44px;
    width: 44px;
    left: -2px;
    bottom: -2px;
    background-color: rgba(255, 182, 39, 1);
    box-shadow: 0px 6px 15px 0px rgba(255, 199, 39, 0.5);
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`;
