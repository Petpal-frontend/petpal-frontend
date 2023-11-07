import React from 'react';
import { ItemListContainer } from '../Common/Layout/LayoutStyle';
import WalkItem from './WalkItem';
import { ComponentLayout } from '../Common/Layout/LayoutStyle';
import { AddBtn } from '../Product/ProductListStyle';
import { Link } from 'react-router-dom';

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
      <AddBtn>
        <Link to="/walkPost" className="">
          글쓰기
        </Link>
      </AddBtn>
    </ComponentLayout>
  );
}
