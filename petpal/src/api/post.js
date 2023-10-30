import { tokenInstance } from './axiosInstance';

/* 게시글 가져오기 */
export const getMyPost = async accountname => {
  const response = await tokenInstance.get(
    `/post/${accountname}/userpost/?limit=Number&skip=Number`,
  );
  return response;
};
