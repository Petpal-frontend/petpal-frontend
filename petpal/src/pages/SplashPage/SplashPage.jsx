import React, { useEffect, useState } from 'react';
import {
  SplashBg,
  SplashLogo,
} from '../../components/Splash/SplashScreen.style';

function SplashPage() {
  const imgLogo = 'images/logo.svg';
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // 1.5초 후에 스플래시 화면을 숨김
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <SplashBg>
        <SplashLogo src={imgLogo} alt="스플래시 로고" />
      </SplashBg>
    </>
  );
}

export default SplashPage;
