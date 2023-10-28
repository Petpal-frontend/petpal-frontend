import React from 'react';
// <<<<<<< new/km
// import { useRef } from 'react';
// import BottomInput from '../../components/Common/Input/BottomInput/BottomInput';

// export default function ChatRoomPage() {
//   const inputFileRef = useRef(null);

//   return (
//     <div>
//       <BottomInput
//         ref={inputFileRef}
//         type="file"
//         placeholder="채팅을 보내보세요"
//         isChat={true}
//       />
//     </div>
// =======
import ChatRoom from '../../components/Chat/ChatRoom';

export default function ChatRoomPage() {
  return (
    <>
      <ChatRoom />
    </>

  );
}
