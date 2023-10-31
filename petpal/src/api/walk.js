import { tokenInstance } from './axiosInstance';

export const getWalkList = async () => {
  try {
    const response = await tokenInstance.get(
      // 'post',
      'post',
      // GET /post?limit=Number&skip=Number
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
    await console.log(id, '~~~');
    const response = await tokenInstance.get(`post/${id}`);
    console.log(response);
    console.log(response.data.post);
		
    return response;
  } catch (err) {
    return null;
  }
};
