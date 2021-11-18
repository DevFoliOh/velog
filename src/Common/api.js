import axios from 'axios';

const BASE_URL = 'https://limitless-sierra-67996.herokuapp.com/v1';

const HTTP_METHOD = {
  GETAll() {
    return {
      method: 'GET',
      url: `${BASE_URL}/posts`,
    };
  },

  GETDETAIL(id) {
    return {
      method: 'GET',
      url: `${BASE_URL}/posts/${id}`,
    };
  },

  CREATE(data) {
    return {
      method: 'POST',
      url: `${BASE_URL}/posts`,
      data: data,
    };
  },
};

const request = async (option) => {
  const response = await axios(option);
  let responseOK =
    response && response.status === 200 && response.statusText === 'OK';
  if (!responseOK) {
    throw new Error('data load 실패');
  }
  return response;
};

const MenuApi = {
  getAllPosts() {
    return request(HTTP_METHOD.GETAll());
  },

  getPostDetail(id) {
    return request(HTTP_METHOD.GETDETAIL({ id }));
  },

  createPost(data) {
    return request(HTTP_METHOD.CREATE(data));
  },
};

export default MenuApi;
