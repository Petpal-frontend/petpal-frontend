import React from 'react';

import { StyledLayout, MainWrap, ChatBox } from './ChatRoomStyle';

export default function ChatRoom({ messages }) {
  return (
    <StyledLayout>
      <MainWrap>
        {messages.map(message => (
          <React.Fragment key={message.id}>
            {/* 텍스트 메세지가 있는 경우 렌더링 */}
            {message.text.map((text, index) => (
              <ChatBox
                key={index}
                className={message.sender === 'me' ? 'me' : ''}
              >
                {message.sender !== 'me' && (
                  <div className="profileImg">
                    <img src={message.profileImg} alt="프로필 이미지" />
                  </div>
                )}
                <div className="text">{text}</div>
                <div className="time">{message.time}</div>
              </ChatBox>
            ))}
            {/* 이미지가 있는 경우 렌더링 */}
            {message.image && (
              <ChatBox className={message.sender === 'me' ? 'me' : ''}>
                <div className="image">
                  <img src={message.image} alt="업로드 이미지" />
                </div>
                <div className="time">{message.time}</div>
              </ChatBox>
            )}
          </React.Fragment>
        ))}
      </MainWrap>
    </StyledLayout>
  );
}
