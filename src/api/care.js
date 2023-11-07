import { tokenInstance } from './axiosInstance';

export const getCareList = async () => {
  try {
    const response = await tokenInstance.get('post?limit=1000	&skip=Number');
    return response;
  } catch (err) {
    return null;
  }
};

export const getCareDetail = async id => {
  try {
    const response = await tokenInstance.get(`post/${id}`);

    return response;
  } catch (err) {
    return null;
  }
};
