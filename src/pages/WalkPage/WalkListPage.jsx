import React, { useEffect, useState } from 'react';
import Header from '../../components/Common/Header/Header';
import PostList from '../../components/WalkAndCare/PostList';
import { getPostList } from '../../api/post';
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
      const data = await getPostList();
      setPostList(data.data.posts);
      setLoading(false);
    };
    fetchData();
  }, []);
  const walkList = postList.filter(
    post =>
      post.author.accountname.includes('petpal_') &&
      post.content.includes('petpal_walk') &&
      post.author.intro === userInfo.intro &&
      // 주어진 api목록에 이메일 찾기,삭제가 없어 아래와같이 불가피하게 보여지는 content 필터
      post.content !== 'petpal_walk_됐나요?' &&
      post.content !== 'petpal_walk_zzzz',
  );

  return (
    <>
      {loading ? <Loading /> : null}
      <Header type="list" title="산책메이트" />
      {walkList && <PostList postList={walkList} postType="walk" />}
    </>
  );
}
