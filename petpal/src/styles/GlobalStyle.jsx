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
  // width: 520px;
  // max-width: 767px;
  // height: 100vh;
  width: clamp(320px, 100%, 767px);
  background-color: #fff;
}

input::placeholder {
  color: #DBDBDB;
  font-size: 16px;
  text-indent: 16px;
}
`;

export default GlobalStyle;
