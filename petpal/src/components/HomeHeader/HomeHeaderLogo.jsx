import React from 'react';
import styled from 'styled-components';
import { HomeHeaderLogoStyle } from './HomeHeaderLogoStyle';
import { Link } from 'react-router-dom';

const HomeHeaderLogo = () => {
  return (
    <HomeHeaderLogoStyle>
      <Link to="/">
        <img src="./images/homeLogo.svg" alt="petpal" />
      </Link>
    </HomeHeaderLogoStyle>
  );
};

export default HomeHeaderLogo;
