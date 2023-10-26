import React, { useState, useEffect } from 'react';

const InfiniteScroll = () => {
  const [items, setItems] = useState(
    Array.from({ length: 10 }, (_, index) => `아이템 ${index + 1}`),
  );

  const addContent = () => {
    const newItem = `추가된 아이템 ${items.length + 1}`;
    setItems([...items, newItem]);
  };

  const checkScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = window.innerHeight + window.scrollY;
    if (scrollTop >= scrollHeight - 100) {
      // 스크롤이 맨 아래로 도달했을 때 콘텐츠 추가
      addContent();
    }
  };

  useEffect(() => {
    // 스크롤 이벤트를 감지하여 checkScroll 함수 호출
    window.addEventListener('scroll', checkScroll);
    return () => {
      // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거
      window.removeEventListener('scroll', checkScroll);
    };
  }, [items]);

  return (
    <div>
      <div>{/* 여기에 콘텐츠를 표시할 수도 있습니다. */}</div>
      <div>
        {items.map((item, index) => (
          <div
            key={index}
            style={{ padding: '20px', borderBottom: '1px solid #ccc' }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScroll;
