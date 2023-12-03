import React, { useEffect, useState } from 'react';
import HomePage from '../HomePage/HomePage';
import Splash from '../../components/Splash/Splash';
import NavBar from '../../components/Common/NavBar/NavBar';
import LoginPage from '../LoginPage/LoginPage';
export default function SplashPage() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // 스플래시 화면을 보여주고 일정 시간 후에 홈 화면으로 전환
    setTimeout(() => {
      setShowSplash(false);
    }, 1500); // 1.5초 후 스플래시 화면을 사라지게 함
  }, []);
  return (
    <div>
      {showSplash ? (
        <Splash />
      ) : (
        <>
          <LoginPage />
        </>
      )}
    </div>
  );
}
