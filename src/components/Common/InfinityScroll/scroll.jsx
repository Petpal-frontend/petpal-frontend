import React, { useEffect, useState } from 'react';
import { ScrollContainer, ScrollImageButton } from './scrollStyle';
import { Link, useLocation } from 'react-router-dom';

const InfiniteScroll = ({ imageData, className }) => {
  const { pathname } = useLocation();

  console.log('data: ', imageData);

  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  const initialImageUrls = Array.from(
    // 최대 10개 이미지 또는 이미지 수만큼
    { length: Math.min(10, imageData.length) },
    (_, index) => {
      // 이미지 있는 게시물만
      if (imageData[index]) {
        // 이미지 여러개 일 때 처리
        let imageArr = imageData[index].image.split(',');
        return {
          image: imageArr[0],
          accountname:
            pathname === '/'
              ? imageData[index].accountname
              : imageData[index].author.accountname,
          id: pathname === '/' ? imageData[index]._id : imageData[index].id,
        };
      }
      return null;
    },
  );

  console.log('!!!initialImageUrls', initialImageUrls);
  const [imageUrls, setImageUrls] = useState(initialImageUrls);

  const addContent = () => {
    const imageIndex = imageUrls.length % imageData.length;
    // 이미지 있는 게시물만
    if (imageData[imageIndex]) {
      // 이미지 여러개 일 때 처리
      const newImageArr = imageData[imageIndex].image.split(',');
      const newImageUrl = {
        image: newImageArr[0],
        accountname:
          pathname === '/'
            ? `${imageData[imageIndex].accountname}`
            : `${imageData[imageIndex].author.accountname}`,
        id:
          pathname === '/'
            ? `${imageData[imageIndex]._id}`
            : `${imageData[imageIndex].id}`,
      };
      setImageUrls([...imageUrls, newImageUrl]);
    }
  };

  const checkScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = window.innerHeight + window.scrollY;
    if (scrollTop >= scrollHeight - 100) {
      // 스크롤이 맨 아래로 도달했을 때 이미지 추가
      addContent();
    }
  };

  useEffect(() => {
    if (imageUrls.length === imageData.length) {
      // 모든 이미지가 로딩되면 스크롤 이벤트 제거
      setAllImagesLoaded(true);
    } else {
      window.addEventListener('scroll', checkScroll);
    }

    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageUrls]);

  return (
    <ScrollContainer style={{ paddingBottom: allImagesLoaded ? '70px' : '0' }}>
      {imageUrls.length > 0 ? (
        imageUrls.map((item, index) => (
          <ScrollImageButton key={index} className={className}>
            <Link
              to={
                pathname === '/'
                  ? `/yourProfile/${item.accountname}`
                  : `/walkDetail/${item.id}`
              }
            >
              <img
                src={item.image}
                alt={
                  pathname === '/'
                    ? `프로필 이미지 ${index}`
                    : `게시글 이미지 ${index}`
                }
              />
            </Link>
          </ScrollImageButton>
        ))
      ) : (
        <h1>팔로잉 중인 사용자의 게시물이 없습니다.</h1>
      )}
    </ScrollContainer>
  );
};

export default InfiniteScroll;

// 데이터 비동기 처리 안됨, 10개 이하인 경우 에러남, 로딩 중에 빈화면
// import React, { useEffect, useState } from 'react';
// import { ScrollContainer, ScrollImageButton } from './scrollStyle';
// import { Link, useLocation } from 'react-router-dom';

// const InfiniteScroll = ({ imageData, className }) => {
//   const { pathname } = useLocation();

//   console.log('data: ', imageData);

//   const [allImagesLoaded, setAllImagesLoaded] = useState(false);

//   const initialImageUrls = Array.from(
//     { length: 10 }, //@@@@@게시글 이미지가 0개면 에러. length가 10이면, 게시글 이미지 최소 10개 있어야 에러 안남.
//     // (_, index) => imageData[index].image,
//     (_, index) => {
//       return {
//         image: imageData[index].image,
//         accountname:
//           pathname === '/'
//             ? imageData[index].accountname
//             : imageData[index].author.accountname,
//         id: pathname === '/' ? imageData[index]._id : imageData[index].id,
//       }; //@@@@@ pathname......?
//     },
//   );
//   console.log('!!!initialImageUrls', initialImageUrls);
//   const [imageUrls, setImageUrls] = useState(initialImageUrls);

//   const addContent = () => {
//     // const newImageUrl = `${
//     //   imageData[imageUrls.length % imageData.length].image
//     // }`;
//     const imageIndex = imageUrls.length % imageData.length;
//     const newImageUrl = {
//       image: `${imageData[imageIndex].image}`,
//       accountname:
//         pathname === '/'
//           ? `${imageData[imageIndex].accountname}`
//           : `${imageData[imageIndex].author.accountname}`,
//       id:
//         pathname === '/'
//           ? `${imageData[imageIndex]._id}`
//           : `${imageData[imageIndex].id}`,
//     };
//     // console.log('!!!!!!!!!!!!!!!!!!!!!!!', newImageUrl);
//     setImageUrls([...imageUrls, newImageUrl]);
//   };
//   console.log('!!!imageUrls', imageUrls);
//   console.log('!!!imageData', imageData);

//   const checkScroll = () => {
//     const scrollHeight = document.documentElement.scrollHeight;
//     const scrollTop = window.innerHeight + window.scrollY;
//     if (scrollTop >= scrollHeight - 100) {
//       // 스크롤이 맨 아래로 도달했을 때 이미지 추가
//       addContent();
//     }
//   };

//   useEffect(() => {
//     if (imageUrls.length === imageData.length) {
//       // 모든 이미지가 로딩되면 스크롤 이벤트 제거
//       setAllImagesLoaded(true);
//     } else {
//       window.addEventListener('scroll', checkScroll);
//     }

//     return () => {
//       window.removeEventListener('scroll', checkScroll);
//     };
//     //eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [imageUrls]);

//   return (
//     <ScrollContainer style={{ paddingBottom: allImagesLoaded ? '70px' : '0' }}>
//       {imageUrls.map((item, index) => (
//         <ScrollImageButton key={index} className={className}>
//           <Link
//             to={
//               pathname === '/'
//                 ? `/yourProfile/${item.accountname}`
//                 : `/walkDetail/${item.id}`
//             }
//           >
//             <img
//               // src={imageUrls[index]}
//               src={item.image}
//               alt={
//                 pathname === '/'
//                   ? `프로필 이미지 ${index}`
//                   : `게시글 이미지 ${index}`
//               }
//             />
//           </Link>
//         </ScrollImageButton>
//       ))}
//       {/* {imageData.map((item, index) => (
//         <ScrollImageButton key={index} className={className}>
//           <Link
//             to={
//               pathname === '/'
//                 ? `/yourProfile/${item.accountname}`
//                 : `/walkDetail/${item.id}`
//             }
//           >
//             <img
//               src={item.image}
//               alt={
//                 pathname === '/'
//                   ? `프로필 이미지 ${index}`
//                   : `게시글 이미지 ${index}`
//               }
//             />
//           </Link>
//         </ScrollImageButton>
//       ))} */}
//     </ScrollContainer>
//   );
// };

// export default InfiniteScroll;

// const InfiniteScroll = ({ imageData, className }) => {
//   const [allImagesLoaded, setAllImagesLoaded] = useState(false);
//   const imgUrl = 'https://api.mandarin.weniv.co.kr/';

//   const initialImageUrls = Array.from(
//     { length: 10 },
//     (_, index) => imgUrl + imageData[index],
//   );
//   const [imageUrls, setImageUrls] = useState(initialImageUrls);

//   const addContent = () => {
//     const newImageUrl = `${imgUrl}${
//       imageData[imageUrls.length % imageData.length]
//     }`;
//     setImageUrls([...imageUrls, newImageUrl]);
//   };

//   const checkScroll = () => {
//     const scrollHeight = document.documentElement.scrollHeight;
//     const scrollTop = window.innerHeight + window.scrollY;
//     if (scrollTop >= scrollHeight - 100) {
//       // 스크롤이 맨 아래로 도달했을 때 이미지 추가
//       addContent();
//     }
//   };

//   useEffect(() => {
//     if (imageUrls.length === imageData.length) {
//       // 모든 이미지가 로딩되면 스크롤 이벤트 제거
//       setAllImagesLoaded(true);
//     } else {
//       window.addEventListener('scroll', checkScroll);
//     }

//     return () => {
//       window.removeEventListener('scroll', checkScroll);
//     };
//     //eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [imageUrls]);
