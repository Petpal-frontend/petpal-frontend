import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};

  body {
    display: flex;
    justify-content: center;
    background-color: #F2F2F2;
    font-family: 'Pretendard', sans-serif;
  }

  #root {
    // width: 520px;
    // min-height: 100vh;
    width: clamp(320px, 100%, 767px);
    background-color: #fff;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input::placeholder {
    color: #DBDBDB;
    font-size: 16px;
  }
`;

export default GlobalStyle;
