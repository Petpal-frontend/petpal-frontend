import React from 'react';
import SpanImg from '../Common/SpanImg/SpanImg';
import { WalkItemListContainer } from './WalkItemListStyle';

export default function WalkDetailItem({ location, walkDetailItem }) {
  const post = walkDetailItem;
  console.log(location);
  // console.log(post);
  // console.log(index);

  // console.log(post[index]);
  return (
    <>
      <WalkItemListContainer>
        <div style={{ width: '100px', height: '100px' }}>{walkDetailItem}</div>
        {/* <SpanImg type="post" post={post[index]} />  */}
      </WalkItemListContainer>
    </>
  );
}
