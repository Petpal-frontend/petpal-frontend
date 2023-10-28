import React from 'react';
import { ItemListContainer } from '../Walk/WalkItemListStyle';
import CareItem from './CareItem';

export default function CareList({ careItemList }) {
  return (
    <ItemListContainer>
      {careItemList.map((item, index) => (
        <CareItem
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
