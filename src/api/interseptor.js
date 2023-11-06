export default function setTokenInterceptors(instance) {
  instance.interceptors.request.use(
    // 없는 경우에만 설정
    //   !instance.headers.Authorization
    //     ? (instance.headers = {
    //       ...instance.headers,
    //       Authorization: `Bearer ${localStorage.getItem('token')}`,
    //     })
    //     : null,
    // );
    function (instance) {
      // 요청 보내기 전에 실행
      // localStorage의 토큰 값 설정
      instance.headers.Authrozation = `Bearer ${localStorage.getItem('token')}`;
      return instance;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    },
  );
}
