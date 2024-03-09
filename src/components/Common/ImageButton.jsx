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
      <LeftImageButton
        to={buttons[0].to}
        backgroundimage={buttons[0].image}
        aria-label={buttons[0].text}
      />
      <RightContainer>
        {buttons.slice(1).map((button, index) => (
          <ImageButton
            key={index}
            to={button.to}
            backgroundimage={button.image}
            aria-label={button.text}
          />
        ))}
      </RightContainer>
    </Container>
  );
};
