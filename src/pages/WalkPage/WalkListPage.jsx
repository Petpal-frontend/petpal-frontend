import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Common/Header/Header';
import PostList from '../../components/WalkAndCare/PostList';
import { getPostList } from '../../api/post';
import { useRecoilValue } from 'recoil';
import { userInfoAtom } from '../../atoms/AtomUserState';
import Loading from '../../components/Common/Loading/Loading';
import {
  PostBlankWrapper,
  PostBlankTextBox,
  PostBlankH1,
  PostBlankP,
  ToWriteButton,
} from '../../components/WalkAndCare/PostListItemStyle';

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
      {walkList.length > 0 ? (
        walkList && <PostList postList={walkList} postType="walk" />
      ) : (
        <PostBlankWrapper>
          <PostBlankTextBox postBoxStyle={true}>
            <PostBlankH1>우리 동네에 등록된 게시물이 없습니다.</PostBlankH1>
            <PostBlankP>먼저 작성해보는건 어때요?</PostBlankP>
            <ToWriteButton>
              <Link to={`/walkPost`}>게시물 등록하러가기</Link>
            </ToWriteButton>
          </PostBlankTextBox>
        </PostBlankWrapper>
      )}
    </>
  );
}
