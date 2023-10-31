import { tokenInstance } from './axiosInstance';

/* 상품 리스트 가져오기 */
export const getProductList = async () => {
  const response = await tokenInstance.get(`/product?limit=10000`);
  return response.data;
};
