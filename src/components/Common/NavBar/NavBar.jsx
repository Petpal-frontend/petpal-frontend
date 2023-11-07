import { React, useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavBarWrap, NavBarUl, IconImg, IconInfo } from './NavBarStyle';
import useModalControl from '../Modal/useModalControl';
import { Modal } from '../Modal/Modal';
import { useNavigate } from 'react-router-dom';
//아이콘
import home from '../../../assets/image/icon-home.svg';
import feed from '../../../assets/image/icon-feed.svg';
import post from '../../../assets/image/icon-edit.svg';
import chat from '../../../assets/image/icon-chat.svg';
import user from '../../../assets/image/icon-user.svg';
//클릭시 아이콘
import homefill from '../../../assets/image/icon-home-fill.svg';
import feedfill from '../../../assets/image/icon-feed-fill.svg';
import postfill from '../../../assets/image/icon-edit-fill.svg';
import chatfill from '../../../assets/image/icon-chat-fill.svg';
import userfill from '../../../assets/image/icon-user-fill.svg';

export default function NavBar({ onClick }) {
  const navigate = useNavigate();
  const { openModal, ModalComponent } = useModalControl();

  const { pathname } = useLocation();

  const icons = [
    {
      name: '홈',
      image: home,
      fillImage: homefill,
      path: '/',
    },
    {
      name: '피드',
      image: feed,
      fillImage: feedfill,
      path: '/feed',
    },
    {
      name: '게시물 작성',
      image: post,
      fillImage: postfill,
      path: '',
    },
    {
      name: '채팅',
      image: chat,
      fillImage: chatfill,
      path: '/chatList',
    },
    {
      name: '프로필',
      image: user,
      fillImage: userfill,
      path: '/profile',
    },
  ];

  const handleCreate = event => {
    if (event.target.textContent === '상품 등록') {
      navigate('/productPost');
    } else if (event.target.textContent === '산책 메이트 구하기') {
      navigate('/walkPost');
    } else if (event.target.textContent === '돌보미 구하기') {
      navigate('/carePost');
    }
  };
  return (
    <>
      <NavBarWrap>
        <NavBarUl>
          {icons.map((el, i) => {
            return (
              <li key={i}>
                <Link
                  to={el.path}
                  onClick={e =>
                    e.target.parentElement.innerText === '게시물 작성'
                      ? openModal()
                      : null
                  }
                >
                  <IconImg
                    src={pathname === el.path ? el.fillImage : el.image}
                  />
                  <IconInfo>{el.name}</IconInfo>
                </Link>
              </li>
            );
          })}
        </NavBarUl>
      </NavBarWrap>
      <ModalComponent>
        <Modal
          contents={['상품 등록', '산책 메이트 구하기', '돌보미 구하기']}
          handleFunc={handleCreate}
        />
      </ModalComponent>
    </>
  );
}
