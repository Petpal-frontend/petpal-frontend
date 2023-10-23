import React, { useEffect, useState, useRef } from 'react';

const ImageUploader = () => {
  const [totalData, setTotalData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [nextInfo, setNextInfo] = useState({
    hasNext: true,
    nextPage: 2,
  });

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
    setIsLoading(true);

    const selectData = {
      data: localImages.slice((pageNum - 1) * 2, pageNum * 2),
      hasNext: nextInfo.nextPage * 2 < localImages.length,
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
