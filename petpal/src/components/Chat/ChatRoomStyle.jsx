import styled from 'styled-components';

export const StyledLayout = styled.div`
  padding-top: 100px 0;
  min-height: 100vh;
  position: relative;

  .a11y-hidden {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
  }
`;

export const HeaderWrap = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #dbdbdb;

  div {
    display: flex;
    align-items: center;
  }
`;

export const PrevBtn = styled.p`
  a {
    display: block;
    padding: 30px;
    border: none;
    background-color: transparent;
    background-image: url('./images/prev.svg');
    background-repeat: no-repeat;
    background-position: center center;
  }
`;
export const HeaderContent = styled.h2`
  font-size: 18px;
  font-weight: 700;
  font-family: Pretendard;
`;
export const MoreBtn = styled.button`
  padding: 30px;
  border: none;
  background-color: transparent;
  background-image: url('./images/icon-more-vertical2.svg');
  background-repeat: no-repeat;
  background-position: center center;
  cursor: pointer;
`;

export const MainWrap = styled.div`
  min-height: calc(100vh - 136px);
  padding: 14px 22px 60px;
  background-color: #f2f2f2;
`;

export const ChatBox = styled.div`
  display: flex;
  margin-bottom: 15px;

  .profileImg {
    width: 42px;
    height: 42px;
    flex-shrink: 0;
  }

  .profileImg a {
    display: block;
  }

  .profileImg img {
    border-radius: 25px;
    width: 100%;
  }

  .text {
    max-width: 50%;
    padding: 14px;
    margin-left: 10px;
    line-height: 1.2em;
    border-radius: 0 20px 20px;
    background-color: #fff;
    font-size: 14px;
  }

  .image {
    width: 185px;
    height: 185px;
    margin-left: 10px;
    border-radius: 10px;
    overflow: hidden;
  }
  .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .time {
    align-self: flex-end;
    margin-left: 6px;
    color: #767676;
    font-size: 10px;
    font-weight: 500;
  }

  &.me {
    justify-content: flex-end;
  }
  &.me .text {
    border-radius: 20px 0 20px 20px;
    background-color: #27489d;
    color: #fff;
  }

  &.me .text,
  &.me .image {
    order: 1;
  }
  &.me .time {
    order: 0;
  }
`;

export const MessageWrap = styled.div`
  width: clamp(320px, 100%, 520px);
  height: 60px;
  padding: 12px 15px;
  background-color: #fff;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  gap: 15px;
  box-sizing: border-box;
`;

export const UploadImgBtn = styled.p`
  label {
    width: 36px;
    height: 36px;
    border: none;
    border-radius: 50%;
    background-color: #d6d6d6;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.01);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const MessageForm = styled.p`
  width: 100%;
  position: relative;

  input {
    width: 100%;
    padding: 12px 46px 12px 22px;
    border: none;
    border-radius: 20px;
    background-color: #f2f2f2;
    font-size: 13px;
    font-weight: 500;
    box-sizing: border-box;
  }

  input::placeholder {
    color: var(--color-gray-med);
    font-size: 13px;
    font-weight: 500;
  }

  button {
    width: 22px;
    height: 22px;
    padding: 0;
    border: none;
    background-color: transparent;
    cursor: pointer;
    position: absolute;
    right: 14px;
    top: 50%;
    transform: translateY(-50%);
  }
`;
