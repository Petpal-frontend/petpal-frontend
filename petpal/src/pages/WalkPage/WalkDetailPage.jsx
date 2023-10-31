import React, { useEffect, useState } from 'react';
import Header from '../../components/Common/Header/Header';
import WalkDetailItem from '../../components/Walk/WalkDetailItem';
import BottomInput from '../../components/Common/Input/BottomInput/BottomInput';
import { useParams } from 'react-router-dom';
import { getWalkDetail } from '../../api/walk';

// export default function WalkDetailPage({ location }) {
export default function WalkDetailPage() {
  const params = useParams();
  console.log('!!!!id', params.id);

  const [walkDetailItem, setWalkDetailItem] = useState();

  useEffect(() => {
    getWalkDetail(params.id).then(res => {
      setWalkDetailItem(res.data.post);
    });
  }, []);

  return (
    <>
      <Header type="post" title="" />
      {walkDetailItem && <WalkDetailItem walkDetailItem={walkDetailItem} />}
      <BottomInput id="comment" placeholder="댓글을 남겨보세요" />
    </>
  );
}
