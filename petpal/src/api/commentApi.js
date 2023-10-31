import { tokenInstance } from './axiosInstance';

export const getCommentList = async id => {
  const response = await tokenInstance.get(`/post/${id}/comments`);
  return response;
};

export const wrtieComment = async id => {
  const response = await tokenInstance.post(`/post/${id}/comments`);
  return response;
};
