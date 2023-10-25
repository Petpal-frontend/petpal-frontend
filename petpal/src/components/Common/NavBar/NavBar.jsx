import React from 'react';
import { Link } from 'react-router-dom';
import { NavBarUl, NavBarWrap } from './NavBarStyle';
import { IconImg, IconInfo } from '../../Product/ProductListStyle';

export default function NavBar() {
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
            <Link to="/productPost">
              <IconImg src="./images/icon-edit.svg" />
              <IconInfo>게시물 작성</IconInfo>
            </Link>
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
