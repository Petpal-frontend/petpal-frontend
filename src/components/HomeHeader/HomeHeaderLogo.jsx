import React from 'react';
import { HomeHeaderLogoStyle } from './HomeHeaderLogoStyle';
import { Link } from 'react-router-dom';
import homeLogo from '../../assets/image/homeLogo.svg';

const HomeHeaderLogo = () => {
  return (
    <HomeHeaderLogoStyle>
      <Link to="/">
        <img src={homeLogo} alt="petpal 로고" />
      </Link>
    </HomeHeaderLogoStyle>
  );
};

export default HomeHeaderLogo;
