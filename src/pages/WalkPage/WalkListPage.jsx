import React, { useEffect, useState } from 'react';
import Header from '../../components/Common/Header/Header';
import WalkItemList from '../../components/Walk/WalkItemList';
import { getWalkList } from '../../api/walk';
import { useRecoilValue } from 'recoil';
import { userInfoAtom } from '../../atoms/AtomUserState';
import Loading from '../../components/Common/Loading/Loading';
export default function WalkListPage() {
  const [loading, setLoading] = useState(true);
  const userInfo = useRecoilValue(userInfoAtom);
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await getWalkList();
      setPostList(data.data.posts);
      setLoading(false);
    };
    fetchData();
    console.log(postList);
  }, []);
  const walkList = postList.filter(
    post =>
      post.author.accountname.includes('petpal_') &&
      post.content.includes('petpal_walk') &&
      post.author.intro === userInfo.intro &&
      post.content !== 'petpal_walk_됐나요?' &&
      post.content !== 'petpal_walk_zzzz',
  );
  console.log(walkList);

  return (
    <>
      {loading ? <Loading /> : null}
      <Header type="list" title="산책메이트" />
      {walkList && <WalkItemList walkList={walkList} />}
    </>
  );
}
