import React, { useRef, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Common/Header/Header';
import BottomInput from '../../components/Common/Input/BottomInput/BottomInput';
import ChatRoom from '../../components/Chat/ChatRoom';
import { dummyMessages } from '../../mock/dummyChat';

export default function ChatRoomPage() {
  const inputFileRef = useRef(null);
  const [currentChatId, setCurrentChatId] = useState();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [image, setImage] = useState(null);
  const { chatId } = useParams();

  useEffect(() => {
    const chatData = dummyMessages.find(
      chat => chat.chatId === parseInt(chatId),
    );
    if (chatData) {
      setMessages(chatData.message);
    }
  }, [chatId]);

  const handleTextChange = event => {
    setNewMessage(event.target.value);
  };

  useEffect(() => {
    // 현재 선택된 채팅방의 메시지를 설정합니다.
    const chatData = dummyMessages.find(chat => chat.chatId === currentChatId);
    if (chatData) {
      setMessages(chatData.message);
    }
  }, [currentChatId]);

  // 이미지 업로드
  const handleImageChange = event => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newImageMessage = {
          id: messages.length + 1,
          text: [],
          image: reader.result,
          time: new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
          }),
          sender: 'me',
        };
        setMessages([...messages, newImageMessage]);
      };
      reader.readAsDataURL(file);
    }
    if (inputFileRef.current) {
      inputFileRef.current.value = '';
    }
  };

  // 채팅 입력
  const handleSubmit = event => {
    event.preventDefault();
    if (!newMessage.trim() && !image) {
      alert('메시지를 입력하거나 이미지를 선택해주세요.');
      return;
    }

    if (newMessage.trim() !== '') {
      const newTextMessage = {
        id: messages.length + 1,
        text: [newMessage],
        time: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }),
        sender: 'me',
      };
      setMessages([...messages, newTextMessage]);
      setNewMessage('');
    }
  };

  const handleEnterPress = event => {
    if (event.key === 'Enter' && !event.shiftKey) {
      handleSubmit(event);
    }
  };

  const handleImageUploadClick = () => {
    inputFileRef.current.click();
  };

  return (
    <div>
      {/* <Header type="chatRoom" title="식빵맘" /> */}
      <ChatRoom messages={messages} />
      <BottomInput
        id="chat"
        ref={inputFileRef}
        value={newMessage}
        placeholder="채팅을 보내보세요"
        isChat={true}
        onImageClick={handleImageUploadClick}
        onSubmit={handleSubmit}
        onImageChange={handleImageChange}
        onTextChange={handleTextChange}
        onEnterPress={handleEnterPress}
      />
    </div>
  );
}
