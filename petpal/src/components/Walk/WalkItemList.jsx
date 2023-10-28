import React from 'react';
import { ItemListContainer } from './WalkItemListStyle';
import WalkItem from './WalkItem';

export default function WalkItemList({ walkItemList }) {
  return (
    <ItemListContainer>
      {walkItemList.map((item, index) => (
        <WalkItem
          key={index}
          index={index}
          imgSrc={item.imgSrc}
          content={item.content}
          user={item.user}
          like={item.like}
          likeNum={item.likeNum}
          chatNum={item.chatNum}
        />
      ))}
    </ItemListContainer>
  );
}
