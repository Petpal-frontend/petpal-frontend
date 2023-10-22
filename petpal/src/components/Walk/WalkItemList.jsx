import React from 'react';
import { WalkItemListContainer } from './WalkItemListStyle';
import WalkItem from './WalkItem';

export default function WalkItemList({ walkItemList }) {
  return (
    <WalkItemListContainer>
      {walkItemList.map((item, index) => (
        <WalkItem
          key={index}
          imgSrc={item.imgSrc}
          content={item.content}
          user={item.user}
          like={item.like}
          likeNum={item.likeNum}
          chatNum={item.chatNum}
        />
      ))}
    </WalkItemListContainer>
  );
}
