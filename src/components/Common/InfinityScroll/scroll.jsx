import React, { useEffect, useState } from 'react';
import { ScrollContainer, ScrollImageButton } from './scrollStyle';
import { Link, useLocation } from 'react-router-dom';

const InfiniteScroll = ({ imageData, className }) => {
  const { pathname } = useLocation();

  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  const initialImageUrls = Array.from(
    // 최대 10개 이미지 또는 이미지 수만큼
    { length: Math.min(10, imageData.length) },
    (_, index) => {
      // 이미지 있는 게시물만
      if (imageData[index]) {
        // 이미지 여러개 일 때 처리
        let imageArr = imageData[index].image.split(',');
        return {
          image: imageArr[0],
          accountname:
            pathname === '/'
              ? imageData[index].accountname
              : imageData[index].author.accountname,
          id: pathname === '/' ? imageData[index]._id : imageData[index].id,
        };
      }
      return null;
    },
  );

  const [imageUrls, setImageUrls] = useState(initialImageUrls);

  const addContent = () => {
    const imageIndex = imageUrls.length % imageData.length;
    // 이미지 있는 게시물만
    if (imageData[imageIndex]) {
      // 이미지 여러개 일 때 처리
      const newImageArr = imageData[imageIndex].image.split(',');
      const newImageUrl = {
        image: newImageArr[0],
        accountname:
          pathname === '/'
            ? `${imageData[imageIndex].accountname}`
            : `${imageData[imageIndex].author.accountname}`,
        id:
          pathname === '/'
            ? `${imageData[imageIndex]._id}`
            : `${imageData[imageIndex].id}`,
      };
      setImageUrls([...imageUrls, newImageUrl]);
    }
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
    <ScrollContainer
      style={{ paddingBottom: allImagesLoaded ? '70px' : '0' }}
      className={className}
    >
      {imageUrls.length > 0 ? (
        imageUrls.map((item, index) => (
          <ScrollImageButton key={index} className={className}>
            <Link
              to={
                pathname === '/'
                  ? `/yourProfile/${item.accountname}`
                  : `/walkDetail/${item.id}`
              }
            >
              <img
                src={item.image}
                alt={
                  pathname === '/'
                    ? `프로필 이미지 ${index}`
                    : `게시글 이미지 ${index}`
                }
              />
            </Link>
          </ScrollImageButton>
        ))
      ) : (
        <h1>팔로잉 중인 사용자의 게시물이 없습니다.</h1>
      )}
    </ScrollContainer>
  );
};

export default InfiniteScroll;
