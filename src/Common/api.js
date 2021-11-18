import axios from 'axios';

export const getPostData = async (id) => {
  try {
    const response = await axios(
      `https://limitless-sierra-67996.herokuapp.com/v1/posts/6196101e0b7d21002cce55a0`,
    );
    console.log(response);
    return response;
  } catch (error) {
    throw new Error('data load 실패');
  }
};

export const getCommentData = async (id) => {
  try {
    const response = await axios({
      method: 'get',
      url: 'https://limitless-sierra-67996.herokuapp.com/v1/comments',
      params: {
        postId: '6196101e0b7d21002cce55a0',
      },
    });
    return response;
  } catch (error) {
    throw new Error('data load 실패');
  }
};

export const postCommentData = async (text) => {
  try {
    await axios({
      method: 'post',
      url: `https://limitless-sierra-67996.herokuapp.com/v1/comments`,
      data: {
        postId: '6196101e0b7d21002cce55a0',
        body: text,
      },
    });
    window.location.reload();
  } catch (error) {
    throw new Error('data post 실패');
  }
};
