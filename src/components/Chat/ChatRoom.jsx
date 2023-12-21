import React, { useEffect, useRef } from 'react';

import { StyledLayout, MainWrap, ChatBox } from './ChatRoomStyle';

export default function ChatRoom({ messages }) {
  // 채팅 입력 시 자동으로 scroll 맨 밑으로 이동
  const scrollRef = useRef(null);

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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
        {/* 채팅 입력 될 때마다 맨 밑으로 스크롤 */}
        <div ref={scrollRef} />
      </MainWrap>
    </StyledLayout>
  );
}
