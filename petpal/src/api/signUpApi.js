import { instance } from './axiosInstance';

export const postSignUp = async userData => {
  const response = await instance.post(`/user`, userData);
  return response;
};

export const checkEmailExist = async email => {
  try {
    const response = await instance.post(`user/emailvalid`, email);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const checkIdExist = async accountname => {
  const response = await instance.post(`user/accountnamevalid`, accountname);
  return response.data;
};
