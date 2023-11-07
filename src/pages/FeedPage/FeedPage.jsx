import React, { useEffect, useState } from 'react';
import InfiniteScroll from '../../components/Common/InfinityScroll/scroll';
import Header from '../../components/Common/Header/Header';
import { getFeedList } from '../../api/feedApi';
import Loading from '../../components/Common/Loading/Loading';

export default function FeedPage() {
  const [feedData, setFeedData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getFeedList();
        setFeedData(data);
				
        setLoading(false);
      } catch (error) {
        console.error('데이터를 불러오는 중 오류 발생:', error);
      }
    };

    fetchData();
  }, []);

  console.log(feedData);

  // const imageData = [
  //   '1698572201904.jpeg',
  //   '1698572010820.jpeg',
  //   '1698571922466.jpeg',
  //   '1698571938881.jpeg',
  //   '1698571951485.jpeg',
  //   '1698571964117.jpeg',
  //   '1698571982647.jpeg',
  //   '1698571998553.jpeg',
  //   '1698571896561.jpeg',
  //   '1698572022537.jpeg',
  //   '1698572034168.jpeg',
  //   '1698572046653.jpeg',
  //   '1698572063667.jpeg',
  //   '1698572148559.jpeg',
  // ];

  return (
    <>
      {loading ? <Loading /> : null}
      <Header type="feed" />
      {/* <div style={{ paddingTop: '65px' }}>
          <InfiniteScroll imageData={imageData} className="feedImageStyle" />
        </div> */}
      <div style={{ padding: '65px 0' }}>
        {feedData.length !== 0 ? (
          <InfiniteScroll
            imageData={feedData.posts}
            className="feedImageStyle"
          />
        ) : null}
      </div>
    </>
  );
}
