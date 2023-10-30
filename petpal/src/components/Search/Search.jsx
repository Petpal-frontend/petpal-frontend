import React from 'react';
import { Link } from 'react-router-dom';
import { MainWrap, ProductLi } from './SearchStyle';

export default function Search() {
  return (
    <MainWrap>
      <ul>
        <ProductLi>
          <Link to={`/chatRoom`}>
            <span className="profileImg">
              <img src="./images/profile-img.svg" alt="프로필 이미지" />
            </span>
            <span className="text">
              <strong>식빵맘</strong>
            </span>
          </Link>
        </ProductLi>
        <ProductLi>
          <Link to={`/chatRoom`}>
            <span className="profileImg">
              <img src="./images/profile-img2.svg" alt="프로필 이미지" />
            </span>
            <span className="text">
              <strong>나는 식빵맨</strong>
            </span>
          </Link>
        </ProductLi>
        <ProductLi>
          <Link to={`/chatRoom`}>
            <span className="profileImg">
              <img src="./images/profile-img4.svg" alt="프로필 이미지" />
            </span>
            <span className="text">
              <strong>식빵파더</strong>
            </span>
          </Link>
        </ProductLi>
      </ul>
    </MainWrap>
  );
}
