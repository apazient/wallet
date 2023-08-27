import Balance from 'components/Balance/Balance';
import Header from 'components/Header/Header';
import Navigation from 'components/Navigation/Navigation';
import DashboardPage from 'pages/DashboardPage/DashboardPage';
import React from 'react';
import { Outlet } from 'react-router';
import { Container } from 'styles/GlobalStyle';
import { useMediaQuery } from 'react-responsive';

const Layout = () => {
  return (
    <>
      <Header />
      <Navigation />
      <DashboardPage />
      <Outlet />
    </>
  );
};

// const Layout = () => {
//   return (
//     <>
//       <Header />
//       {isTablet && (
//         <Container>
//           <Navigation />
//           <Balance />
//         </Container>
//       )}
//       <DashboardPage />
//       <Outlet />
//     </>
//   );
// };

// {
//   isTablet && (
//     <Container>
//       {' '}
//       тут display-flex
//       <NavWithBalanceContainer>
//         <Navigation />
//         <Balance />
//       </NavWithBalanceContainer>
//       <Currency />
//     </Container>
//   );
// }
// {
//   isDesktop && (
//     <Container>
//       <Navigation />
//       <Balance />
//       <Currency />
//     </Container>
//   );
// }

export default Layout;
