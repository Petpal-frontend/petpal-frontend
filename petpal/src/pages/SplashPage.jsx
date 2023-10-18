import React, { useEffect, useState } from 'react';
import { SplashScreen, HiddenSplashScreen } from '../styles/SplashScreen.style';

function SplashPage() {
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
    <div className="splash-container">
      <SplashScreen isVisible={isVisible}>
        <img src="images/splash/splashImage.svg" alt="Splash Screen" />
      </SplashScreen>
      <HiddenSplashScreen />
    </div>
  );
}

export default SplashPage;
