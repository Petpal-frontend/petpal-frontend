import { tokenInstance } from './axiosInstance';

export const getMyProfile = async token => {
  const response = await tokenInstance.get(`/user/myinfo`, token);
  return response;
};
