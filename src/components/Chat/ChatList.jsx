import React from 'react';
import { Link } from 'react-router-dom';
import { dummyMessages } from '../../mock/dummyChat';
import { StyledLayout, MainWrap, ChatLi, UnreadDot } from './ChatListStyle';
import NavBar from '../Common/NavBar/NavBar';

export default function ChatList() {
  return (
    <>
      <StyledLayout>
        <MainWrap>
          <ul>
            {dummyMessages.map((item, index) => {
              const firstText = item.text[0];
              return (
                <ChatLi key={item.id}>
                  <Link to={`/chatRoom/${encodeURIComponent(item.username)}`}>
                    {index === 1 && <UnreadDot />}
                    {/* 채팅 상대방 프로필 이미지 */}
                    {item.profileImg && (
                      <span className="profileImg">
                        <img src={item.profileImg} alt="프로필 이미지" />
                      </span>
                    )}
                    {/* 상대방 닉네임, 메세지 내용, 시간 */}
                    <span className="text">
                      <strong>{item.username}</strong>
                      <span className="chat">{firstText}</span>
                    </span>
                    <span className="date">{item.time}</span>
                  </Link>
                </ChatLi>
              );
            })}
          </ul>
        </MainWrap>
        <NavBar />
      </StyledLayout>
    </>
  );
}
