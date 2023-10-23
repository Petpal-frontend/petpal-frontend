import React, { Component } from 'react';
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

export default class SimpleSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0, // 현재 슬라이드의 인덱스를 저장할 상태 변수
    };
  }

  handleAfterChange = index => {
    this.setState({ currentSlide: index });
  };
  render() {
    const settings = {
      dots: true, // 캐러셀이미지가 몇번째인지 알려주는 점을 보여줄지 정한다.
      infinite: true, // loop를 만들지(마지막 이미지-처음 이미지-중간 이미지들-마지막 이미지)
      speed: 500, // 애미메이션의 속도, 단위는 milliseconds
      slidesToShow: 1, // 한번에 몇개의 슬라이드를 보여줄 지
      slidesToScroll: 1, // 한번 스크롤시 몇장의 슬라이드를 넘길지
      arrows: false,
      centerMode: true,
      autoplay: true, // 자동으로 슬라이드 넘어가기 설정
      autoplaySpeed: 2000, // 각 슬라이드마다 보여지는 시간 (2초)
      afterChange: this.handleAfterChange,
    };
    return (
      <Container>
        <StyledSlider {...settings}>
          {items.map((item, index) => {
            return (
              <div key={item.id}>
                <ImageContainer>
                  <Image src={item.image} />
                  <SlideNumber>
                    {index + 1} / {items.length}
                  </SlideNumber>
                </ImageContainer>
              </div>
            );
          })}
        </StyledSlider>
      </Container>
    );
  }
}
