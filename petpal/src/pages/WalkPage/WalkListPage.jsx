import React from 'react';
import Header from '../../components/Common/Header/Header';
import WalkItemList from '../../components/Walk/WalkItemList';

const walkItemList = [
  {
    content:
      '식빵이랑 친구해요 성격이 순하고 착해요 비슷한 나이의 같은 남자 아이랑 산책하고 싶네요~ 안녕 안녕 ~~~ 식빵이랑 친구해요 성격이 순하고 착해요 비슷한 나이의 같은 남자 아이랑 산책하고 싶네요~ 안녕 안녕 ~~~',
    imgSrc: 'images/exDogImg.jpg',
    user: { name: '식빵맘', profile: 'images/exDogImg.jpg' },
    like: false,
    likeNum: 26,
    chatNum: 165,
  },
  {
    content:
      'Lorem ipsum dolor sit amet conser adipiscing elit. Sed lacinia lectus id arcu fermentum, sit amet interdum turpis mollis. Integer accumsan, dui eu suscipit vestibulum, dolor turpis iaculis magna, nec dapibus mi sapien id nibh. Nullam erat enim, maximus nec orci id, eleifend venenatis ipsum. Aenean ut quam vitae felis lobortis iaculis at quis enim. Pellentesque id condimentum nunc, ut imperdiet turpis. Praesent condimentum vulputate ligula a placerat. Fusce facilisis erat ac orci scelerisque, ac efficitur ex imperdiet. Nunc ante ipsum, varius non efficitur et, congue quis mauris. Proin pulvinar ipsum lorem. Nullam sit amet mi id nunc bibendum posuere eget non tellus. Nullam eget ultrices quam.',
    imgSrc: 'images/exDogImg.jpg',
    user: { name: '초코맘', profile: 'images/exDogImg.jpg' },
    like: true,
    likeNum: 26,
    chatNum: 8,
  },
  {
    content:
      'Lorem ipsum dolor sddawng elit. Sed lacinia lectus id arcu fermentum, sit amet interdum turpis mollis. Integer accumsan, dui eu suscipit vestibulum, dolor turpis iaculis magna, nec dapibus mi sapien id nibh. Nullam erat enim, maximus nec orci id, eleifend venenatis ipsum. Aenean ut quam vitae felis lobortis iaculis at quis enim. Pellentesque id condimentum nunc, ut imperdiet turpis. Praesent condimentum vulputate ligula a placerat. Fusce facilisis erat ac orci scelerisque, ac efficitur ex imperdiet. Nunc ante ipsum, varius non efficitur et, congue quis mauris. Proin pulvinar ipsum lorem. Nullam sit amet mi id nunc bibendum posuere eget non tellus. Nullam eget ultrices quam.',
    imgSrc: 'images/exDogImg.jpg',
    user: { name: '쿠키맘', profile: 'images/exDogImg.jpg' },
    like: false,
    likeNum: 26,
    chatNum: 8,
  },
  {
    content:
      '식빵이랑 친구해요 성격이 순하고 착해요 비슷한 나이의 같은 남자 아이랑 산책하고 싶네요~ 안녕 안녕 ~~~ 식빵이랑 친구해요 성격이 순하고 착해요 비슷한 나이의 같은 남자 아이랑 산책하고 싶네요~ 안녕 안녕 ~~~',
    imgSrc: 'images/exDogImg.jpg',
    user: { name: '식빵맘', profile: 'images/exDogImg.jpg' },
    like: false,
    likeNum: 26,
    chatNum: 165,
  },
  {
    content:
      '식빵이랑 친구해요 성격이 순하고 착해요 비슷한 나이의 같은 남자 아이랑 산책하고 싶네요~ 안녕 안녕 ~~~ 식빵이랑 친구해요 성격이 순하고 착해요 비슷한 나이의 같은 남자 아이랑 산책하고 싶네요~ 안녕 안녕 ~~~',
    imgSrc: 'images/exDogImg.jpg',
    user: { name: '식빵맘', profile: 'images/exDogImg.jpg' },
    like: false,
    likeNum: 26,
    chatNum: 165,
  },
  {
    content:
      '식빵이랑 친구해요 성격이 순하고 착해요 비슷한 나이의 같은 남자 아이랑 산책하고 싶네요~ 안녕 안녕 ~~~ 식빵이랑 친구해요 성격이 순하고 착해요 비슷한 나이의 같은 남자 아이랑 산책하고 싶네요~ 안녕 안녕 ~~~',
    imgSrc: 'images/exDogImg.jpg',
    user: { name: '식빵맘', profile: 'images/exDogImg.jpg' },
    like: false,
    likeNum: 26,
    chatNum: 165,
  },
  {
    content:
      '식빵이랑 친구해요 성격이 순하고 착해요 비슷한 나이의 같은 남자 아이랑 산책하고 싶네요~ 안녕 안녕 ~~~ 식빵이랑 친구해요 성격이 순하고 착해요 비슷한 나이의 같은 남자 아이랑 산책하고 싶네요~ 안녕 안녕 ~~~',
    imgSrc: 'images/exDogImg.jpg',
    user: { name: '식빵맘', profile: 'images/exDogImg.jpg' },
    like: false,
    likeNum: 26,
    chatNum: 165,
  },
  {
    content:
      '식빵이랑 친구해요 성격이 순하고 착해요 비슷한 나이의 같은 남자 아이랑 산책하고 싶네요~ 안녕 안녕 ~~~ 식빵이랑 친구해요 성격이 순하고 착해요 비슷한 나이의 같은 남자 아이랑 산책하고 싶네요~ 안녕 안녕 ~~~',
    imgSrc: 'images/exDogImg.jpg',
    user: { name: '식빵맘', profile: 'images/exDogImg.jpg' },
    like: false,
    likeNum: 26,
    chatNum: 165,
  },
  {
    content:
      '식빵이랑 친구해요 성격이 순하고 착해요 비슷한 나이의 같은 남자 아이랑 산책하고 싶네요~ 안녕 안녕 ~~~ 식빵이랑 친구해요 성격이 순하고 착해요 비슷한 나이의 같은 남자 아이랑 산책하고 싶네요~ 안녕 안녕 ~~~',
    imgSrc: 'images/exDogImg.jpg',
    user: { name: '식빵맘', profile: 'images/exDogImg.jpg' },
    like: false,
    likeNum: 26,
    chatNum: 165,
  },
  {
    content:
      '식빵이랑 친구해요 성격이 순하고 착해요 비슷한 나이의 같은 남자 아이랑 산책하고 싶네요~ 안녕 안녕 ~~~ 식빵이랑 친구해요 성격이 순하고 착해요 비슷한 나이의 같은 남자 아이랑 산책하고 싶네요~ 안녕 안녕 ~~~',
    imgSrc: 'images/exDogImg.jpg',
    user: { name: '식빵맘', profile: 'images/exDogImg.jpg' },
    like: false,
    likeNum: 26,
    chatNum: 165,
  },
  {
    content:
      '식빵이랑 친구해요 성격이 순하고 착해요 비슷한 나이의 같은 남자 아이랑 산책하고 싶네요~ 안녕 안녕 ~~~ 식빵이랑 친구해요 성격이 순하고 착해요 비슷한 나이의 같은 남자 아이랑 산책하고 싶네요~ 안녕 안녕 ~~~',
    imgSrc: 'images/exDogImg.jpg',
    user: { name: '식빵맘', profile: 'images/exDogImg.jpg' },
    like: false,
    likeNum: 26,
    chatNum: 165,
  },
  {
    content:
      '식빵이랑 친구해요 성격이 순하고 착해요 비슷한 나이의 같은 남자 아이랑 산책하고 싶네요~ 안녕 안녕 ~~~ 식빵이랑 친구해요 성격이 순하고 착해요 비슷한 나이의 같은 남자 아이랑 산책하고 싶네요~ 안녕 안녕 ~~~',
    imgSrc: 'images/exDogImg.jpg',
    user: { name: '식빵맘', profile: 'images/exDogImg.jpg' },
    like: false,
    likeNum: 26,
    chatNum: 165,
  },
  {
    content:
      '식빵이랑 친구해요 성격이 순하고 착해요 비슷한 나이의 같은 남자 아이랑 산책하고 싶네요~ 안녕 안녕 ~~~ 식빵이랑 친구해요 성격이 순하고 착해요 비슷한 나이의 같은 남자 아이랑 산책하고 싶네요~ 안녕 안녕 ~~~',
    imgSrc: 'images/exDogImg.jpg',
    user: { name: '식빵맘', profile: 'images/exDogImg.jpg' },
    like: false,
    likeNum: 26,
    chatNum: 165,
  },
];

export default function WalkListPage() {
  return (
    <>
      <Header type="list" title="산책메이트" />
      <WalkItemList walkItemList={walkItemList} />
    </>
  );
}
