import React from 'react';
import { Background, LoadingText } from './LoadingStyle';
import loadingImage from '../../../assets/image/loading.gif';

export default function Loading() {
  return (
    <Background>
      <LoadingText>잠시만 기다려 주세요</LoadingText>
      <img src={loadingImage} alt="로딩중" width="5%" />
    </Background>
  );
}
