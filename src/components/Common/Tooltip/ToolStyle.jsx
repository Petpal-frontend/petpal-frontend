import styled from 'styled-components';

export const TooltipStyle = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;

  .tooltiptext {
    visibility: hidden;
    width: 136px;
    padding: 10px;
    border-radius: 6px;
    background-color: #ffe76980;
    color: black;
    text-align: center;
    font-size: 12px;
    font-weight: 500;
    position: absolute;
    left: 70px;
    top: -15px;
    z-index: 999;

    &:after {
      content: '';
      position: absolute;
      left: -7px;
      top: 28px;
      border: 7px solid transparent;
      border-right-color: #ffe76980;
      border-left: 0;
      border-top: 0;
      transform: rotate(-3deg);
    }

    @media all and (min-width: 360px) and (max-width: 439px) {
      width: 90px;
    }
    @media all and (min-width: 320px) and (max-width: 359px) {
      width: 76px;
      word-break: keep-all;
    }
  }

  &:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
    animation: fadeout 0.5s;
  }

  @keyframes fadeout {
    // fade-out시 opacity를 흐릿하다가 선명하게 만들자
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;
