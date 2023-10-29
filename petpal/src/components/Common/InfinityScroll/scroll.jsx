import React, { useState, useEffect } from 'react';
import { ScrollContainer, ScrollImageButton } from './scrollStyle';

const InfiniteScroll = ({ imageData }) => {
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);
  const imgUrl = 'https://api.mandarin.weniv.co.kr/';
  // const imageData = {
  //   img: [
  //     '1698572201904.jpeg',
  //     '1698571896561.jpeg',
  //     '1698571922466.jpeg',
  //     '1698571938881.jpeg',
  //     '1698571951485.jpeg',
  //     '1698571964117.jpeg',
  //     '1698571982647.jpeg',
  //     '1698571998553.jpeg',
  //     '1698572010820.jpeg',
  //     '1698572022537.jpeg',
  //     '1698572034168.jpeg',
  //     '1698572046653.jpeg',
  //     '1698572063667.jpeg',
  //     '1698572148559.jpeg',
  //   ],
  // };

  const initialImageUrls = Array.from(
    { length: 10 },
    (_, index) => imgUrl + imageData[index],
  );
  const [imageUrls, setImageUrls] = useState(initialImageUrls);

  const addContent = () => {
    const newImageUrl = `${imgUrl}${
      imageData[imageUrls.length % imageData.length]
    }`;
    setImageUrls([...imageUrls, newImageUrl]);
  };

  const checkScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = window.innerHeight + window.scrollY;
    if (scrollTop >= scrollHeight - 100) {
      // 스크롤이 맨 아래로 도달했을 때 이미지 추가
      addContent();
    }
  };

  useEffect(() => {
    if (imageUrls.length === imageData.length) {
      // 모든 이미지가 로딩되면 스크롤 이벤트 제거
      setAllImagesLoaded(true);
    } else {
      window.addEventListener('scroll', checkScroll);
    }

    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageUrls]);
  return (
    <ScrollContainer style={{ paddingBottom: allImagesLoaded ? '70px' : '0' }}>
      {imageUrls.map((imageUrl, index) => (
        <ScrollImageButton
          key={index}
          to={imageUrl.to}
          backgroundimage={imageUrl.image}
        >
          <img src={imageUrl} alt={`프로필 ${index + 1}`} />
        </ScrollImageButton>
      ))}
    </ScrollContainer>
  );
};

export default InfiniteScroll;
