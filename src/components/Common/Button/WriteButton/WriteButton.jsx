import React from 'react';
import { Link } from 'react-router-dom';
import { WriteBtn } from './WriteButtonStyle';

export default function WriteButton({ type }) {
  return (
    <WriteBtn>
      <Link
        to={
          type === 'product'
            ? '/productPost'
            : type === 'walk'
              ? '/walkPost'
              : '/carePost'
        }
        className=""
      >
        글쓰기
      </Link>
    </WriteBtn>
  );
}
