import { React, useState, useEffect } from 'react';
import Header from '../../components/Common/Header/Header';
import FollowerList from '../../components/Follow/FollowerList';
import { getFollowingList } from '../../api/follow';
import { useLocation, useParams } from 'react-router-dom';

// const initialFollowerList = [
//   {
//     imgSrc: 'images/exDogImg.jpg',
//     user: '식빵맘',
//     follow: 'images/follow.png',
//   },
//   {
//     imgSrc: 'images/exDogImg.jpg',
//     user: '식빵맘',
//     follow: 'images/homeLogo.svg',
//   },
//   {
//     imgSrc: 'images/exDogImg.jpg',
//     user: '식빵맘',
//     follow: 'images/homeLogo.svg',
//   },
//   {
//     imgSrc: 'images/exDogImg.jpg',
//     user: '식빵맘',
//     follow: '',
//   },
// ];
export default function FollowerPage() {
  const [followerList, setFollowerList] = useState([]);
  // const token = localStorage.getItem('token');

  const accountname = useParams().accountname;

  useEffect(() => {
    const followList = async () => {
      const response = await getFollowingList(accountname);
      console.log('response= ' + JSON.stringify(response));
      console.log('response= ' + JSON.stringify(response.username));
      setFollowerList(response);
    };
    followList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleButtonClick = index => {
    const updatedFollowerList = [...followerList];
    updatedFollowerList[index].follow =
      updatedFollowerList[index].follow === 'images/homeLogo.svg'
        ? 'images/follow.png'
        : 'images/homeLogo.svg';
    setFollowerList(updatedFollowerList);
  };

  return (
    <>
      <Header type="walk" title="Followers진행중!" />
      <FollowerList
        followerList={followerList}
        onButtonClick={handleButtonClick}
      />
    </>
  );
}
