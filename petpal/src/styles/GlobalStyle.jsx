import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};

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
    position: relative;
}

input::placeholder {
  color: #DBDBDB;
  font-size: 16px;
  text-indent: 16px;
}
`;

export default GlobalStyle;
