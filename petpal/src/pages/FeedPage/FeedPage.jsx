import React from 'react';
import InfiniteScroll from '../../components/Common/InfinityScroll/scroll';
import Header from '../../components/Common/Header/Header';

export default function FeedPage() {
  const imageData = [
    '1698572201904.jpeg',
    '1698572010820.jpeg',
    '1698571922466.jpeg',
    '1698571938881.jpeg',
    '1698571951485.jpeg',
    '1698571964117.jpeg',
    '1698571982647.jpeg',
    '1698571998553.jpeg',
    '1698571896561.jpeg',
    '1698572022537.jpeg',
    '1698572034168.jpeg',
    '1698572046653.jpeg',
    '1698572063667.jpeg',
    '1698572148559.jpeg',
  ];
  return (
    <>
      <Header type="feed" />
      <div style={{ paddingTop: '65px' }}>
        <InfiniteScroll imageData={imageData} className="feedImageStyle" />
      </div>
    </>
  );
}
