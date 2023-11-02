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
    --color-button-write: #FFE769;

    /* Black & White */
    --color-black: #000;
    --color-white: #fff;
    
    /* Font Size */
    --font-size-sm: 14px;
    --font-size-md: 16px;
    --font-size-lg: 18px;
    --font-size-xl: 24px;
    
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
    background-color: #F2F2F2;
    font-family: 'Pretendard', sans-serif;
  }
  
  #root {
    width: 520px;
    height: 100vh;
    margin: 0 auto;
    background-color: #fff;
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
