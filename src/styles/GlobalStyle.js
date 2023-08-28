import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
export const GlobalStyles = createGlobalStyle`

body{
  height: 100vh;
  color: ${({ theme }) => theme.colors.colorText};
  background: radialGradient(220deg, #6D54EB 3.47%, #652392 90.06%);
  background-color: #101010;
  font-family: Poppins-Regular, sans-serif;
  font-size: 14px;
  font-style: normal;
  line-height: 1.5;  
}

p,
h1,
h2,
h3,
h4,input {
  padding: 0;
  margin: 0;
}

img {
  display: block;
  max-width: 100%;
   width:100%;
  height: auto;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
a {
  text-decoration: none;
}
`;

export const GlobalStyledContainer = styled.div`
  width: 100%;
  min-width: 320px;
  margin: 0px auto;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    min-width: 768px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1280px) {
    min-width: 1280px;
    padding: 0 16px;
  }
`;
