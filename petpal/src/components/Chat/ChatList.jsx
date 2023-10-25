// import React from 'react';
// import { Link } from 'react-router-dom';
// import { StyledLayout } from './ProductListStyle';
// import { HeaderWrap } from './ProductListStyle';
// import { PrevBtn, MoreBtn } from './ProductListStyle';
// import { MainWrap } from './ProductListStyle';
// import { ProductLi, ProductImg, ProductInfo } from './ProductListStyle';
// import { NavBarWrap } from './ProductListStyle';
// import { NavBarUl, IconImg, IconInfo } from './ProductListStyle';
// import { AddBtn } from './ProductListStyle';

// export default function ProductList() {
//   return (
//     <>
//       <StyledLayout>
//         <HeaderWrap>
//           <h1 className="a11y-hidden">채팅 목록</h1>
//           <PrevBtn />
//           <MoreBtn />
//         </HeaderWrap>

//         <MainWrap>
//           <ul>
//             <ProductLi>
//               <Link to={`/productDetail`}>
//                 <p className="productImg">
//                   <img src="./images/product00.svg" alt="상품 이미지" />
//                 </p>
//                 <strong className="productTitle">
//                   강아지 사료 팝니다. 강아지 사료 팝니다. 강아지 사료 팝니다.
//                 </strong>
//                 <span className="productDesc">
//                   저희 강아지가 이 제품은 안먹네요 ㅠㅠ 그래서 팝니다. 저희
//                   강아지가 이 제품은 안먹네요 ㅠㅠ 그래서 팝니다. 저희 강아지가
//                   이 제품은 안먹네요 ㅠㅠ 그래서 팝니다.
//                 </span>
//                 <strong className="productPrice">
//                   <span>9900</span>원
//                 </strong>
//               </Link>
//             </ProductLi>
//             <ProductLi>
//               <Link to={`/productDetail`}>
//                 <p className="productImg">
//                   <img src="./images/product00.svg" alt="상품 이미지" />
//                 </p>
//                 <strong className="productTitle">
//                   강아지 사료 팝니다. 강아지 사료 팝니다. 강아지 사료 팝니다.
//                 </strong>
//                 <span className="productDesc">
//                   저희 강아지가 이 제품은 안먹네요 ㅠㅠ 그래서 팝니다. 저희
//                   강아지가 이 제품은 안먹네요 ㅠㅠ 그래서 팝니다. 저희 강아지가
//                   이 제품은 안먹네요 ㅠㅠ 그래서 팝니다.
//                 </span>
//                 <strong className="productPrice">
//                   <span>9900</span>원
//                 </strong>
//               </Link>
//             </ProductLi>
//             <ProductLi>
//               <Link to={`/productDetail`}>
//                 <p className="productImg">
//                   <img src="./images/product00.svg" alt="상품 이미지" />
//                 </p>
//                 <strong className="productTitle">
//                   강아지 사료 팝니다. 강아지 사료 팝니다. 강아지 사료 팝니다.
//                 </strong>
//                 <span className="productDesc">
//                   저희 강아지가 이 제품은 안먹네요 ㅠㅠ 그래서 팝니다. 저희
//                   강아지가 이 제품은 안먹네요 ㅠㅠ 그래서 팝니다. 저희 강아지가
//                   이 제품은 안먹네요 ㅠㅠ 그래서 팝니다.
//                 </span>
//                 <strong className="productPrice">
//                   <span>9900</span>원
//                 </strong>
//               </Link>
//             </ProductLi>
//             <ProductLi>
//               <Link to={`/productDetail`}>
//                 <p className="productImg">
//                   <img src="./images/product00.svg" alt="상품 이미지" />
//                 </p>
//                 <strong className="productTitle">
//                   강아지 사료 팝니다. 강아지 사료 팝니다. 강아지 사료 팝니다.
//                 </strong>
//                 <span className="productDesc">
//                   저희 강아지가 이 제품은 안먹네요 ㅠㅠ 그래서 팝니다. 저희
//                   강아지가 이 제품은 안먹네요 ㅠㅠ 그래서 팝니다. 저희 강아지가
//                   이 제품은 안먹네요 ㅠㅠ 그래서 팝니다.
//                 </span>
//                 <strong className="productPrice">
//                   <span>9900</span>원
//                 </strong>
//               </Link>
//             </ProductLi>
//             <ProductLi>
//               <Link to={`/productDetail`}>
//                 <p className="productImg">
//                   <img src="./images/product00.svg" alt="상품 이미지" />
//                 </p>
//                 <strong className="productTitle">
//                   강아지 사료 팝니다. 강아지 사료 팝니다. 강아지 사료 팝니다.
//                 </strong>
//                 <span className="productDesc">
//                   저희 강아지가 이 제품은 안먹네요 ㅠㅠ 그래서 팝니다. 저희
//                   강아지가 이 제품은 안먹네요 ㅠㅠ 그래서 팝니다. 저희 강아지가
//                   이 제품은 안먹네요 ㅠㅠ 그래서 팝니다.
//                 </span>
//                 <strong className="productPrice">
//                   <span>9900</span>원
//                 </strong>
//               </Link>
//             </ProductLi>
//             <ProductLi>
//               <Link to={`/productDetail`}>
//                 <p className="productImg">
//                   <img src="./images/product00.svg" alt="상품 이미지" />
//                 </p>
//                 <strong className="productTitle">
//                   강아지 사료 팝니다. 강아지 사료 팝니다. 강아지 사료 팝니다.
//                 </strong>
//                 <span className="productDesc">
//                   저희 강아지가 이 제품은 안먹네요 ㅠㅠ 그래서 팝니다. 저희
//                   강아지가 이 제품은 안먹네요 ㅠㅠ 그래서 팝니다. 저희 강아지가
//                   이 제품은 안먹네요 ㅠㅠ 그래서 팝니다.
//                 </span>
//                 <strong className="productPrice">
//                   <span>9900</span>원
//                 </strong>
//               </Link>
//             </ProductLi>
//           </ul>
//         </MainWrap>

//         <NavBarWrap>
//           <NavBarUl>
//             <li>
//               <Link to="/">
//                 <IconImg src="./images/icon-home-fill.svg" />
//                 <IconInfo>홈</IconInfo>
//               </Link>
//             </li>
//             <li>
//               <Link to="/feed">
//                 <IconImg src="./images/icon-feed.svg" />
//                 <IconInfo>피드</IconInfo>
//               </Link>
//             </li>
//             <li>
//               <Link to="/productPost">
//                 <IconImg src="./images/icon-edit.svg" />
//                 <IconInfo>게시물 작성</IconInfo>
//               </Link>
//             </li>
//             <li>
//               <Link to="/chatList">
//                 <IconImg src="./images/icon-chat.svg" />
//                 <IconInfo>채팅</IconInfo>
//               </Link>
//             </li>
//             <li>
//               <Link to="/profile">
//                 <IconImg src="./images/icon-user.svg" />
//                 <IconInfo>프로필</IconInfo>
//               </Link>
//             </li>
//           </NavBarUl>
//         </NavBarWrap>
//       </StyledLayout>
//     </>
//   );
// }
