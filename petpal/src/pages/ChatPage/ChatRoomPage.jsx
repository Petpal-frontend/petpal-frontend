import React from 'react';
import { useRef } from 'react';
import BottomInput from '../../components/Common/Input/BottomInput/BottomInput';
import ChatRoom from '../../components/Chat/ChatRoom';

export default function ChatRoomPage() {
  const inputFileRef = useRef(null);

  return (
    <div>
      <ChatRoom />
      <BottomInput
        ref={inputFileRef}
        type="file"
        placeholder="채팅을 보내보세요"
        isChat={true}
      />
    </div>
  );
}
