import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './HomePage/Home';
import Login from './LoginPage/Login';
import Signup from './SignupPage/Signup';
import ProductList from './ProductPage/ProductList';
import ProductDetail from './ProductPage/ProductDetail';
import ProductPost from './ProductPage/ProductPost';
import WalkList from './WalkPage/WalkList';
import WalkDetail from './WalkPage/WalkDetail';
import WalkPost from './WalkPage/WalkPost';
import CareList from './CarePage/CareList';
import CareDetail from './CarePage/CareDetail';
import CarePost from './CarePage/CarePost';
import Feed from './FeedPage/Feed';
import ChatList from './ChatPage/ChatList';
import ChatRoom from './ChatPage/ChatRoom';
import Profile from './ProfilePage/Profile';
import Search from './SearchPage/Search';
import Following from './FollowPage/Following';
import Follower from './FollowPage/Follower';
import Page404 from './Page404';

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/productList" element={<ProductList />} />
          <Route path="/productDetail" element={<ProductDetail />} />
          <Route path="/productPost" element={<ProductPost />} />

          <Route path="/walkList" element={<WalkList />} />
          <Route path="/walkDetail" element={<WalkDetail />} />
          <Route path="/walkPost" element={<WalkPost />} />

          <Route path="/careList" element={<CareList />} />
          <Route path="/careDetail" element={<CareDetail />} />
          <Route path="/carePost" element={<CarePost />} />

          <Route path="/feed" element={<Feed />} />
          <Route path="/search" element={<Search />} />

          <Route path="/chatList" element={<ChatList />} />
          <Route path="/chatRoom" element={<ChatRoom />} />

          <Route path="/profile" element={<Profile />} />
          <Route path="/following" element={<Following />} />
          <Route path="/follower" element={<Follower />} />

          <Route path="/404error" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
