import { useNavigate } from 'react-router-dom';
import {
  HeaderTitleSpan,
  HeaderContainer,
  PostStyle,
  HeaderTitleInnerSpan,
} from './HeaderStyle';
import ImageButton from '../Button/ImageButton/ImageButton';
import Button from '../Button/SubmitButton/Button';
import SearchBar from '../../SearchBar/SearchBar';
import useModalControl from '../Modal/useModalControl';
import backBtn from '../../../assets/image/backBtn.svg';
import { Modal } from '../Modal/Modal';
import { useRecoilValue } from 'recoil';
import { userInfoAtom } from '../../../atoms/AtomUserState';
import { TooltipStyle } from '../Tooltip/ToolStyle';
import iBtn from '../../../assets/image/info.png';
import { useEffect, useRef, useState } from 'react';
function BackButton({ type, post }) {
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
      type === 'careDetail' ||
      type === 'myCareDetail' ||
      type === 'chatRoom' ||
      type === 'search' ||
      type === 'follow' ||
      type === 'edit'
    ) {
      navigate(-1);
    } else if (type === 'posting') {
      if (post === 'walk') {
        navigate('/walkList');
      }
      if (post === 'care') {
        navigate('/careList');
      }
    }
  };

  return (
    <ImageButton src={backBtn} alt="back button" onClick={handleButtonClick} />
  );
}

function HeaderTitle({ type, title }) {
  const userState = useRecoilValue(userInfoAtom);
  
  const [titleWidth, setTitleWidth] = useState('');
  const titleSpan = useRef([]);
  useEffect(() => {
    setTitleWidth(titleSpan.current.offsetWidth);
  }, [titleWidth]);

  return type === 'post' || type === 'posting' || type === 'follow' || type === 'edit' ? (
    <HeaderTitleSpan>{title}</HeaderTitleSpan>
  ) : type === 'list' ? (
    <HeaderTitleSpan ref={titleSpan}>
      {title}
      <TooltipStyle titleWidth={titleWidth}>
        <span className="tooltiptext">
          지역은 프로필 수정에서 변경 가능합니다.
        </span>
        {/* <HeaderTitleInnerSpan>📍{userState.intro}</HeaderTitleInnerSpan> */}
        <HeaderTitleInnerSpan>
          {userState.intro}
          <img
            src={iBtn}
            alt="i icon"
            style={{ marginLeft: '3px', width: '15px', height: '15px' }}
          />
        </HeaderTitleInnerSpan>
      </TooltipStyle>
    </HeaderTitleSpan>
  ) : null;
}

function HeaderSub({ title }) {
  return <HeaderTitleSpan>{title}</HeaderTitleSpan>;
}

export default function Header({
  type,
  title,
  onClick,
  onChange,
  handleFunc,
  post,
}) {
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
    case 'follow':
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
          <BackButton type={type} post={post} />
          <HeaderTitle type={type} title={title} />
          <Button
            type="submit"
            size="xs"
            variant="primary"
            children="업로드"
            onClick={onClick}
          />
        </HeaderContainer>
      );
    case 'edit':
      return (
        <HeaderContainer type={type}>
          <BackButton type={type} post={post} />
          <HeaderTitle type={type} title={title} />
          <Button
            type="submit"
            size="xs"
            variant="primary"
            children="수정하기"
            onClick={onClick}
          />
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
    case 'careDetail':
      return (
        <HeaderContainer type={type}>
          <HeaderTitle type={type} title={title} />
          <BackButton type={type} />
        </HeaderContainer>
      );
    case 'myCareDetail':
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
    case 'chatRoom':
      return (
        <HeaderContainer type={type}>
          <BackButton type={type} />
          <HeaderSub title={title} />
        </HeaderContainer>
      );
    default:
      return null;
  }
}
