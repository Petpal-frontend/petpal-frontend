import { tokenInstance } from './axiosInstance';

export const getCommentList = async id => {
  try {
    const response = await tokenInstance.get(`/post/${id}/comments`);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const uploadComment = async (id, content) => {
  try {
    const response = await tokenInstance.post(`/post/${id}/comments`, {
      comment: {
        content,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const deleteComment = async (id, commentId) => {
  try {
    const response = await tokenInstance.delete(
      `/post/${id}/comments/${commentId}`,
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const reportComment = async (id, commentId) => {
  try {
    const response = await tokenInstance.post(
      `/post/${id}/comments/${commentId}/report`,
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
