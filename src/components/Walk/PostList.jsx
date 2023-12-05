import React from 'react';
import { ItemListContainer } from '../Common/Layout/LayoutStyle';
import ListItem from './ListItem';
import { ComponentLayout } from '../Common/Layout/LayoutStyle';
import { AddBtn } from '../Product/ProductListStyle';
import { Link } from 'react-router-dom';

export default function PostList({ postList, postType }) {
  return (
    <ComponentLayout>
      <ItemListContainer>
        {postList.map((item, index) => (
          <ListItem
            postType={postType}
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
      <Link to={postType === 'walk' ? '/walkPost' : '/carePost'}>
        <AddBtn>글쓰기</AddBtn>
      </Link>
    </ComponentLayout>
  );
}
