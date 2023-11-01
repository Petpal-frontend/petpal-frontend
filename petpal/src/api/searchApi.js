import { tokenInstance } from './axiosInstance';

/* 유저 검색 */
export const getUserList = async keyword => {
  const response = await tokenInstance.get(
    `/user/searchuser/?keyword=${keyword}`,
  );
  return response.data;
};
