import { SplashBg, SplashLogo } from './SplashStyle';
import imgLogo from '../../assets/image/logo.svg';

function Splash() {

  return (
    <>
      <SplashBg>
        <SplashLogo src={imgLogo} alt="스플래시 로고" />
      </SplashBg>
    </>
  );
}

export default Splash;
