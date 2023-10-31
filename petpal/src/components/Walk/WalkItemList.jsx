import React from 'react';
import { ItemListContainer } from '../Common/Layout/LayoutStyle';
import WalkItem from './WalkItem';
import { ComponentLayout } from '../Common/Layout/LayoutStyle';

export default function WalkItemList({ walkList }) {
  return (
    <ComponentLayout>
      <ItemListContainer>
        {console.log(walkList)}
        {walkList.map((item, index) => (
          <WalkItem
            key={index}
            id={item._id}
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
