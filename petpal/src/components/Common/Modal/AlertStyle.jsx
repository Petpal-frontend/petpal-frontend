import styled from 'styled-components';

export const ButtonStyle = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
`;

export const AlertStyle = styled.div`
  position: relative;
  width: 252px;
  height: 110px;
  border-radius: 10px;
  background-color: white;
  overflow: hidden;

  p {
    text-align: center;
    padding-top: 27px;
  }

  button {
    transition: all 0.3s;
    border: none;
    background: white;
    cursor: pointer;
    &:hover {
      background-color: #fdf5b9;
    }
  }

  .cancle {
    flex-grow: 1;
    flex-basis: 0;
    display: inline-block;
    height: 46px;
    &:hover {
      color: #1c8a00;
    }
  }

  .delete {
    /* bottom: 0; */
    width: 126px;
    height: 46px;
    color: #f22222;
    border-top: 1px solid var(--basic-color-6);
  }
`;
