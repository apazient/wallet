import { styled } from 'styled-components';

export const StyledModalSection = styled.section`
  width: 320px;
  height: 568px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(50px);
`;

export const StyledForm = styled.form`
  width: 100%;
  height: 50px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledDiv = styled.div`
  box-sizing: border-box;
  padding: 98px 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const StyledDivItems = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const StyledH2 = styled.h2`
  color: var(--white, #fbfbfb);
  font-family: Poppins;
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const StyledDivInputs = styled.div`
  width: 260px;
  display: flex;
  gap: 20px;
  position: relative;
  margin-bottom: 40px;
  background-color: inherit;
  height: 100%;
  &::before {
    content: '';
    position: absolute;
    width: 280px;
    height: 2px;
    background-color: rgba(255, 255, 255, 0.4);
    left: -10px;
    bottom: -8px;
  }
`;

export const StyledButtonLog = styled.button`
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.coloredBtn};
  box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);
  width: 280px;
  height: 50px;
  margin-top: 40px;
  padding: 13px 0;
  color: ${({ theme }) => theme.colors.colorText};
  text-align: center;
  font-family: Poppins;
  font-size: 18px;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  border: none;
`;

export const StyledButtonReg = styled.button`
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.whiteBtn};
  box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);
  width: 280px;
  height: 50px;
  margin-top: 20px;
  padding: 13px 0;
  color: #623f8b;
  text-align: center;
  font-family: Poppins;
  font-size: 18px;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  border: none;
`;

export const StyledLabels = styled.label`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const StyledInput = styled.input`
  border: none;
  background-color: inherit;
  color: ${({ theme }) => theme.colors.navLink};
  font-family: Poppins;
  font-size: 18px;
  font-weight: 400;
`;
