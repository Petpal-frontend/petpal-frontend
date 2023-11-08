import styled from 'styled-components';

export const ModalStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // width: 520px;
  // max-width: 520px;
  // width: 100%;
  left: 26px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  font-size: 17px;

  background-color: white;
  .bar {
    width: 50px;
    height: 4px;
    margin: 18px 0;
    background: #dbdbdb;
    border-radius: 5px;
  }

  ul {
    width: 100%;
  }

  button {
    border: none;
    text-align: left;
    transition: all 0.3s;
    background: white;
    cursor: pointer;
    &:hover {
      color: #1c8a00;
      background-color: #fdf5b9;
    }
  }

  .settingComponent {
    padding-left: 24px;
    line-height: 46px;
    // width: 520px;
    // max-width: 520px;
    width: 100%;

    height: 46px;
    left: 26px;
  }

  .logout {
    padding-left: 24px;
    line-height: 46px;
    width: var(--basic-width);
    height: 46px;
    left: 26px;
  }
`;
