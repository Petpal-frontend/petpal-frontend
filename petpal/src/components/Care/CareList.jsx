import React from 'react';
import { ItemListContainer } from '../Common/Layout/LayoutStyle';
import CareItem from './CareItem';
import { ComponentLayout } from '../Common/Layout/LayoutStyle';

export default function CareList({ careItemList }) {
  return (
    <ComponentLayout>
      <ItemListContainer>
        {careItemList.map((item, index) => (
          <CareItem
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
