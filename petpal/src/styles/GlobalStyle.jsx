import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};
    .screenLayout{
            height: 100vh;
            margin: auto;
            width: 50%;
},
`;

export default GlobalStyle;
