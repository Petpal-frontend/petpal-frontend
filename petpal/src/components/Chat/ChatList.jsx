import React from 'react';
import { Link } from 'react-router-dom';
import { dummyMessages } from '../../mock/dummyChat';
import {
  StyledLayout,
  HeaderWrap,
  PrevBtn,
  MoreBtn,
  MainWrap,
  ChatLi,
} from './ChatListStyle';
import NavBar from '../Common/NavBar/NavBar';

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
            {dummyMessages.map(item => {
              const lastText = item.text[item.text.length - 1]; // 마지막 메시지
              return (
                <ChatLi key={item.id}>
                  <Link to={`/chatRoom/${encodeURIComponent(item.username)}`}>
                    {/* 채팅 온 상대방 프로필 이미지 */}
                    {item.profileImg && (
                      <span className="profileImg">
                        <img src={item.profileImg} alt="프로필 이미지" />
                      </span>
                    )}
                    {/* 상대방 닉네임, 메세지 내용, 시간 */}
                    <span className="text">
                      <strong>{item.username}</strong>
                      <span className="chat">{lastText}</span>
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

// export default function ChatList() {
//   return (
//     <>
//       <StyledLayout>
//         <HeaderWrap>
//           <h1 className="a11y-hidden">채팅 목록</h1>
//           <PrevBtn>
//             <Link to="/"></Link>
//           </PrevBtn>
//           <MoreBtn />
//         </HeaderWrap>

//         <MainWrap>
//           <ul>
//             <ProductLi>
//               <Link to={`/chatRoom`}>
//                 <span className="profileImg">
//                   <img src="profile-img.svg" alt="프로필 이미지" />
//                 </span>
//                 <span className="text">
//                   <strong>식빵맘</strong>
//                   <span className="chat">
//                     옷을 인생을 그러므로 없으면 것은 이상은 것은 옷을 인생을
//                     그러므로 없으면 것은 이상은 것은
//                   </span>
//                 </span>
//                 <span className="date">2023. 10. 15</span>
//               </Link>
//             </ProductLi>
//             <ProductLi className="newMessage">
//               <Link to={`/chatRoom`}>
//                 <span className="profileImg">
//                   <img src="profile-img2.svg" alt="프로필 이미지" />
//                 </span>
//                 <span className="text">
//                   <strong>삼둥이맘</strong>
//                   <span className="chat">오늘 산책 같이 하실래요?</span>
//                 </span>
//                 <span className="date">2023. 10. 15</span>
//               </Link>
//             </ProductLi>
//             <ProductLi>
//               <Link to={`/chatRoom`}>
//                 <span className="profileImg">
//                   <img src="profile-img3.svg" alt="프로필 이미지" />
//                 </span>
//                 <span className="text">
//                   <strong>애쉬삼촌</strong>
//                   <span className="chat">
//                     옷을 인생을 그러므로 없으면 것은 이상은 것은 옷을 인생을
//                     그러므로 없으면 것은 이상은 것은
//                   </span>
//                 </span>
//                 <span className="date">2023. 10. 15</span>
//               </Link>
//             </ProductLi>
//             <ProductLi>
//               <Link to={`/chatRoom`}>
//                 <span className="profileImg">
//                   <img src="profile-img4.svg" alt="프로필 이미지" />
//                 </span>
//                 <span className="text">
//                   <strong>초코맘</strong>
//                   <span className="chat">
//                     옷을 인생을 그러므로 없으면 것은 이상은 것은 옷을 인생을
//                     그러므로 없으면 것은 이상은 것은
//                   </span>
//                 </span>
//                 <span className="date">2023. 10. 15</span>
//               </Link>
//             </ProductLi>
//           </ul>
//         </MainWrap>

//         <NavBar />
//       </StyledLayout>
//     </>
//   );
// }
