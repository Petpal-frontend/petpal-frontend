import { tokenInstance } from './axiosInstance';

export const getMyProfile = async token => {
  const response = await tokenInstance.get(`/user/myinfo`, token);
  return response;
};

export const putMyProfile = async userData => {
  try {
    const response = await tokenInstance.put('/user', userData);
    return response;
  } catch (err) {
    console.error(err);
  }
};
