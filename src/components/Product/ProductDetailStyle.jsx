import styled from 'styled-components';
import prevImg from '../../assets/image/prev.svg';
import moreImg from '../../assets/image/icon-more-vertical.svg';

export const StyledLayout = styled.div`
  //   height: 100vh;
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
export const MoreBtn = styled.button`
  padding: 30px;
  border: none;
  background-color: transparent;
  background-image: url(${moreImg});
  background-repeat: no-repeat;
  background-position: center center;
  cursor: pointer;
`;

export const MainWrap = styled.div`
  padding: 10px 0 114px;
`;
export const ImgArea = styled.p`
  aspect-ratio: 390/312;
  margin-bottom: 22px;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

export const DescArea = styled.div`
  padding: 0 15px;
`;

export const ProfileArea = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;

  .profileInfo {
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 10px;
    color: inherit;
    text-decoration: none;
  }

  .profileImg {
    display: block;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    overflow: hidden;
  }

  .profileImg img {
    // width: 100%;
    width: 44px;
    height: 44px;
    border-radius: 50%;
  }

  .userInfo {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .userInfo strong {
    color: #1e1e1e;
    font-size: 14px;
    font-weight: 600;
  }

  .userInfo span {
    color: #767676;
    font-size: 12px;
    font-weight: 500;
  }
`;

export const TextArea = styled.div`
  color: #242424;
  font-size: 22px;

  .productTitle,
  .productPrice,
  .productDesc {
    display: block;
  }

  .productTitle {
    margin-bottom: 14px;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .productPrice {
    margin-bottom: 32px;
  }
  .productPrice span {
    font-weight: 700;
  }

  .productDesc {
    line-height: 1.5em;
    color: #292929;
    font-size: 15px;
  }
`;

export const ChatBtnArea = styled.p`
  width: clamp(320px, 100%, 520px);
  // height: 114px;
  background-color: #fff;
  position: fixed;
  bottom: 0;

  .chatBtn {
    width: clamp(320px, 100% - 30px, 520px);
    max-width: calc(767px - 30px);
    height: 60px;
    line-height: 60px;
    border-radius: 10px;
    background-color: #27489d;
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    text-decoration: none;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    position: fixed;
    left: 50%;
    bottom: 42px;
    transform: translateX(-50%);
  }
`;
