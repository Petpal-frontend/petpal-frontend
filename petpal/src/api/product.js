import { tokenInstance } from './axiosInstance';

/* 상품 등록하기 */
export const uploadProduct = async product => {
  const response = await tokenInstance.post(`/product`, product);
  return response;
};
/* user의 상품 리스트 가져오기 */
export const getMyProduct = async accountname => {
  const response = await tokenInstance.get(`/product/${accountname}`);
  return response;
};

/* 상세 상품 가져오기*/
export const getProductDetail = async productId => {
  const response = await tokenInstance.get(`/product/detail/${productId}`);
  return response;
};

/* 상품 삭제하기 */
export const deleteProduct = async productId => {
  const response = await tokenInstance.delete(`/product/${productId}`);
  return response;
};
