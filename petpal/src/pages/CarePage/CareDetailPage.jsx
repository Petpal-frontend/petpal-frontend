import React, { useEffect, useState } from 'react';
import Header from '../../components/Common/Header/Header';
import WalkDetailItem from '../../components/Walk/WalkDetailItem';
import { useParams } from 'react-router-dom';
import { getCareDetail } from '../../api/care';

export default function CareDetailPage() {
  const params = useParams();
  console.log('!!!!id', params.id);

  const [careDetailItem, setCareDetailItem] = useState();

  useEffect(() => {
    getCareDetail(params.id).then(res => {
      setCareDetailItem(res.data.post);
    });
  }, []);

  return (
    <>
      <Header type="post" title="" />
      {careDetailItem && <WalkDetailItem walkDetailItem={careDetailItem} />}
    </>
  );
}
