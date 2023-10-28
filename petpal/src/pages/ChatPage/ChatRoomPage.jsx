import React from 'react';
import { useRef } from 'react';
import BottomInput from '../../components/Common/Input/BottomInput/BottomInput';

export default function ChatRoomPage() {
  const inputFileRef = useRef(null);

  return (
    <div>
      <BottomInput
        ref={inputFileRef}
        type="file"
        placeholder="채팅을 보내보세요"
        isChat={true}
      />
    </div>
  );
}
