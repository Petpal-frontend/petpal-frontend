import { useNavigate } from 'react-router-dom';
import { HeaderTitleSpan, HeaderContainer } from './HeaderStyle';
import ImageButton from '../Button/ImageButton/ImageButton';
import Button from '../Button/SubmitButton/Button';

function BackButton({ type }) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (type === 'list' || type === 'post' || type === 'feed') {
      navigate(-1);
    }
  };

  return (
    <ImageButton
      src="images/backBtn.svg"
      alt="back button"
      onClick={handleButtonClick}
    />
  );
}

function HamburgerButton() {
  const handleMenuButtonClick = () => {};
  return (
    <ImageButton
      src="images/hamburger.svg"
      alt="menu button"
      onClick={handleMenuButtonClick}
    />
  );
}

function HeaderTitle({ type, title }) {
  return type === 'list' ? <HeaderTitleSpan>{title}</HeaderTitleSpan> : null;
}

export default function Header({ type, title }) {
  switch (type) {
    case 'list':
      return (
        <HeaderContainer type={type}>
          <BackButton type={type} />
          <HeaderTitle type={type} title={title} />
          <HamburgerButton />
        </HeaderContainer>
      );
    case 'post':
      return (
        <HeaderContainer type={type}>
          <BackButton type={type} />
          <HeaderTitle type={type} title={title} />
          <HamburgerButton />
        </HeaderContainer>
      );
    case 'posting':
      return (
        <HeaderContainer type={type}>
          <BackButton type={type} />
          <HeaderTitle type={type} title={title} />
          <Button type="button" size="xs" variant="primary" children="업로드" />
        </HeaderContainer>
      );
    case 'feed':
      return (
        <HeaderContainer type={type}>
          <BackButton type={type} />
          <HeaderTitle type={type} title={title} />
        </HeaderContainer>
      );
    default:
      return null;
  }
}
