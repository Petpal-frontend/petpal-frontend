import { tokenInstance } from './axiosInstance';

export const getMyProfile = async token => {
  try {
    const response = await tokenInstance.get(`/user/myinfo`, token);
    return response;
  } catch (err) {
    console.error(err);
  }
};

export const putMyProfile = async userData => {
  try {
    const response = await tokenInstance.put('/user', userData);
    return response;
  } catch (err) {
    console.error(err);
  }
};

export const getYourProfile = async accountname => {
  try {
    const response = await tokenInstance.get(`/profile/${accountname}`);
    return response;
  } catch (err) {
    console.error(err);
  }
};
