import React from 'react';
import SpanImg from '../Common/SpanImg/SpanImg';

export default function WalkDetailItem({ walkDetailItem }) {
  const user = walkDetailItem.post[0].author;

  console.log(user);
  return (
    <>
      <SpanImg type="user" user={user._id} /> {user.username}
    </>
  );
}
