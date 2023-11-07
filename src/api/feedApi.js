import { tokenInstance } from './axiosInstance';

/* 팔로잉 게시글 목록(피드) */
export const getFeedList = async () => {
  const response = await tokenInstance.get(`/post/feed/?limit=1000`);
  return response.data;
};
