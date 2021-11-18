import axios from 'axios';

export const getPostData = async (id) => {
  try {
    const response = await axios(
      `https://limitless-sierra-67996.herokuapp.com/v1/posts${id}`,
    );
    return response;
  } catch (error) {
    throw new Error('data load 실패');
  }
};
