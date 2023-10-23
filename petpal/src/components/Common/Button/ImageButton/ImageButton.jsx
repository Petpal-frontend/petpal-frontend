import React from 'react';
import { ImageButtonWrapper } from './ImageButtonStyle';

export default function ImageButton({ src, alt, onClick }) {
  return (
    <ImageButtonWrapper onClick={onClick}>
      <img src={src} alt={alt} />
    </ImageButtonWrapper>
  );
}





