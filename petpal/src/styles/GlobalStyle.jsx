import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import './font.css';

const GlobalStyle = createGlobalStyle`
  ${reset};

  :root {
    /* Signature Color */
    --color-button_enabled: #27489D; 
    --color-primary: #27489D;
    /* Border & Background Color */
    --color-button-bg: #27489D;
    /* Black & White */
    --color-black: #000;
    --color-white: #fff;
    
    /* Font Size */
    --font-size-xs: 10px;
    --font-size-s: 12px;
    --font-size-sm: 14px;
    --font-size-m: 16px;
    --font-size-l: 18px;
    --font-size-md: 16px;
    --font-size-lg: 18px;
    --font-size-xlg: 24px;
    
    /* Text Color */
    --color-error: #EB5757
    --color-gray-2: #222;
    --color-gray-46: #464646;
    --color-gray-76: #767676;
    --color-gray-dark: #222;
    --color-gray-med: #464646;
    --color-gray-light: #767676;
  }
  * {
    box-sizing: border-box;
  }

  body {
		display: flex;
		justify-content: center;
    background-color: #F2F2F2;
    font-family: 'Pretendard', sans-serif;
  }
  
  #root {
  width: clamp(320px, 100%, 520px);
  background-color: #fff;
  }
  
  input::placeholder {
    color: #DBDBDB;
    font-size: 16px;
    }
    
  a {
    text-decoration: none;
    color: inherit;
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
