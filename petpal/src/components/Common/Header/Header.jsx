import { useNavigate } from 'react-router-dom';
import { HeaderTitleSpan, HeaderContainer, PostStyle } from './HeaderStyle';
import ImageButton from '../Button/ImageButton/ImageButton';
import Button from '../Button/SubmitButton/Button';
import SearchBar from '../../SearchBar/SearchBar';
import { useState } from 'react';
import useModalControl from '../Modal/useModalControl';
import backBtn from '../../../assets/image/backBtn.svg';
import hamburgerBtn from '../../../assets/image/hamburger.svg';
import { Modal } from '../Modal/Modal';

function BackButton({ type }) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (
      type === 'list' ||
      type === 'post' ||
      type === 'feed' ||
      type === 'profile' ||
      type === 'productDetail' ||
      type === 'myProductDetail' ||
      type === 'walkDetail' ||
      type === 'myWalkDetail' ||
      type === 'posting'
    ) {
      navigate(-1);
    }
  };

  return (
    <ImageButton src={backBtn} alt="back button" onClick={handleButtonClick} />
  );
}

function HeaderTitle({ type, title }) {
  return type === 'list' || type === 'post' || type === 'posting' ? (
    <HeaderTitleSpan>{title}</HeaderTitleSpan>
  ) : null;
}

export default function Header({ type, title, onClick, onChange, handleFunc }) {
  const { openModal, ModalComponent } = useModalControl();
  const navigate = useNavigate();

  function ProfileModal({ onClick }) {
    return (
      <ModalComponent>
        <Modal
          contents={['설정 및 개인정보', '로그아웃']}
          handleFunc={onClick}
        />
      </ModalComponent>
    );
  }

  function DetailModal({ onClick }) {
    return (
      <ModalComponent>
        <Modal contents={['수정', '삭제']} handleFunc={onClick} />
      </ModalComponent>
    );
  }

  switch (type) {
    case 'list':
      return (
        <HeaderContainer
          type={type}
          style={{ borderBottom: '1px solid #dbdbdb' }}
        >
          <BackButton type={type} />
          <HeaderTitle type={type} title={title} />
          <div
            style={{
              width: '29px',
              height: '17.5px',
            }}
          />
        </HeaderContainer>
      );
    case 'post':
      return (
        <HeaderContainer type={type}>
          <BackButton type={type} />
          <HeaderTitle type={type} title={title} />
        </HeaderContainer>
      );
    case 'posting':
      return (
        <HeaderContainer type={type}>
          <BackButton type={type} />
          <HeaderTitle type={type} title={title} />
          <Button type="submit" size="xs" variant="primary" children="업로드" />
        </HeaderContainer>
      );
    case 'feed':
      return (
        <HeaderContainer type={type}>
          <BackButton type={type} />
          <HeaderTitle type={type} title={title} />
        </HeaderContainer>
      );
    case 'profile':
      return (
        <HeaderContainer type={type}>
          <BackButton type={type} />
          <HeaderTitle type={type} title={title} />
          <PostStyle>
            <button
              className="postMoreButton"
              aria-label="PostMoreBtn"
              onClick={() => {
                openModal();
              }}
            />
          </PostStyle>
          <ProfileModal onClick={onClick} />
        </HeaderContainer>
      );
    case 'search':
      return (
        <HeaderContainer type={type}>
          <BackButton type={type} />
          <HeaderTitle type={type} title={title} />
          <SearchBar
            placeholder="계정 검색"
            onChange={onChange}
            className="accountSearch"
          />
        </HeaderContainer>
      );
    case 'productDetail':
      return (
        <HeaderContainer type={type}>
          <HeaderTitle type={type} title={title} />
          <BackButton type={type} />
        </HeaderContainer>
      );
    case 'myProductDetail':
      return (
        <HeaderContainer type={type}>
          <BackButton type={type} />
          <HeaderTitle type={type} title={title} />
          <PostStyle>
            <button
              className="postMoreButton"
              aria-label="PostMoreBtn"
              onClick={() => {
                openModal();
              }}
            />
          </PostStyle>
          <DetailModal onClick={onClick} />
        </HeaderContainer>
      );
    case 'walkDetail':
      return (
        <HeaderContainer type={type}>
          <HeaderTitle type={type} title={title} />
          <BackButton type={type} />
        </HeaderContainer>
      );
    case 'myWalkDetail':
      return (
        <HeaderContainer type={type}>
          <BackButton type={type} />
          <HeaderTitle type={type} title={title} />
          <PostStyle>
            <button
              className="postMoreButton"
              aria-label="PostMoreBtn"
              onClick={() => {
                openModal();
              }}
            />
          </PostStyle>
          <DetailModal onClick={onClick} />
        </HeaderContainer>
      );
    default:
      return null;
  }
}
