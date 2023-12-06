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
                  <SplashPage />
                ) : isLoggedIn ? (
                  <Main />
                ) : null}

                {/* <SplashPage /> */}
                {/* <Home /> */}
                {/* <NavBar /> */}
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/productList"
            element={
              <>
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
                <ScrollToTop />
                <CareDetail />
              </>
            }
          />
          <Route
            path="/carePost"
            element={
              <>
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
                <ScrollToTop />
                <Feed />
                <NavBar />
              </>
            }
          />
          <Route path="/search" element={<Search />} />
          <Route path="/chatList" element={<ChatList />} />
          <Route path="/chatRoom/:username" element={<ChatRoomPage />} />
          <Route
            path="/profile"
            element={
              <>
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
                <ScrollToTop />
                <YourProfile />
                <NavBar />
              </>
            }
          />
          <Route path="/profile/:accountname" element={<Outlet />}>
            <Route path=":follow/" element={<Follow />} />
          </Route>
          <Route path="/404error" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
