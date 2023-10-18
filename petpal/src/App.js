import * as React from 'react';
import Router from './pages/Router';
import GlobalStyle from './styles/GlobalStyle';
import SplashPage from './pages/SplashPage';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="screenLayout">
        <SplashPage />
        <Router />
      </div>
    </>
  );
}
export default App;
