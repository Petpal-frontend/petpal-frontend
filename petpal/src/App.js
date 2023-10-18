import * as React from 'react';

import SplashPage from './pages/SplashPage';
import { createGlobalStyle } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
// const GlobalStyle = createGlobalStyle`
//    body {
//         margin: 0 auto;

// }`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div className="container">
        <SplashPage />
        ㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㅁㄴㅇㅁㄴㅇ
      </div>
    </>
  );
};
export default App;
