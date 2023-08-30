import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

body{
  margin: 0; 
  // height: 100%;  
  overflow:hidden;
  color: ${({ theme }) => theme.colors.colorText}; 
  background-color: #101010;
  font-family: Poppins-Regular, sans-serif;
  font-size: 14px;
  font-style: normal;
  line-height: 1.5;  
   @media screen and (min-width: 768px) {
    overflow: hidden;
  }
  
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
