import { tokenInstance } from './axiosInstance';

export const getWalkList = async () => {
  try {
    const response = await tokenInstance.get('post?limit=1000	&skip=Number');

    return response;
  } catch (err) {
    return null;
  }
};

export const getWalkDetail = async id => {
  try {
    const response = await tokenInstance.get(`post/${id}`);
    return response;
  } catch (err) {
    return null;
  }
};
