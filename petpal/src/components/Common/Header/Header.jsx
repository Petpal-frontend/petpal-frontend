import { useNavigate } from 'react-router-dom';
import { HeaderTitleSpan, HeaderContainer } from './HeaderStyle';
import ImageButton from '../Button/ImageButton/ImageButton';

function BackButton({ type }) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (type === 'walk' || type === 'care') {
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

function HeaderTitle({ type, title }) {
  return type === 'walk' ? <HeaderTitleSpan>{title}</HeaderTitleSpan> : null;
}

export default function Header({ type, title }) {
  switch (type) {
    case 'walk':
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
