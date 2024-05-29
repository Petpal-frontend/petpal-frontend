import { useEffect, useState } from 'react';
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
export default function CareListPage() {
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

  const careList = postList.filter(
    post =>
      post.author.accountname.includes('petpal_') &&
      post.content.includes('petpal_care_') &&
      post.author.intro === userInfo.intro,
  );

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header type="list" title="돌보미" />
          {careList.length > 0 ? (
            <PostList postList={careList} postType="care" />
          ) : (
            <PostBlankWrapper>
              <PostBlankTextBox postBoxStyle={true}>
                <PostBlankH1>우리 동네에 등록된 게시물이 없습니다.</PostBlankH1>
                <PostBlankP>먼저 작성해보는건 어때요?</PostBlankP>
                <ToWriteButton>
                  <Link to={`/carePost`}>게시물 등록하러가기</Link>
                </ToWriteButton>
              </PostBlankTextBox>
            </PostBlankWrapper>
          )}
        </>
      )}
    </>
  );
}
