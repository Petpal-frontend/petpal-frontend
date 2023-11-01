import { tokenInstance } from './axiosInstance';

/* 팔로워 리스트 (나를 팔로우한 사용자 목록) */
export const getFollowers = async accountname => {
  const response = await tokenInstance.get(
    `/profile/${accountname}/follower`,
    // `/profile/${accountname}/follower/?limit=Number&skip=Number`,
  );
  return response.data;
};

/* 팔로잉 리스트 (내가 팔로우한 사용자 목록) */
export const getFollowings = async accountname => {
  const response = await tokenInstance.get(
    `/profile/${accountname}/following`,
    // `/profile/${accountname}/following/?limit=Number&skip=Number`,
  );
  return response.data;
};

/* 팔로우 */
export const postFollow = async accountname => {
  const response = await tokenInstance.post(`/profile/${accountname}/follow`);
  return response.data;
};

/* 언팔로우 */
export const deleteFollow = async accountname => {
  const response = await tokenInstance.delete(
    `/profile/${accountname}/unfollow`,
  );
  return response.data;
};
