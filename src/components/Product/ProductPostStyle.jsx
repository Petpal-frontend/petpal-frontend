import styled from 'styled-components';
import prevImg from '../../assets/image/prev.svg';

export const StyledLayout = styled.div`
  min-height: 100vh;
  position: relative;
`;

export const HeaderWrap = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

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
    background-image: url(${prevImg});
    background-repeat: no-repeat;
    background-position: center center;
  }
`;
export const HeaderContent = styled.h2`
  font-size: 18px;
  font-weight: 700;
  // font-family: Pretendard;
`;
export const UploadBtn = styled.button`
  width: 89px;
  height: 34px;
  margin-right: 15px;
  border: none;
  border-radius: 10px;
  background-color: #27489d;
  color: #fff;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:disabled {
    background-color: #b3bedc;
  }
`;

export const MainWrap = styled.div`
  //   padding-top: 10px;
  padding: 10px 34px 0;
`;

export const ImgArea = styled.div`
  aspect-ratio: 322/204;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  margin: 0 auto 48px;
  background-color: #f2f2f2;
  overflow: hidden;
  position: relative;

  .productImg {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .uploadBtnImg {
    position: absolute;
    top: 98px;
    left: 98px;
  }

  p {
    position: absolute;
    right: 12px;
    bottom: 12px;
  }

  label {
    width: 36px;
    height: 36px;
    border: none;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.01);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

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

export const FormArea = styled.div`
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

  p {
    margin-bottom: 17px;
  }

  label {
    display: block;
    margin-bottom: 10px;
    color: #767676;
    font-size: 12px;
    font-weight: 500;
  }

  input {
    width: 100%;
    padding-bottom: 8px;
    border: none;
    border-bottom: 1px solid #dbdbdb;
    color: #232323;
    font-size: 14px;
  }

  input::placeholder {
    color: #dbdbdb;
    font-size: 14px;
  }

  textarea {
    width: 100%;
    padding: 17px 13px;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    color: #232323;
    box-sizing: border-box;
    resize: none;
  }

  textarea::placeholder {
    color: #dbdbdb;
    font-size: 14px;
  }
`;
