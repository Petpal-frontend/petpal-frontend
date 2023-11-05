import { tokenInstance } from './axiosInstance';

/* 유저 검색 */
export const getUserList = async keyword => {
  const response = await tokenInstance.get(
    `/user/searchuser/?keyword=${keyword}`,
  );
  return response.data;
};

/* 전체 유저 목록 */
export const getAllUserList = async () => {
  const response = await tokenInstance.get(`/user/searchuser`);
  return response.data;
};
