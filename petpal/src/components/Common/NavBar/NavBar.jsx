import { React, useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NavBarUl, NavBarWrap } from './NavBarStyle';
import { IconImg, IconInfo } from '../../Product/ProductListStyle';
import BottomModal from './BottomModal';
export default function NavBar() {
  const [isModalOpen, setModalOpen] = useState(false);

  //모달창 토글
  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <>
      <NavBarWrap>
        <NavBarUl>
          <li>
            <Link to="/">
              <IconImg src="./images/icon-home-fill.svg" />
              <IconInfo>홈</IconInfo>
            </Link>
          </li>
          <li>
            <Link to="/feed">
              <IconImg src="./images/icon-feed.svg" />
              <IconInfo>피드</IconInfo>
            </Link>
          </li>
          <li>
            <Link onClick={toggleModal}>
              <IconImg src="./images/icon-edit.svg" />
              <IconInfo>게시물 작성</IconInfo>
            </Link>
            {isModalOpen && <BottomModal onClose={toggleModal} />}
          </li>

          <li>
            <Link to="/chatList">
              <IconImg src="./images/icon-chat.svg" />
              <IconInfo>채팅</IconInfo>
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <IconImg src="./images/icon-user.svg" />
              <IconInfo>프로필</IconInfo>
            </Link>
          </li>
        </NavBarUl>
      </NavBarWrap>
    </>
  );
}
