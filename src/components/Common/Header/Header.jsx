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
      type === 'careDetail' ||
      type === 'myCareDetail' ||
      type === 'posting' ||
      type === 'chatRoom' ||
      type === 'follow'
    ) {
      navigate(-1);
    }
  };

  return (
    <ImageButton src={backBtn} alt="back button" onClick={handleButtonClick} />
  );
}

function HeaderTitle({ type, title }) {
  const userState = useRecoilValue(userInfoAtom);

  return type === 'post' || type === 'posting' || type === 'follow' ? (
    <HeaderTitleSpan>{title}</HeaderTitleSpan>
  ) : type === 'list' ? (
    <HeaderTitleSpan>
      {title}
      <HeaderTitleInnerSpan>📍{userState.intro}</HeaderTitleInnerSpan>
    </HeaderTitleSpan>
  ) : null;
}

function HeaderSub({ title }) {
  return <HeaderTitleSpan>{title}</HeaderTitleSpan>;
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
