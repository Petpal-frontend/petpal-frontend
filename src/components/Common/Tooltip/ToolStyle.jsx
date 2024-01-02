import styled from 'styled-components';

export const TooltipStyle = styled.div`
  position: relative;
  display: inline-block;
  transition: top 0.5s ease-in;
  cursor: pointer;

  .tooltiptext {
    visibility: hidden;
    width: 136px;
    text-align: center;
    border-radius: 6px;
    position: absolute;
    z-index: 999;
    bottom: -80%;
    opacity: 0;
    transition: opacity 0.3s;
    background-color: #ffe76980; /* 배경 색상을 여기에 추가하세요 */
    padding: 10px;
    font-size: 12px;
    font-weight: 500;
    color: black; /* 툴팁 텍스트 색상을 여기에 추가하세요 */

    &:after {
      content: '';
      position: absolute;
      left: 3px;
      top: 76%;
      width: 0;
      height: 0;
      border: 7px solid transparent;
      border-right-color: #ffe76980;
      border-left: 0;
      border-top: 0;
      margin-top: -5px;
      margin-left: -10px;
      transform: rotate(-3deg);
    }

    @media all and (min-width: 360px) and (max-width: 439px) {
      width: 90px;
      bottom: -156%;

      &:after {
        top: 59%;
      }
    }
    @media all and (min-width: 320px) and (max-width: 359px) {
      width: 76px;
      bottom: -306%;
      word-break: keep-all;

      &:after {
        top: 41%;
      }
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
