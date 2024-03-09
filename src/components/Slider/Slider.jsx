import React, { useState } from 'react';
import Slider from 'react-slick';
import {
  Container,
  StyledSlider,
  ImageContainer,
  Image,
  SlideNumber,
} from './SliderStyle';

import slide1 from '../../assets/image/slide1.jpg';
import slide2 from '../../assets/image/slide2.jpg';
import slide3 from '../../assets/image/slide3.jpg';

const items = [
  { id: 1, image: slide1, alt: '산책 메이트 홍보 이미지' },
  { id: 2, image: slide2, alt: '쇼핑하기 홍보 이미지' },
  { id: 3, image: slide3, alt: '돌보미 홍보 이미지' },
];

const SimpleSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleAfterChange = index => {
    setCurrentSlide(index);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    afterChange: handleAfterChange,
  };

  return (
    <Container>
      <StyledSlider {...settings}>
        {items.map((item, index) => (
          <div key={item.id}>
            <ImageContainer>
              <Image src={item.image} alt={item.alt} />
              <SlideNumber>
                {index + 1} / {items.length}
              </SlideNumber>
            </ImageContainer>
          </div>
        ))}
      </StyledSlider>
    </Container>
  );
};

export default SimpleSlider;
