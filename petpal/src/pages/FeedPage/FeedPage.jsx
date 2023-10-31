import React from 'react';
import InfiniteScroll from '../../components/Common/InfinityScroll/scroll';
import Header from '../../components/Common/Header/Header';
import useModalControl from '../../components/Common/Modal/useModalControl';
import { Modal } from '../../components/Common/Modal/Modal';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import hamburgerBtn from '../../assets/image/hamburger.svg';

export default function FeedPage() {
  const navigate = useNavigate();
  const { openModal, ModalComponent } = useModalControl();
  const handleModal = event => {
    if (event.target.textContent === '삭제') {
      navigate('/feed');
    } else if (event.target.textContent === '수정') {
      navigate('/feed');
    } else if (event.target.textContent === '확인') {
      navigate('/feed');
    }
  };
  const imageData = [
    '1698572201904.jpeg',
    '1698572010820.jpeg',
    '1698571922466.jpeg',
    '1698571938881.jpeg',
    '1698571951485.jpeg',
    '1698571964117.jpeg',
    '1698571982647.jpeg',
    '1698571998553.jpeg',
    '1698571896561.jpeg',
    '1698572022537.jpeg',
    '1698572034168.jpeg',
    '1698572046653.jpeg',
    '1698572063667.jpeg',
    '1698572148559.jpeg',
  ];
  return (
    <>
      <PostStyle>
        <button
          className="postMoreButton"
          aria-label="PostMoreBtn"
          onClick={() => {
            openModal();
          }}
        />
      </PostStyle>
      {/* <Header type="feed" /> */}
      <ModalComponent>
        <Modal contents={['삭제', '수정']} handleFunc={handleModal} />
      </ModalComponent>
      <div style={{ paddingTop: '65px' }}>
        <InfiniteScroll imageData={imageData} className="feedImageStyle" />
      </div>
    </>
  );
}

const PostStyle = styled.article`
  position: relative;

  .postMoreButton {
    position: absolute;
    top: 30px;
    right: 50px;
    width: 18px;
    height: 18px;
    background: url(${hamburgerBtn}) no-repeat center / auto 100%;
    cursor: pointer;
    border: none;
  }
`;
