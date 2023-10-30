import React, { useState, useEffect } from 'react';
import { ScrollContainer, ScrollImageButton } from './scrollStyle';

const InfiniteScroll = ({ imageData, className }) => {
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);
  const imgUrl = 'https://api.mandarin.weniv.co.kr/';

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
          className={className}
        >
          <img src={imageUrl} alt={`프로필 ${index + 1}`} />
        </ScrollImageButton>
      ))}
    </ScrollContainer>
  );
};

export default InfiniteScroll;
