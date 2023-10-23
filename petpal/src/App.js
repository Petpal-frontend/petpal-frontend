import * as React from 'react';
import Router from './pages/Router';
import GlobalStyle from './styles/GlobalStyle';
import SplashPage from './pages/SplashPage/SplashPage';
function App() {
  return (
    <>
      <GlobalStyle />
      <SplashPage />
      <Router />
    </>
  );
}
export default App;
