import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useLocation,
  Navigate,
} from 'react-router-dom';
import Main from './MainPage/MainPage';
import Home from './HomePage/HomePage';
import Login from './LoginPage/LoginPage';
import Signup from './SignupPage/SignupPage';
import ProductList from './ProductPage/ProductListPage';
import ProductDetail from './ProductPage/ProductDetailPage';
import ProductPost from './ProductPage/ProductPostPage';
import ProductEdit from './ProductPage/ProductEditPage';
import WalkList from './WalkPage/WalkListPage';
import WalkDetail from './WalkPage/WalkDetailPage';
import WalkPost from './WalkPage/WalkPostPage';
import WalkEdit from './WalkPage/WalkEditPage';
import CareList from './CarePage/CareListPage';
import CareDetail from './CarePage/CareDetailPage';
import CarePost from './CarePage/CarePostPage';
import CareEdit from './CarePage/CareEditPage';
import Feed from './FeedPage/FeedPage';
import ChatList from './ChatPage/ChatListPage';
import ChatRoom from './ChatPage/ChatRoomPage';
import Profile from './ProfilePage/ProfilePage';
import ProfileEdit from './ProfilePage/ProfileEditPage';
import Search from './SearchPage/SearchPage';
import Follow from './FollowPage/FollowPage';
import Page404 from './Page404';
import SplashPage from './SplashPage/SplashPage';
import HomePage from './HomePage/HomePage';

import NavBar from '../components/Common/NavBar/NavBar';
import YourProfile from '../pages/ProfilePage/YourProfilePage';
import ChatRoomPage from './ChatPage/ChatRoomPage';

import { userInfoAtom } from '../atoms/AtomUserState';
import { useRecoilValue } from 'recoil';
import { Helmet } from 'react-helmet-async';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function Router() {
  const userState = useRecoilValue(userInfoAtom);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // userState를 이용하여 로그인 상태를 확인하고 isLoggedIn 상태 업데이트
    setIsLoggedIn(userState && userState.username);
  }, [userState]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ScrollToTop />
                {/* {isLoggedIn ? <Main /> : <Navigate to="/login" />} */}
                {isLoggedIn === '' ? (
                  <>
                    <Helmet>
                      <title>스플래쉬 | Petpal</title>
                      <meta
                        name="description"
                        content="페이지의 컨텐츠가 로딩 중 입니다."
                      />
                    </Helmet>
                    <SplashPage />
                  </>
                ) : isLoggedIn ? (
                  <>
                    <Helmet>
                      <title>메인페이지 | Petpal </title>
                      <meta name="description" content="펫팔의 메인페이지" />
                    </Helmet>
                    <Main />
                  </>
                ) : null}

                {/* <SplashPage /> */}
                {/* <Home /> */}
                {/* <NavBar /> */}
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Helmet>
                  <title>로그인 | Petpal </title>
                  <meta name="description" content="펫팔의 로그인 페이지" />
                </Helmet>
                <Login />
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                <Helmet>
                  <title>회원가입 | Petpal </title>
                  <meta name="description" content="펫팔의 회원가입 페이지" />
                </Helmet>
                <Signup />
              </>
            }
          />
          <Route
            path="/productList"
            element={
              <>
                <Helmet>
                  <title>상품 목록 | Petpal </title>
                  <meta name="description" content="펫팔의 상품 목록 페이지" />
                </Helmet>
                <ScrollToTop />
                <ProductList />
                <NavBar />
              </>
            }
          />
          <Route
            path="/productDetail/:productId"
            element={
              <>
                <Helmet>
                  <title>상품 상세 보기 | Petpal </title>
                  <meta
                    name="description"
                    content="펫팔의 상품 상세 보기 페이지"
                  />
                </Helmet>
                <ScrollToTop />
                <ProductDetail />
                <NavBar />
              </>
            }
          />
          {/* <Route path="/productDetail" element={<ProductDetail />} /> */}
          <Route
            path="/productPost"
            element={
              <>
                <Helmet>
                  <title>상품 게시글 쓰기 | Petpal </title>
                  <meta
                    name="description"
                    content="펫팔의 상품 게시글 쓰기 페이지"
                  />
                </Helmet>
                <ScrollToTop />
                <ProductPost />
              </>
            }
          />
          <Route path="/productEdit" element={<ProductEdit />} />
          <Route
            path="/walkList"
            element={
              <>
                <Helmet>
                  <title>산책 메이트 목록 | Petpal </title>
                  <meta
                    name="description"
                    content="펫팔의 산책 메이트 목록 페이지"
                  />
                </Helmet>
                <ScrollToTop />
                <WalkList />
                <NavBar />
              </>
            }
          />
          <Route
            path="/walkDetail/:id"
            element={
              <>
                <Helmet>
                  <title>산책 메이트 상세 보기| Petpal </title>
                  <meta
                    name="description"
                    content="펫팔의 산책 메이트 상세 보기 페이지"
                  />
                </Helmet>
                <ScrollToTop />
                <WalkDetail />
                {/* <NavBar /> */}
              </>
            }
          />
          <Route
            path="/walkPost"
            element={
              <>
                <Helmet>
                  <title>산책 메이트 게시글 쓰기 | Petpal </title>
                  <meta
                    name="description"
                    content="펫팔의 산책 메이트 게시글 쓰기 페이지"
                  />
                </Helmet>
                <ScrollToTop />
                <WalkPost />
              </>
            }
          />
          <Route path="/walkEdit" element={<WalkEdit />} />
          <Route
            path="/careList"
            element={
              <>
                <Helmet>
                  <title>돌보미 목록 | Petpal </title>
                  <meta
                    name="description"
                    content="펫팔의 돌보미 목록 페이지"
                  />
                </Helmet>
                <ScrollToTop />
                <CareList />
                <NavBar />
              </>
            }
          />
          <Route
            path="/careDetail/:id"
            element={
              <>
                <Helmet>
                  <title>돌보미 상세 보기 | Petpal </title>
                  <meta
                    name="description"
                    content="펫팔의 돌보미 상세 보기 페이지"
                  />
                </Helmet>
                <ScrollToTop />
                <CareDetail />
              </>
            }
          />
          <Route
            path="/carePost"
            element={
              <>
                <Helmet>
                  <title>돌보미 게시글 쓰기 | Petpal </title>
                  <meta
                    name="description"
                    content="펫팔의 게시글 쓰기 페이지"
                  />
                </Helmet>
                <ScrollToTop />
                <CarePost />
              </>
            }
          />
          <Route path="/careEdit" element={<CareEdit />} />

          <Route
            path="/feed"
            element={
              <>
                <Helmet>
                  <title>회원 프로필 피드 | Petpal </title>
                  <meta name="description" content="펫팔의 피드 페이지" />
                </Helmet>
                <ScrollToTop />
                <Feed />
                <NavBar />
              </>
            }
          />
          <Route
            path="/search"
            element={
              <>
                <Helmet>
                  <title>사용자 검색 | Petpal </title>
                  <meta
                    name="description"
                    content="펫팔의 사용자 검색 페이지"
                  />
                </Helmet>
                <Search />
              </>
            }
          />
          <Route
            path="/chatList"
            element={
              <>
                <Helmet>
                  <title>채팅 목록 | Petpal </title>
                  <meta name="description" content="펫팔의 채팅 목록 페이지" />
                </Helmet>
                <ChatList />
              </>
            }
          />
          <Route
            path="/chatRoom/:username"
            element={
              <>
                <Helmet>
                  <title>채팅방 | Petpal </title>
                  <meta name="description" content="펫팔의 채팅방 페이지" />
                </Helmet>
                <ChatRoomPage />
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <Helmet>
                  <title>마이프로필 | Petpal </title>
                  <meta name="description" content="펫팔의 마이프로필 페이지" />
                </Helmet>
                <ScrollToTop />
                <Profile />
                <NavBar />
              </>
            }
          />
          <Route
            path="/profileEdit"
            element={
              <>
                <Helmet>
                  <title>프로필 수정 | Petpal </title>
                  <meta
                    name="description"
                    content="펫팔의 프로필 수정 페이지"
                  />
                </Helmet>
                <ProfileEdit />
                <NavBar />
              </>
            }
          />
          {/* 임시 라우팅 */}
          <Route
            path="/yourProfile/:accountname"
            element={
              <>
                <Helmet>
                  <title>사용자 프로필 | Petpal </title>
                  <meta
                    name="description"
                    content="펫팔의 사용자 프로필 페이지"
                  />
                </Helmet>
                <ScrollToTop />
                <YourProfile />
                <NavBar />
              </>
            }
          />
          <Route path="/profile/:accountname" element={<Outlet />}>
            <Route path=":follow/" element={<Follow />} />
          </Route>
          <Route
            path="/404error"
            element={
              <>
                <Helmet>
                  <title>404 페이지 | Petpal </title>
                  <meta name="description" content="펫팔의 404 에러 페이지" />
                </Helmet>
                <Page404 />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
