import React from 'react';
import { Link } from 'react-router-dom';

import {
  StyledLayout,
  HeaderWrap,
  PrevBtn,
  HeaderContent,
  MoreBtn,
  MainWrap,
  ChatBox,
} from './ChatRoomStyle';

export default function ChatRoom({ messages }) {
  return (
    <StyledLayout>
      <HeaderWrap>
        <h1 className="a11y-hidden">채팅창</h1>
        <div>
          <PrevBtn>
            <Link to="/chatList"></Link>
          </PrevBtn>
          <HeaderContent>식빵맘</HeaderContent>
        </div>
        <MoreBtn />
      </HeaderWrap>
      <MainWrap>
        {messages.map(message => (
          <ChatBox
            key={message.id}
            className={message.sender === 'me' ? 'me' : ''}
          >
            {/* 채팅 프로필 이미지 */}
            {message.sender !== 'me' && (
              <div className="profileImg">
                <img src={message.profileImg} alt="프로필 이미지" />
              </div>
            )}
            {/* 메시지 텍스트 */}
            {message.text.map((text, index) => (
              <div key={index} className="text">
                {text}
              </div>
            ))}
            {/* 메세지 이미지 */}
            {message.image && (
              <div className="image">
                <img src={message.image} alt="업로드 이미지" />
              </div>
            )}
            {/* 메세지 시간 */}
            <div className="time">{message.time}</div>
          </ChatBox>
        ))}
      </MainWrap>
    </StyledLayout>
  );
}

// export default function ChatRoom() {
//   return (
//     <>
//       <StyledLayout>
//         <HeaderWrap>
//           <h1 className="a11y-hidden">채팅창</h1>
//           <div>
//             <PrevBtn>
//               <Link to="/productList"></Link>
//             </PrevBtn>
//             <HeaderContent>식빵맘</HeaderContent>
//           </div>
//           <MoreBtn />
//         </HeaderWrap>

//         <MainWrap>
//           <ChatBox>
//             <p className="profileImg">
//               <Link to={`/profile`}>
//                 <img src="profile-img.svg" alt="프로필 이미지" />
//               </Link>
//             </p>
//             <p className="text">
//               옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여,
//               뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할
//               넣는 풍부하게 뛰노는 인생의 힘있다.
//             </p>
//             <p className="time">오전 9:39</p>
//           </ChatBox>
//           <ChatBox>
//             <p className="profileImg">
//               <Link to={`/profile`}>
//                 <img src="profile-img.svg" alt="프로필 이미지" />
//               </Link>
//             </p>
//             <p className="text">초코랑 친구하고 싶어요</p>
//             <p className="time">오전 9:39</p>
//           </ChatBox>
//           <ChatBox>
//             <p className="profileImg">
//               <Link to={`/profile`}>
//                 <img src="profile-img.svg" alt="프로필 이미지" />
//               </Link>
//             </p>
//             <p className="image">
//               <img src="pet-img2.svg" alt="유저 업로드 이미지" />
//             </p>
//             <p className="time">오전 9:39</p>
//           </ChatBox>
//           <ChatBox className="me">
//             <p className="text">안녕하세요.</p>
//             <p className="time">오전 9:39</p>
//           </ChatBox>
//           <ChatBox className="me">
//             <p className="text">초코 보여드릴까요?</p>
//             <p className="time">오전 9:39</p>
//           </ChatBox>
//           <ChatBox className="me">
//             <p className="image">
//               <img src="pet-img.svg" alt="유저 업로드 이미지" />
//             </p>
//             <p className="time">오전 9:39</p>
//           </ChatBox>
//         </MainWrap>

//         <MessageWrap>
//           <UploadImgBtn>
//             <label htmlFor="uploadImgBtn">
//               <img
//                 src="icon-upload-img-white.svg"
//                 alt="이미지 업로드 버튼"
//               />
//             </label>
//             <input type="file" id="uploadImgBtn" className="a11y-hidden" />
//           </UploadImgBtn>
//           <MessageForm>
//             <form>
//               <label htmlFor="message" className="a11y-hidden">
//                 메시지 작성하기
//               </label>
//               <input
//                 type="text"
//                 id="message"
//                 placeholder="메시지를 보내세요."
//               />
//               <button type="submit">
//                 <img src="icon-arrow-up.svg" alt="메시지 보내기" />
//               </button>
//             </form>
//           </MessageForm>
//         </MessageWrap>
//       </StyledLayout>
//     </>
//   );
// }
