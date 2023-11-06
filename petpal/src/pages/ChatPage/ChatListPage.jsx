import React from 'react';
import ChatList from '../../components/Chat/ChatList';
import Header from '../../components/Common/Header/Header';

export default function ChatListPage() {
  return (
    <>
      <Header type="chatRoom" />
      <ChatList />
    </>
  );
}
