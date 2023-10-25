import axios from 'axios';
// import setTokenInterceptors from './interseptor';

export const URL = 'https://api.mandarin.weniv.co.kr/';

// 기본 인스턴스
export const instance = axios.create({
  baseURL: URL,
  headers: { 'Content-Type': 'application/json' },
});

// 이미지 인스턴스
export const imgInstance = axios.create({
  baseURL: URL,
  headers: { 'Content-type': 'multipart/form-data' },
});

// 토큰이 포함된 인스턴스 => 프로필, 팔로잉, 검색, 게시글 작성, 피드, 내 게시글 목록, 게시글(상세, 수정, 삭제, 신고, 전체보기), 좋아요, 댓글, 상품 사용 등에 사용됨
export const tokenInstance = axios.create({
  baseURL: URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json',
  },
});

tokenInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (config.headers.Authorization.includes('null')) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }
    console.log('intercepter2', config);
    return config;
  },
  error => {
    console.log(error.message);
    return Promise.reject(error);
  },
);

// setTokenInterceptors(tokenInstance);
