import { instance } from './axiosInstance';

export const postLogin = async userData => {
  const response = await instance.post(`/user/login`, userData);
  return response;
};
