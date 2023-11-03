import { useEffect, useState } from 'react';
import CareList from '../../components/Care/CareItemList';
import Header from '../../components/Common/Header/Header';
import { getCareList } from '../../api/care';
import { useRecoilValue } from 'recoil';
import { userInfoAtom } from '../../atoms/AtomUserState';
import Loading from '../../components/Common/Loading/Loading';
export default function CareListPage() {
  const [loading, setLoading] = useState(true);
  const userInfo = useRecoilValue(userInfoAtom);
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await getCareList();
      setPostList(data.data.posts);
      setLoading(false);
    };
    fetchData();
    console.log(postList);
  }, []);

  const careList = postList.filter(
    post =>
      post.author.accountname.includes('petpal_') &&
      post.content.includes('petpal_care_') &&
      post.author.intro === userInfo.intro,
  );

  return (
    <>
      {loading ? <Loading /> : null}
      <Header type="list" title="돌보미" />
      {careList && <CareList careItemList={careList} />}
    </>
  );
}
