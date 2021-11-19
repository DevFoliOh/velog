import axios from 'axios';

const BASE_URL = 'https://limitless-sierra-67996.herokuapp.com/v1';

const HTTP_METHOD = {
  GETAll(page) {
    return {
      method: 'GET',
      url: `${BASE_URL}/posts`,
      params: { page: page },
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

  EDIT(post, id) {
    return {
      method: 'PATCH',
      url: `${BASE_URL}/posts/6195286c35f525002b03100d`,
      data: { body: post },
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
  getAllPosts(page) {
    return request(HTTP_METHOD.GETAll(page));
  },

  getPostDetail(id) {
    return request(HTTP_METHOD.GETDETAIL({ id }));
  },

  createPost(data) {
    return request(HTTP_METHOD.CREATE({ data }));
  },

  editPost(post, id) {
    return request(HTTP_METHOD.EDIT(post, id));
  },
};

export default MenuApi;
