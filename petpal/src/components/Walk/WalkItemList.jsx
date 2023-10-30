import React from 'react';
import { ItemListContainer } from '../Common/Layout/LayoutStyle';
import WalkItem from './WalkItem';
import { ComponentLayout } from '../Common/Layout/LayoutStyle';

export default function WalkItemList({ walkItemList }) {
  return (
    <ComponentLayout>
      <ItemListContainer>
        {walkItemList.map((item, index) => (
          <WalkItem
            key={index}
            index={index}
            image={item.image}
            content={item.content}
            author={item.author}
            hearted={item.hearted}
            heartedCount={item.heartedCount}
            commentCount={item.commentCount}
          />
        ))}
      </ItemListContainer>
    </ComponentLayout>
  );
}
