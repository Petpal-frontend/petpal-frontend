import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
  body {
	display: flex;
	justify-content: center;
  background-color: #F2F2F2;
}
#root {
  width: 520px;
  background-color: #fff;
  height: 1125.331px;
}

input::placeholder {
  color: #DBDBDB;
  font-size: 16px;
  text-indent: 16px;
}
`;

export default GlobalStyle;
