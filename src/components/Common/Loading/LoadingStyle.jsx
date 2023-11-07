import styled from 'styled-components';

export const Background = styled.div`
  position: absolute;
  width: 520px;
  height: 100vh;
  margin: 0 auto;
  background: #ffffffb7;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 100px;
    height: 100px;
  }
`;

export const LoadingText = styled.div`
  font: 1rem 'Noto Sans KR';
  text-align: center;
`;
