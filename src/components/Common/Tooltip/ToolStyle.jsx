import styled from 'styled-components';

export const TooltipStyle = styled.div`
  position: relative;
  display: inline-block;
  transition: top 0.5s ease-in;
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
    background-color: #ffe76980; /* 배경 색상을 여기에 추가하세요 */
    padding: 10px;
    font-size: 14px;
    font-weight: 500;
    color: black; /* 툴팁 텍스트 색상을 여기에 추가하세요 */

    &:after {
      content: '';
      position: absolute;
      left: 0;
      top: 90%;
      width: 0;
      height: 0;
      border: 10px solid transparent;
      border-right-color: #ffe76980;
      border-left: 0;
      border-top: 0;
      margin-top: -5px;
      margin-left: -10px;
    }
  }

  &:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
    left: 70px;
    animation-duration: 0.5s;
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
