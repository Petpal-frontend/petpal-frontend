import React, { useState } from 'react';
import Slider from 'react-slick';
import {
  Container,
  StyledSlider,
  ImageContainer,
  Image,
  SlideNumber,
} from './SliderStyle';

const imgUrl = 'images/logo.svg';

const items = [
  { id: 1, image: 'images/slide1.jpg' },
  { id: 2, image: 'images/slide2.jpg' },
  { id: 3, image: 'images/slide3.jpg' },
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
              <Image src={item.image} />
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
