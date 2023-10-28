import CareList from '../../components/Care/CareList';
import Header from '../../components/Common/Header/Header';

const careItemList = [
  {
    content:
      '고양이 돌봐주세요.',
    imgSrc: 'images/exCatImg.png',
    user: { name: '냥이엄마', profile: 'images/exCatImg.png' },
    like: false,
    likeNum: 26,
    chatNum: 165,
  },
  {
    content:
      'Lorem ipsum dolor sit amet conser adipiscing elit. Sed lacinia lectus id arcu fermentum, sit amet interdum turpis mollis. Integer accumsan, dui eu suscipit vestibulum, dolor turpis iaculis magna, nec dapibus mi sapien id nibh. Nullam erat enim, maximus nec orci id, eleifend venenatis ipsum. Aenean ut quam vitae felis lobortis iaculis at quis enim. Pellentesque id condimentum nunc, ut imperdiet turpis. Praesent condimentum vulputate ligula a placerat. Fusce facilisis erat ac orci scelerisque, ac efficitur ex imperdiet. Nunc ante ipsum, varius non efficitur et, congue quis mauris. Proin pulvinar ipsum lorem. Nullam sit amet mi id nunc bibendum posuere eget non tellus. Nullam eget ultrices quam.',
    imgSrc: 'images/exCatImg.png',
    user: { name: '초코맘', profile: 'images/exCatImg.png' },
    like: true,
    likeNum: 26,
    chatNum: 8,
  },
  {
    content:
      'Lorem ipsum dolor sddawng elit. Sed lacinia lectus id arcu fermentum, sit amet interdum turpis mollis. Integer accumsan, dui eu suscipit vestibulum, dolor turpis iaculis magna, nec dapibus mi sapien id nibh. Nullam erat enim, maximus nec orci id, eleifend venenatis ipsum. Aenean ut quam vitae felis lobortis iaculis at quis enim. Pellentesque id condimentum nunc, ut imperdiet turpis. Praesent condimentum vulputate ligula a placerat. Fusce facilisis erat ac orci scelerisque, ac efficitur ex imperdiet. Nunc ante ipsum, varius non efficitur et, congue quis mauris. Proin pulvinar ipsum lorem. Nullam sit amet mi id nunc bibendum posuere eget non tellus. Nullam eget ultrices quam.',
    imgSrc: 'images/exCatImg.png',
    user: { name: '쿠키맘', profile: 'images/exCatImg.png' },
    like: false,
    likeNum: 26,
    chatNum: 8,
  },
  {
    content:
      '저희가 3일 동안 여행을 가야하는데 고양이 2마리 돌봐주실 분을 구해요. 사례는 넉넉히 해드립니다. 자세한건 채팅으로 알려드리겠습니다.',
    imgSrc: 'images/exCatImg.png',
    user: { name: '냥이엄마', profile: 'images/exCatImg.png' },
    like: false,
    likeNum: 26,
    chatNum: 165,
  },
  {
    content:
      '저희가 3일 동안 여행을 가야하는데 고양이 2마리 돌봐주실 분을 구해요. 사례는 넉넉히 해드립니다. 자세한건 채팅으로 알려드리겠습니다.',
    imgSrc: 'images/exCatImg.png',
    user: { name: '냥이엄마', profile: 'images/exCatImg.png' },
    like: false,
    likeNum: 26,
    chatNum: 165,
  },
  {
    content:
      '저희가 3일 동안 여행을 가야하는데 고양이 2마리 돌봐주실 분을 구해요. 사례는 넉넉히 해드립니다. 자세한건 채팅으로 알려드리겠습니다.',
    imgSrc: 'images/exCatImg.png',
    user: { name: '냥이엄마', profile: 'images/exCatImg.png' },
    like: false,
    likeNum: 26,
    chatNum: 165,
  },
  {
    content:
      '저희가 3일 동안 여행을 가야하는데 고양이 2마리 돌봐주실 분을 구해요. 사례는 넉넉히 해드립니다. 자세한건 채팅으로 알려드리겠습니다.',
    imgSrc: 'images/exCatImg.png',
    user: { name: '냥이엄마', profile: 'images/exCatImg.png' },
    like: false,
    likeNum: 26,
    chatNum: 165,
  },
  {
    content:
      '저희가 3일 동안 여행을 가야하는데 고양이 2마리 돌봐주실 분을 구해요. 사례는 넉넉히 해드립니다. 자세한건 채팅으로 알려드리겠습니다.',
    imgSrc: 'images/exCatImg.png',
    user: { name: '냥이엄마', profile: 'images/exCatImg.png' },
    like: false,
    likeNum: 26,
    chatNum: 165,
  },
  {
    content:
      '저희가 3일 동안 여행을 가야하는데 고양이 2마리 돌봐주실 분을 구해요. 사례는 넉넉히 해드립니다. 자세한건 채팅으로 알려드리겠습니다.',
    imgSrc: 'images/exCatImg.png',
    user: { name: '냥이엄마', profile: 'images/exCatImg.png' },
    like: false,
    likeNum: 26,
    chatNum: 165,
  },
  {
    content:
      '저희가 3일 동안 여행을 가야하는데 고양이 2마리 돌봐주실 분을 구해요. 사례는 넉넉히 해드립니다. 자세한건 채팅으로 알려드리겠습니다.',
    imgSrc: 'images/exCatImg.png',
    user: { name: '냥이엄마', profile: 'images/exCatImg.png' },
    like: false,
    likeNum: 26,
    chatNum: 165,
  },
  {
    content:
      '저희가 3일 동안 여행을 가야하는데 고양이 2마리 돌봐주실 분을 구해요. 사례는 넉넉히 해드립니다. 자세한건 채팅으로 알려드리겠습니다.',
    imgSrc: 'images/exCatImg.png',
    user: { name: '냥이엄마', profile: 'images/exCatImg.png' },
    like: false,
    likeNum: 26,
    chatNum: 165,
  },
  {
    content:
      '저희가 3일 동안 여행을 가야하는데 고양이 2마리 돌봐주실 분을 구해요. 사례는 넉넉히 해드립니다. 자세한건 채팅으로 알려드리겠습니다.',
    imgSrc: 'images/exCatImg.png',
    user: { name: '냥이엄마', profile: 'images/exCatImg.png' },
    like: false,
    likeNum: 26,
    chatNum: 165,
  },
  {
    content:
      '저희가 3일 동안 여행을 가야하는데 고양이 2마리 돌봐주실 분을 구해요. 사례는 넉넉히 해드립니다. 자세한건 채팅으로 알려드리겠습니다.',
    imgSrc: 'images/exCatImg.png',
    user: { name: '냥이엄마', profile: 'images/exCatImg.png' },
    like: false,
    likeNum: 26,
    chatNum: 165,
  },
];

export default function CareListPage() {
  return (
    <>
      <Header type="list" title="돌보미" />
      <CareList careItemList={careItemList} />
    </>
  );
}
