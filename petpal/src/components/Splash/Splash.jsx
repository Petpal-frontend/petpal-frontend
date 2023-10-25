import { SplashBg, SplashLogo } from './SplashStyle';

function Splash() {
  const imgLogo = 'images/logo.svg';

  return (
    <>
      <SplashBg>
        <SplashLogo src={imgLogo} alt="스플래시 로고" />
      </SplashBg>
    </>
  );
}

export default Splash;
