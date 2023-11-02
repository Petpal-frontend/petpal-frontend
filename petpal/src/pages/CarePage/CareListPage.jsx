import { useEffect, useState } from 'react';
import CareList from '../../components/Care/CareList';
import Header from '../../components/Common/Header/Header';
import { getCareList } from '../../api/care';

export default function CareListPage() {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCareList();
      setPostList(data.data.posts);
    };
    fetchData();
    console.log(postList);
  }, []);

  const careList = postList.filter(
    post =>
      post.author.accountname.includes('petpal_') &&
      post.content.includes('petpal_care_'),
  );

  return (
    <>
      <Header type="list" title="돌보미" />
      {careList && <CareList careItemList={careList} />}
    </>
  );
}
