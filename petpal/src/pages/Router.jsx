import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './HomePage/HomePage';
import Login from './LoginPage/LoginPage';
import Signup from './SignupPage/SignupPage';
import ProductList from './ProductPage/ProductListPage';
import ProductDetail from './ProductPage/ProductDetailPage';
import ProductPost from './ProductPage/ProductPostPage';
import WalkList from './WalkPage/WalkListPage';
import WalkDetail from './WalkPage/WalkDetailPage';
import WalkPost from './WalkPage/WalkPostPage';
import CareList from './CarePage/CareListPage';
import CareDetail from './CarePage/CareDetailPage';
import CarePost from './CarePage/CarePostPage';
import Feed from './FeedPage/FeedPage';
import ChatList from './ChatPage/ChatListPage';
import ChatRoom from './ChatPage/ChatRoomPage';
import Profile from './ProfilePage/ProfilePage';
import Search from './SearchPage/SearchPage';
import Following from './FollowPage/FollowingPage';
import Follower from './FollowPage/FollowerPage';
import Page404 from './Page404';
import SplashPage from './SplashPage/SplashPage';
import HomePage from './HomePage/HomePage';

import NavBar from '../components/Common/NavBar/NavBar';
import YourProfile from '../pages/ProfilePage/YourProfilePage';

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SplashPage />
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
                <ProductList />
                <NavBar />
              </>
            }
          />
          <Route path="/productDetail/:productId" element={<ProductDetail />} />
          {/* <Route path="/productDetail" element={<ProductDetail />} /> */}
          <Route path="/productPost" element={<ProductPost />} />
          <Route
            path="/walkList"
            element={
              <>
                <WalkList />
                <NavBar />
              </>
            }
          />
          <Route
            path="/walkDetail/:id"
            element={
              <>
                <WalkDetail />
                <NavBar />
              </>
            }
          />
          <Route path="/walkPost" element={<WalkPost />} />
          <Route path="/careList" element={<CareList />} />
          <Route path="/careDetail" element={<CareDetail />} />
          <Route path="/carePost" element={<CarePost />} />
          <Route
            path="/feed"
            element={
              <>
                <Feed />
                <NavBar />
              </>
            }
          />
          <Route path="/search" element={<Search />} />
          <Route path="/chatList" element={<ChatList />} />
          <Route path="/chatRoom" element={<ChatRoom />} />
          <Route
            path="/profile"
            element={
              <>
                <Profile />
                <NavBar />
              </>
            }
          />
          {/* 임시 라우팅 */}
          <Route
            path="/yourProfile"
            element={
              <>
                <YourProfile />
                <NavBar />
              </>
            }
          />
          {/* <Route
            path="/yourProfile/:username"
            element={
              <>
                <YourProfile />
                <NavBar />
              </>
            }
          /> */}
          <Route path="/following" element={<Following />} />
          <Route path="/follower" element={<Follower />} />
          {/* <Route path="/profile/:accountname/follower" element={<Follower />} />
          <Route
            path="/profile/:accountname/following"
            element={<Following />}
          /> */}
          <Route path="/404error" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
