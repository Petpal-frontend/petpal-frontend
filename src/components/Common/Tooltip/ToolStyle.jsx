import styled from 'styled-components';

export const TooltipStyle = styled.div`
  position: relative;
  display: inline-block;
  transition: top 1s ease-in;
  cursor: pointer;
  //   border-bottom: 1px solid black;
  .tooltiptext {
    visibility: hidden;
    width: 150px;
    text-align: center;
    border-radius: 6px;
    position: absolute;
    z-index: 999;
    bottom: -80%;
    opacity: 0;
    transition: opacity 0.3s;
    background-color: #555; /* 배경 색상을 여기에 추가하세요 */
    padding: 10px;
    font-size: 15px;
    color: #fff; /* 툴팁 텍스트 색상을 여기에 추가하세요 */
  }

  &:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
    left: 70px;
    animation-duration: 1s;
    animation-name: fadeout;
  }

  @keyframes fadeout {
    // fade-out시 opacity를 흐릿하다가 선명하기 만들자
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;
