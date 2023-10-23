import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};

  :root {
    /* Font Size */
    --font-size-s: 10px;
    --font-size-sm: 12px;
    --font-size-m: 14px;
    --font-size-l: 18px;
  }

  * {
    box-sizing: border-box;
  }

  body {
    background-color: #F2F2F2;
  }
  #root {
    margin: 0 auto;
    width: 520px;
    padding: 0 15px;
    height: 100vh;
    background-color: #fff;
}

input::placeholder {
  color: #DBDBDB;
  font-size: 16px;
  text-indent: 16px;
}
`;

export default GlobalStyle;
