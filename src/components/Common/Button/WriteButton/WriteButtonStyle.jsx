import styled from 'styled-components';
import plusIcon from '../../../../assets/image/icon-plus.svg';

export const WriteBtn = styled.p`
  width: 92px;
  height: 43px;
  border-radius: 30px;
  background-color: #ffe769;
  font-size: 14px;
  font-weight: 600;
  box-shadow: 2px 2px 20px 0px rgba(0, 0, 0, 0.1);
  position: fixed;
  right: 20px;
  bottom: 106px;
  overflow: hidden;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: inherit;
    text-decoration: none;
  }

  a::before {
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-right: 10px;
    background-image: url(${plusIcon});
    background-repeat: no-repeat;
    background-size: 10px 10px;
  }

  @media all and (min-width: 520px) {
    right: calc(50% - 240px);
  }
`;
