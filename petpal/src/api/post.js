import { tokenInstance } from './axiosInstance';

/* 내 게시글 가져오기 */
export const getMyPost = async accountname => {
  const response = await tokenInstance.get(
    `/post/${accountname}/userpost/?limit=Number&skip=Number`,
  );
  return response;
};

/* 게시글 업로드하기 */
export const uploadPost = async post => {
  const response = await tokenInstance.post(`/post`, post);
  return response;
};

/* 게시글 삭제하기 */
export const deletePost = async postId => {
  const response = await tokenInstance.delete(`/post/${postId}`);
  return response;
};

/* 게시글 수정하기 */
export const updatePost = async (postId, { content, image }) => {
  const response = await tokenInstance.put(`/post/${postId}`, {
    post: {
      content,
      image,
    },
  });
  return response;
};
