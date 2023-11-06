import { tokenInstance } from './axiosInstance';

export const getWalkList = async () => {
  try {
    const response = await tokenInstance.get(
      // 'post',
      'post?limit=1000	&skip=Number',
    );
    // let retResponse = { posts: [], data: 0 };
    // retResponse.posts = response.posts.filter(
    //   post => post.author.username.split('petpal_').length === 2,
    // );
    return response;
  } catch (err) {
    return null;
  }
};

export const getWalkDetail = async id => {
  try {
    const response = await tokenInstance.get(`post/${id}`);
    // console.log(response);
    // console.log(response.data.post);

    return response;
  } catch (err) {
    return null;
  }
};
