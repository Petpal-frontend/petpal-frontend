import * as React from 'react';
import Router from './pages/Router';
import GlobalStyle from './styles/GlobalStyle';
import SplashPage from './pages/SplashPage/SplashPage';

function App() {
  return (
    <>
      {/* 매번 스플래쉬 화면이 뜨는걸 방지하기 위해 -> home화면 들어갈때마다 떠서 수정필요 */}
      <GlobalStyle />
      <Router />
    </>
  );
}
export default App;
