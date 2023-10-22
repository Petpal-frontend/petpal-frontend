import React from 'react';
import SlideComponent from '../../components/Slider/Slider';
import HomeHeaderLogo from '../../components/HomeHeader/HomeHeaderLogo';
import SearchBar from '../../components/SearchBar/SearchBar';
import { HomeHeaderStyle } from '../../components/HomeHeader/HomeHeaderStyle';
import { ImageButtons } from '../../components/Common/ImageButton';
import ImageUploader from '../../components/Common/InfinityScroll/InfinityScroll';

export default function HomePage() {
  const buttons = [
    {
      to: '/productList',
      size: 'large',
      image: '/images/homepageButton/shoppingButton.png',
    },
    { to: '/walkList', image: '/images/homepageButton/walkButton.png' },
    { to: '/careList', image: '/images/homepageButton/careButton.png' },
  ];

  return (
    <>
      <HomeHeaderStyle>
        <HomeHeaderLogo />
        <SearchBar placeholder="상품, 게시물 검색" onChange={''} />
      </HomeHeaderStyle>
      <SlideComponent />
      <ImageButtons buttons={buttons} />
      <p
        style={{
          fontSize: '21px',
          marginLeft: '20px',
          fontWeight: '700',
        }}
      >
        우리 귀여운 집사님 보고가세요!
      </p>
      <ImageUploader />
    </>
  );
}
