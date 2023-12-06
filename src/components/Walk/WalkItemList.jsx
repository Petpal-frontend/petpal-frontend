import React from 'react';
import { ItemListContainer } from '../Common/Layout/LayoutStyle';
import WalkItem from './WalkItem';
import { ComponentLayout } from '../Common/Layout/LayoutStyle';
import WriteButton from '../Common/Button/WriteButton/WriteButton';

export default function WalkItemList({ walkList }) {
  return (
    <ComponentLayout>
      <ItemListContainer>
        {walkList.map((item, index) => (
          <WalkItem
            key={index}
            id={item._id}
            author={item.author}
            comments={item.comments}
            content={item.content}
            heartCount={item.heartCount}
            image={item.image}
          />
        ))}
      </ItemListContainer>
      <WriteButton />
    </ComponentLayout>
  );
}
