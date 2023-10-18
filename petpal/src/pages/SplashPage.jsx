import React, { useEffect, useState } from 'react';
import '../styles/SplashScreen.style';
import { SplashScreen, Visible, Hidden } from '../styles/SplashScreen.style';

function SplashPage() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // 3초 후에 스플래시 화면을 숨김
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="splash-container">
      <SplashScreen>
        <img src="images/splash/splashImage.svg" alt="Splash Screen" />
      </SplashScreen>
    </div>
  );
}

export default SplashPage;
