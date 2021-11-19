import axios from 'axios';

export const getListData = async () => {
  try {
    const response = await axios(
      'https://limitless-sierra-67996.herokuapp.com/v1/posts',
    );
    return response;
  } catch (error) {
    throw new Error('data load 실패');
  }
};
