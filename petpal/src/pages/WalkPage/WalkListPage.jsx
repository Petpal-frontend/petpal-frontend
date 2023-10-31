import React, { useEffect, useState } from 'react';
import Header from '../../components/Common/Header/Header';
import WalkItemList from '../../components/Walk/WalkItemList';
import { getWalkList } from '../../api/walk';

export default function WalkListPage() {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getWalkList();
      setPostList(data.data.posts);
      // setWalkList(
      //   // ...res.data.posts,
      //   data,
      // );
    };
    fetchData();
    console.log(postList);
  }, []);

  const walkList = postList.filter(post =>
    post.author.accountname.includes('petpal_'),
  );

  // .filter(post =>
  // 	post.author.username.includes('petpal_'),
  // ),

  return (
    <>
      <Header type="list" title="산책메이트" />
      {walkList.length > 0 && <WalkItemList walkList={walkList} />}
    </>
  );
}

// const walkItemList = {
//   post: [
//     {
//       content:
//         '식빵이랑 친구해요 성격이 순하고 착해요 비슷한 나이의 같은 남자 아이랑 산책하고 싶네요~ 안녕 안녕 ~~~ 식빵이랑 친구해요 성격이 순하고 착해요 비슷한 나이의 같은 남자 아이랑 산책하고 싶네요~ 안녕 안녕 ~~~',
//       image: 'images/exDogImg.jpg',
//       author: { username: '식빵맘', image: 'images/exDogImg.jpg' },
//       hearted: false,
//       heartedCount: 26,
//       commentCount: 165,
//     },
//     {
//       content:
//         'Lorem ipsum dolor sit amet conser adipiscing elit. Sed lacinia lectus id arcu fermentum, sit amet interdum turpis mollis. Integer accumsan, dui eu suscipit vestibulum, dolor turpis iaculis magna, nec dapibus mi sapien id nibh. Nullam erat enim, maximus nec orci id, eleifend venenatis ipsum. Aenean ut quam vitae felis lobortis iaculis at quis enim. Pellentesque id condimentum nunc, ut imperdiet turpis. Praesent condimentum vulputate ligula a placerat. Fusce facilisis erat ac orci scelerisque, ac efficitur ex imperdiet. Nunc ante ipsum, varius non efficitur et, congue quis mauris. Proin pulvinar ipsum lorem. Nullam sit amet mi id nunc bibendum posuere eget non tellus. Nullam eget ultrices quam.',
//       image: 'images/exDogImg.jpg',
//       author: { username: '초코맘', image: 'images/exDogImg.jpg' },
//       hearted: true,
//       heartedCount: 26,
//       commentCount: 8,
//     },
//     {
//       content:
//         'Lorem ipsum dolor sddawng elit. Sed lacinia lectus id arcu fermentum, sit amet interdum turpis mollis. Integer accumsan, dui eu suscipit vestibulum, dolor turpis iaculis magna, nec dapibus mi sapien id nibh. Nullam erat enim, maximus nec orci id, eleifend venenatis ipsum. Aenean ut quam vitae felis lobortis iaculis at quis enim. Pellentesque id condimentum nunc, ut imperdiet turpis. Praesent condimentum vulputate ligula a placerat. Fusce facilisis erat ac orci scelerisque, ac efficitur ex imperdiet. Nunc ante ipsum, varius non efficitur et, congue quis mauris. Proin pulvinar ipsum lorem. Nullam sit amet mi id nunc bibendum posuere eget non tellus. Nullam eget ultrices quam.',
//       image: 'images/exDogImg.jpg',
//       author: { username: '쿠키맘', image: 'images/exDogImg.jpg' },
//       hearted: false,
//       heartedCount: 26,
//       commentCount: 8,
//     },
//     {
//       content:
//         '식빵이랑 친구해요 성격이 순하고 착해요 비슷한 나이의 같은 남자 아이랑 산책하고 싶네요~ 안녕 안녕 ~~~ 식빵이랑 친구해요 성격이 순하고 착해요 비슷한 나이의 같은 남자 아이랑 산책하고 싶네요~ 안녕 안녕 ~~~',
//       image: 'images/exDogImg.jpg',
//       author: { username: '식빵맘', image: 'images/exDogImg.jpg' },
//       hearted: false,
//       heartedCount: 26,
//       commentCount: 165,
//     },
//     {
//       content:
//         '식빵이랑 친구해요 성격이 순하고 착해요 비슷한 나이의 같은 남자 아이랑 산책하고 싶네요~ 안녕 안녕 ~~~ 식빵이랑 친구해요 성격이 순하고 착해요 비슷한 나이의 같은 남자 아이랑 산책하고 싶네요~ 안녕 안녕 ~~~',
//       image: 'images/exDogImg.jpg',
//       author: { username: '식빵맘', image: 'images/exDogImg.jpg' },
//       hearted: false,
//       heartedCount: 26,
//       commentCount: 165,
//     },
//     {
//       content:
//         '식빵이랑 친구해요 성격이 순하고 착해요 비슷한 나이의 같은 남자 아이랑 산책하고 싶네요~ 안녕 안녕 ~~~ 식빵이랑 친구해요 성격이 순하고 착해요 비슷한 나이의 같은 남자 아이랑 산책하고 싶네요~ 안녕 안녕 ~~~',
//       image: 'images/exDogImg.jpg',
//       author: { username: '식빵맘', image: 'images/exDogImg.jpg' },
//       hearted: false,
//       heartedCount: 26,
//       commentCount: 165,
//     },
//     {
//       content:
//         '식빵이랑 친구해요 성격이 순하고 착해요 비슷한 나이의 같은 남자 아이랑 산책하고 싶네요~ 안녕 안녕 ~~~ 식빵이랑 친구해요 성격이 순하고 착해요 비슷한 나이의 같은 남자 아이랑 산책하고 싶네요~ 안녕 안녕 ~~~',
//       image: 'images/exDogImg.jpg',
//       author: { username: '식빵맘', image: 'images/exDogImg.jpg' },
//       hearted: false,
//       heartedCount: 26,
//       commentCount: 165,
//     },
//     {
//       content:
//         '식빵이랑 친구해요 성격이 순하고 착해요 비슷한 나이의 같은 남자 아이랑 산책하고 싶네요~ 안녕 안녕 ~~~ 식빵이랑 친구해요 성격이 순하고 착해요 비슷한 나이의 같은 남자 아이랑 산책하고 싶네요~ 안녕 안녕 ~~~',
//       image: 'images/exDogImg.jpg',
//       author: { username: '식빵맘', image: 'images/exDogImg.jpg' },
//       hearted: false,
//       heartedCount: 26,
//       commentCount: 165,
//     },
//     {
//       content:
//         '식빵이랑 친구해요 성격이 순하고 착해요 비슷한 나이의 같은 남자 아이랑 산책하고 싶네요~ 안녕 안녕 ~~~ 식빵이랑 친구해요 성격이 순하고 착해요 비슷한 나이의 같은 남자 아이랑 산책하고 싶네요~ 안녕 안녕 ~~~',
//       image: 'images/exDogImg.jpg',
//       author: { username: '식빵맘', image: 'images/exDogImg.jpg' },
//       hearted: false,
//       heartedCount: 26,
//       commentCount: 165,
//     },
//     {
//       content:
//         '식빵이랑 친구해요 성격이 순하고 착해요 비슷한 나이의 같은 남자 아이랑 산책하고 싶네요~ 안녕 안녕 ~~~ 식빵이랑 친구해요 성격이 순하고 착해요 비슷한 나이의 같은 남자 아이랑 산책하고 싶네요~ 안녕 안녕 ~~~',
//       image: 'images/exDogImg.jpg',
//       author: { username: '식빵맘', image: 'images/exDogImg.jpg' },
//       hearted: false,
//       heartedCount: 26,
//       commentCount: 165,
//     },
//     {
//       content:
//         '식빵이랑 친구해요 성격이 순하고 착해요 비슷한 나이의 같은 남자 아이랑 산책하고 싶네요~ 안녕 안녕 ~~~ 식빵이랑 친구해요 성격이 순하고 착해요 비슷한 나이의 같은 남자 아이랑 산책하고 싶네요~ 안녕 안녕 ~~~',
//       image: 'images/exDogImg.jpg',
//       author: { username: '식빵맘', image: 'images/exDogImg.jpg' },
//       hearted: false,
//       heartedCount: 26,
//       commentCount: 165,
//     },
//     {
//       content:
//         '식빵이랑 친구해요 성격이 순하고 착해요 비슷한 나이의 같은 남자 아이랑 산책하고 싶네요~ 안녕 안녕 ~~~ 식빵이랑 친구해요 성격이 순하고 착해요 비슷한 나이의 같은 남자 아이랑 산책하고 싶네요~ 안녕 안녕 ~~~',
//       image: 'images/exDogImg.jpg',
//       author: { username: '식빵맘', image: 'images/exDogImg.jpg' },
//       hearted: false,
//       heartedCount: 26,
//       commentCount: 165,
//     },
//     {
//       content:
//         '식빵이랑 친구해요 성격이 순하고 착해요 비슷한 나이의 같은 남자 아이랑 산책하고 싶네요~ 안녕 안녕 ~~~ 식빵이랑 친구해요 성격이 순하고 착해요 비슷한 나이의 같은 남자 아이랑 산책하고 싶네요~ 안녕 안녕 ~~~',
//       image: 'images/exDogImg.jpg',
//       author: { username: '식빵맘', image: 'images/exDogImg.jpg' },
//       hearted: false,
//       heartedCount: 26,
//       commentCount: 165,
//     },
//   ],
// };
