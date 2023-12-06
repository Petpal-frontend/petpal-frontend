import React from 'react';
import { Link } from 'react-router-dom';
import { WriteBtn } from './WriteButtonStyle';

export default function WriteButton() {
  return (
    <WriteBtn>
      <Link to="/productPost" className="">
        글쓰기
      </Link>
    </WriteBtn>
  );
}
