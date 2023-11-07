import React, { useEffect, useState } from 'react';
import SlideComponent from '../../components/Slider/Slider';
import HomeHeaderLogo from '../../components/HomeHeader/HomeHeaderLogo';
import { HomeHeaderStyle } from '../../components/HomeHeader/HomeHeaderStyle';
import { ImageButtons } from '../../components/Common/ImageButton';
import InfiniteScroll from '../../components/Common/InfinityScroll/scroll';
import { Link } from 'react-router-dom';
import productImg from '../../assets/image/homepageButton/shoppingButton.png';
import walkImg from '../../assets/image/homepageButton/walkButton.png';
import careImg from '../../assets/image/homepageButton/careButton.png';
import searchBtn from '../../assets/image/icon-search.svg';
import { getAllUserList } from '../../api/searchApi';
import preUserImg from '../../assets/image/tajaCat.gif';

export default function HomePage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllUserList();
        setUsers(data);
      } catch (error) {
        console.error('데이터를 불러오는 중 오류 발생:', error);
      }
    };

    fetchData();
  }, []);

  // 주어진 기본 프로필 혹은 로컬데이터, 이상한 문자(\")가 들어간 이미지 필터링
  const filteredUsers = users.filter(
    v =>
      v.accountname.includes('petpal_') &&
      v.image !== 'https://api.mandarin.weniv.co.kr/Ellipse.png' &&
      v.image.includes('https://api.mandarin.weniv.co.kr/') &&
      !v.image.includes('"'),
  );
  const buttons = [
    {
      to: '/productList',
      image: productImg,
    },
    { to: '/walkList', image: walkImg },
    { to: '/careList', image: careImg },
  ];

  return (
    <>
      <HomeHeaderStyle>
        <HomeHeaderLogo />
        <Link to="/search" className="searchBtn">
          <img src={searchBtn} alt="계정 검색" />
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
      {filteredUsers.length !== 0 ? (
        <InfiniteScroll imageData={filteredUsers} className="homeImageStyle" />
      ) : (
        <img
          src={preUserImg}
          alt="user preview loading"
          style={{ width: '100%' }}
        />
      )}
    </>
  );
}
