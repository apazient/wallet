import { Form } from 'formik';
import { styled } from 'styled-components';

export const FormikForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 40px;
  padding: 32px 20px;
  box-shadow: 0 0 50px 50px gray;
  background: radial-gradient(rgb(63, 46, 150), rgb(95, 71, 140));
`;

export const StyledButton = styled.button`
  width: 300px;
  height: 50px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.2) 1px 9px 15px 0px;
  color: rgb(251, 251, 251);
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  text-align: center;
  font-family: PoppinsRegular, sans-serif;
  font-size: 18px;
  font-style: normal;
  border: none;
  cursor: pointer;
  outline: none;
  background: linear-gradient(
    167deg,
    #ffc727 0%,
    #9e40ba 61.46%,
    #7000ff 90.54%
  );
`;

export const ButtonStyle = styled.button`
  width: 300px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 20px;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  background-color: rgb(255, 255, 255);
  color: rgb(98, 63, 139);
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.33;
  color: #fbfbfb;
  background-color: transparent;
  max-width: 100%;
  margin-bottom: 10px;
  width: 280px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 100%;
  align-items: center;
`;

export const StyledTransaction = styled.h2`
  display: flex;
  width: 381px;
  height: 40px;
  justify-content: center;
  flex-shrink: 0;
  color: #fbfbfb;
  text-align: center;
  font-family: Poppins;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const StyledIncomeExpences = styled.div`
  color: #ffb627;
  text-align: right;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;