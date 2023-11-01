import { tokenInstance } from './axiosInstance';

export const getCommentList = async id => {
  const response = await tokenInstance.get(`/post/${id}/comments`);
  return response;
};

export const writeComment = async (id, content) => {
  console.log('dfddfdfdfdf', id, content);
  const response = await tokenInstance.post(`/post/${id}/comments`, {
    comment: {
      content,
    },
  });
  return response;
};
