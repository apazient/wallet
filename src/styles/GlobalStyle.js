import { StyledHeader } from 'components/Header/Header.styled';
import { NavWrapperStyled } from 'components/Navigation/Navigation.styled';
import { DashboardContainerStyled } from 'pages/DashboardPage/DashboardPage.styled';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
export const GlobalStyles = createGlobalStyle`

body{
    height: 100vh;
   
    background: radial-gradient(220deg, #6D54EB 3.47%, #652392 90.06%);

    
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

 /* @media screen and (min-width: 768px) {
  body {
   display: grid;
    grid-template-areas:
      'StyledHeader StyledHeader'
      'NavWrapperStyled DashboardContainerStyled'
      'cont-section  cont-section'
      'tui-pagination tui-pagination';
    justify-content: center;
  }

  ${StyledHeader} {
    grid-area: StyledHeader;
  }
  ${NavWrapperStyled} {
    grid-area: NavWrapperStyled;
    width: 50%;
  }
  ${DashboardContainerStyled} {
    grid-area: DashboardContainerStyled;
      width: 50%;
  }
  .cont-section {
    grid-area: cont-section;
  }
  .tui-pagination {
    grid-area: tui-pagination;
  }
}

@media screen and (min-width: 1280px) {
  body {
    display: grid;
    grid-template-areas:
      'header header'
      'aside-section cont-section'
      'support cont-section'
      '. cont-section'
      '. cont-section'
      'tui-pagination tui-pagination';
  }
  .header {
    grid-area: header;
  }
  .aside-section {
    grid-area: aside-section;
  }
  .support {
    grid-area: support;
  }
  .cont-section {
    grid-area: cont-section;
    min-width: 996px;
  }
  .tui-pagination {
    grid-area: tui-pagination;
  }
}  */

  /* ${DashboardContainerStyled} {
   display: flex;
   flex-direction: column;
   width:30%
  } */
  
`;

export const Container = styled.div`
  display: flex;
`;
