import React from 'react';
import { ItemListContainer } from '../Common/Layout/LayoutStyle';
import CareItem from './CareItem';
import { ComponentLayout } from '../Common/Layout/LayoutStyle';
import WriteButton from '../Common/Button/WriteButton/WriteButton';

export default function CareList({ careItemList }) {
  return (
    <ComponentLayout>
      <ItemListContainer>
        {careItemList.map((item, index) => (
          <CareItem
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
