import { tokenInstance } from './axiosInstance';

/* 상품 등록하기 */
export const uploadProduct = async product => {
  const response = await tokenInstance.post(`/product`, product);
  return response;
};
