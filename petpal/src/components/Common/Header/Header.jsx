import { useNavigate } from 'react-router-dom';
import { HeaderTitleSpan, HeaderContainer } from './HeaderStyle';
import ImageButton from '../Button/ImageButton/ImageButton';
import Button from '../Button/SubmitButton/Button';
import SearchBar from '../../SearchBar/SearchBar';
import { useState } from 'react';

import backBtn from '../../../assets/image/backBtn.svg';
import hamburgerBtn from '../../../assets/image/hamburger.svg';

function BackButton({ type }) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (
      type === 'list' ||
      type === 'post' ||
      type === 'feed' ||
      type === 'posting'
    ) {
      navigate(-1);
    }
  };

  return (
    <ImageButton src={backBtn} alt="back button" onClick={handleButtonClick} />
  );
}

function HamburgerButton({ onMenuButtonClick }) {
  return (
    <ImageButton
      src={hamburgerBtn}
      alt="menu button"
      onClick={onMenuButtonClick}
    />
  );
}

function TempModal({ isOpen, closeModal }) {
  if (!isOpen) {
    return null;
  }

  const handleModalClose = () => {
    closeModal();
  };

  return (
    <div
      style={{
        width: '500px',
        height: '500px',
        backgroundColor: 'red',
        color: 'white',
      }}
    >
      TempModal 입니다
      <button onClick={handleModalClose}>닫기</button>
    </div>
  );
}

function HeaderTitle({ type, title }) {
  return type === 'list' || type === 'post' || type === 'posting' ? (
    <HeaderTitleSpan>{title}</HeaderTitleSpan>
  ) : null;
}

export default function Header({ type, title, onClick, onChange }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMenuButtonClick = () => {
    console.log('open hamburger');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  switch (type) {
    case 'list':
      return (
        <HeaderContainer type={type}>
          <BackButton type={type} />
          <HeaderTitle type={type} title={title} />
          {/* 하단 모달 열기 버튼 */}
          <HamburgerButton onMenuButtonClick={handleMenuButtonClick} />
          <TempModal isOpen={isModalOpen} onClose={closeModal} />
        </HeaderContainer>
      );
    case 'post':
      return (
        <HeaderContainer type={type}>
          <BackButton type={type} />
          <HeaderTitle type={type} title={title} />
          <HamburgerButton onMenuButtonClick={handleMenuButtonClick} />
          <TempModal isOpen={isModalOpen} onClose={closeModal} />
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
    default:
      return null;
  }
}
