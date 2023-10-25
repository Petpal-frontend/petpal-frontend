import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};

  :root {
    /* Signature Color */
    --color-button_enabled: #27489D; 
    
    /* Font Size */
    --font-size-xs: 10px;
    --font-size-s: 12px;
    --font-size-sm: 14px;
    --font-size-m: 16px;
    --font-size-l: 18px;
    
    /* Text Color */
    --color-error: #EB5757
    --color-gray-2: #222;
    --color-gray-46: #464646;
    --color-gray-76: #767676;
  }

  * {
    box-sizing: border-box;
  }

  body {
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
