import * as React from 'react';
import SplashPage from './pages/SplashPage';
import GlobalStyle from './styles/GlobalStyle';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div className="screenLayout">
        <SplashPage />
        바주카포 화이팅
      </div>
    </>
  );
};
export default App;
