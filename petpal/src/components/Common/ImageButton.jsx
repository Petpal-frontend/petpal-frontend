import React from 'react';
import {
  Container,
  RightContainer,
  LeftImageButton,
  ImageButton,
} from './ImageButtonStyle';

export const ImageButtons = ({ buttons }) => {
  return (
    <Container>
      <LeftImageButton to={buttons[0].to} backgroundImage={buttons[0].image} />
      <RightContainer>
        {buttons.slice(1).map((button, index) => (
          <ImageButton
            key={index}
            to={button.to}
            size={button.size}
            backgroundImage={button.image}
          />
        ))}
      </RightContainer>
    </Container>
  );
};
