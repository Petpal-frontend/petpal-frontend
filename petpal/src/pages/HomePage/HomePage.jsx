import React from 'react';
import SlideComponent from '../../components/Slider/Slider';
import HomeHeaderLogo from '../../components/HomeHeader/HomeHeaderLogo';
import SearchBar from '../../components/SearchBar/SearchBar';
import { HomeHeaderStyle } from '../../components/HomeHeader/HomeHeaderStyle';
import { ImageButtons } from '../../components/Common/ImageButton';
import InfiniteScroll from '../../components/Common/InfinityScroll/scroll';
import { Link } from 'react-router-dom';
export default function HomePage() {
  const buttons = [
    {
      to: '/productList',
      image: '/images/homepageButton/shoppingButton.png',
    },
    { to: '/walkList', image: '/images/homepageButton/walkButton.png' },
    { to: '/careList', image: '/images/homepageButton/careButton.png' },
  ];
  const imageData = [
    '1698572022537.jpeg',
    '1698571951485.jpeg',
    '1698571922466.jpeg',
    '1698571938881.jpeg',
    '1698572063667.jpeg',
    '1698571964117.jpeg',
    '1698571982647.jpeg',
    '1698571998553.jpeg',
    '1698571896561.jpeg',
    '1698572010820.jpeg',
    '1698572201904.jpeg',
    '1698572034168.jpeg',
    '1698572046653.jpeg',
    '1698572148559.jpeg',
  ];
  return (
    <>
      <HomeHeaderStyle>
        <HomeHeaderLogo />
        {/* <Link to="/search" className="searchBar">
          계정 검색
        </Link> */}
        {/* <Link to="/search">
          <SearchBar placeholder="계정 검색" />
        </Link> */}
        <Link to="/search" className="searchBtn">
          <img src="./images/icon-search.svg" alt="계정 검색" />
        </Link>
      </HomeHeaderStyle>
      <SlideComponent />
      <ImageButtons buttons={buttons} />
      <p
        style={{
          fontSize: '21px',
          padding: '0 15px',
          marginBottom: '14px',
          fontWeight: '700',
        }}
      >
        우리 귀여운 집사님 보고가세요!
      </p>
      <InfiniteScroll imageData={imageData} className="homeImageStyle" />
    </>
  );
}
