import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
	// ${reset};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #fffad0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 60%;

`;

export default GlobalStyle;
