import React from 'react';
import { Link } from 'react-router-dom';
import { StyledLayout } from './ChatListStyle';
import { HeaderWrap } from './ChatListStyle';
import { PrevBtn, MoreBtn } from './ChatListStyle';
import { MainWrap } from './ChatListStyle';
import { ProductLi } from './ChatListStyle';
import { NavBarWrap } from './ChatListStyle';
import { NavBarUl, IconImg, IconInfo } from './ChatListStyle';

export default function ChatList() {
  return (
    <>
      <StyledLayout>
        <HeaderWrap>
          <h1 className="a11y-hidden">채팅 목록</h1>
          <PrevBtn>
            <Link to="/"></Link>
          </PrevBtn>
          <MoreBtn />
        </HeaderWrap>

        <MainWrap>
          <ul>
            <ProductLi>
              <Link to={`/chatRoom`}>
                <span className="profileImg">
                  <img src="./images/profile-img.svg" alt="프로필 이미지" />
                </span>
                <span className="text">
                  <strong>식빵맘</strong>
                  <span className="chat">
                    옷을 인생을 그러므로 없으면 것은 이상은 것은 옷을 인생을
                    그러므로 없으면 것은 이상은 것은
                  </span>
                </span>
                <span className="date">2023. 10. 15</span>
              </Link>
            </ProductLi>
            <ProductLi className="newMessage">
              <Link to={`/chatRoom`}>
                <span className="profileImg">
                  <img src="./images/profile-img2.svg" alt="프로필 이미지" />
                </span>
                <span className="text">
                  <strong>삼둥이맘</strong>
                  <span className="chat">오늘 산책 같이 하실래요?</span>
                </span>
                <span className="date">2023. 10. 15</span>
              </Link>
            </ProductLi>
            <ProductLi>
              <Link to={`/chatRoom`}>
                <span className="profileImg">
                  <img src="./images/profile-img3.svg" alt="프로필 이미지" />
                </span>
                <span className="text">
                  <strong>애쉬삼촌</strong>
                  <span className="chat">
                    옷을 인생을 그러므로 없으면 것은 이상은 것은 옷을 인생을
                    그러므로 없으면 것은 이상은 것은
                  </span>
                </span>
                <span className="date">2023. 10. 15</span>
              </Link>
            </ProductLi>
            <ProductLi>
              <Link to={`/chatRoom`}>
                <span className="profileImg">
                  <img src="./images/profile-img4.svg" alt="프로필 이미지" />
                </span>
                <span className="text">
                  <strong>초코맘</strong>
                  <span className="chat">
                    옷을 인생을 그러므로 없으면 것은 이상은 것은 옷을 인생을
                    그러므로 없으면 것은 이상은 것은
                  </span>
                </span>
                <span className="date">2023. 10. 15</span>
              </Link>
            </ProductLi>
          </ul>
        </MainWrap>

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
      </StyledLayout>
    </>
  );
}
