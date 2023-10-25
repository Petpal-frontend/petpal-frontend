import React, { Component } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Container = styled.div`
  margin-bottom: 36px;
  overflow: hidden;
`;

//슬라이드 클릭시 파란선 생기는것 방지
export const StyledSlider = styled(Slider)`
  .slick-slide div {
    outline: none;
  }
`;

export const ImageContainer = styled.div`
  // margin: 0 0px;
  // width: 410px;
  width: calc(100% - 10px);
  height: 371px;
  position: relative;
`;

export const Image = styled.img`
  width: 100%; /* 이미지를 부모 요소에 꽉 차도록 표시 */
  height: 100%;
  border-radius: 5px;
  // object-fit: cover;
`;

export const SlideNumber = styled.div`
  position: absolute;
  bottom: 24px;
  right: 13px;
  width: 60px;
  height: 25.333px;
  background: rgba(27, 27, 27, 0.8);
  border-radius: 40px;
  text-align: center;
  color: #adadad;
  line-height: 27.4px;
`;
