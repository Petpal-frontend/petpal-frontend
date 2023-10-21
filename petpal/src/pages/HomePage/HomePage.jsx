import React from 'react';
import SlideComponent from '../../components/Slider/Slider';
import HomeHeaderLogo from '../../components/HomeHeader/HomeHeaderLogo';
import SearchBar from '../../components/SearchBar/SearchBar';
import { HomeHeaderStyle } from '../../components/HomeHeader/HomeHeaderStyle';
export default function HomePage() {
  return (
    <>
      <HomeHeaderStyle>
        <HomeHeaderLogo />
        <SearchBar placeholder="상품, 게시물 검색" onChange={''} />
      </HomeHeaderStyle>
      <SlideComponent />
    </>
  );
}
