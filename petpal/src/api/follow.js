import { tokenInstance } from './axiosInstance';

/* 팔로워 리스트 */
export const getFollowers = async accountname => {
  const response = await tokenInstance.get(
    `/profile/${accountname}/follow`,
    // `/profile/${accountname}/follow/?limit=Number&skip=Number`,
  );
  return response;
};

/* 팔로잉 리스트 */
export const getFollowingList = async accountname => {
  const response = await tokenInstance.get(
    `/profile/${accountname}/following/?limit=Number&skip=Number`,
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
