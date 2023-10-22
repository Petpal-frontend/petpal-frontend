import React, { useEffect, useState, useRef } from 'react';

const ImageUploader = () => {
  const [totalData, setTotalData] = useState([]); // 렌더링되는 전체 데이터
  const [isLoading, setIsLoading] = useState(false); // 새로운 데이터를 추가로 불러올 때 로딩처리를 위해
  const [nextInfo, setNextInfo] = useState({
    hasNext: true,
    nextPage: 2,
  }); // 다음 데이터 존재 여부

  // 로컬 이미지 URL 배열
  const localImages = [
    'https://via.placeholder.com/200',
    'https://via.placeholder.com/201',
    'https://via.placeholder.com/202',
    'https://via.placeholder.com/203',
    'https://via.placeholder.com/204',
    'https://via.placeholder.com/205',
    'https://via.placeholder.com/206',
    'https://via.placeholder.com/207',
    'https://via.placeholder.com/208',
    'https://via.placeholder.com/209',
    'https://via.placeholder.com/210',
    'https://via.placeholder.com/211',
    'https://via.placeholder.com/212',
    'https://via.placeholder.com/213',
    'https://via.placeholder.com/214',
    'https://via.placeholder.com/215',
    'https://via.placeholder.com/216',
    'https://via.placeholder.com/217',
    'https://via.placeholder.com/218',
    'https://via.placeholder.com/219',
    'https://via.placeholder.com/220',
    'https://via.placeholder.com/221',
    'https://via.placeholder.com/222',
    // ... 더 많은 로컬 이미지 URL을 추가할 수 있습니다.
  ];

  const observerRef = useRef(null);

  const observer = node => {
    if (isLoading) return;

    observerRef.current && observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver(async ([entry]) => {
      if (entry.isIntersecting && nextInfo.hasNext) {
        await callData(nextInfo.nextPage);
      }
    });

    node && observerRef.current.observe(node);
  };

  const callData = pageNum => {
    setIsLoading(true); //로딩 true

    // 로컬 이미지 데이터를 불러와서 사용
    const selectData = {
      data: localImages.slice((pageNum - 1) * 2, pageNum * 2), // 페이지 번호에 따라 이미지를 나눠 가져옴
      hasNext: nextInfo.nextPage * 2 < localImages.length, // 더 많은 이미지가 남아있는지 확인
      page: nextInfo.nextPage,
    };

    setTotalData(prev => [...prev, ...selectData.data]);
    setNextInfo(prev => ({
      ...prev,
      hasNext: selectData.hasNext,
      nextPage: selectData.page + 1,
    }));

    setIsLoading(false); //로딩 false
  };

  return (
    <div
      style={{
        position: 'absolute',
        width: '50%',
        height: '500px',
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      {totalData.map((dr, idx) => {
        return (
          <div
            key={idx}
            style={{
              width: '230px',
              height: '209px',
              marginLeft: '20px',
              marginTop: '20px',
              borderRadius: '30px',
            }}
          >
            <img
              src={dr}
              alt=""
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        );
      })}

      {nextInfo.hasNext && <div ref={observer} />}

      {isLoading && <div> Loading </div>}
    </div>
  );
};
export default ImageUploader;
