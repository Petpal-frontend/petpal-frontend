import { instance } from './axiosInstance';

export const postLogin = async userData => {
  const response = await instance.post(`/user/login`, userData);
  return response.data;
};

// import { instance } from './axiosInstance';

// export const postLogin = async (email, password) => {
//   const reqUrl = '/user/login';
//   const body = {
//     user: {
//       email: email,
//       password: password,
//     },
//   };
//   try {
//     const response = await instance.post(reqUrl, body);
//     return response.data;
//   } catch (error) {
//     console.error('Request error', error);
//     throw error;
//   }
// };
