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
  return (
    <>
      {loading ? <Loading /> : null}
      <Header type="feed" />
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
