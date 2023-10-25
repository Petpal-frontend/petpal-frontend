import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import './font.css';

const GlobalStyle = createGlobalStyle`
  ${reset};

  :root {
    /* Signature Color */
    --color-primary: #27489D;

    /* Border & Background Color */
    --color-button-bg: #27489D;

    /* Black & White */
    --color-black: #000;
    --color-white: #fff;
    
    /* Font Size */
    --font-size-sm: 14px;
    --font-size-md: 16px;
    --font-size-lg: 18px;
    --font-size-xlg: 24px;
    
    /* Text Color */
    --color-error: #EB5757
    --color-gray-dark: #222;
    --color-gray-med: #464646;
    --color-gray-light: #767676;
  }

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Pretendard', sans-serif;
    background-color: #F2F2F2;
//  display: flex;
// 	justify-content: center;
//  background-color: #F2F2F2;
  }
  
  #root {
    margin: 0 auto;
    width: 520px;
    padding: 0 15px;
    height: 100vh;
    background-color: #fff;
}

.a11yHidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    clip-path: polygon(0 0, 0 0, 0 0);
  }
`;

export default GlobalStyle;
