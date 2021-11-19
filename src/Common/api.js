import axios from 'axios';

const BASE_URL = 'https://limitless-sierra-67996.herokuapp.com/v1';

const HTTP_METHOD = {
  GETAll() {
    return {
      method: 'GET',
      url: `${BASE_URL}/posts`,
    };
  },

  GETCOMMENT(id) {
    return {
      method: 'GET',
      url: `${BASE_URL}/comments`,
      params: {
        postId: id,
      },
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

  CREATECOMMENT(id, data) {
    return {
      method: 'POST',
      url: `${BASE_URL}/comments`,
      data: {
        postId: id,
        body: data,
      },
    };
  },

  DELETECOMMENT(id) {
    return {
      method: 'DELETE',
      url: `${BASE_URL}/comments/${id}`,
    };
  },
};

const request = async (option) => {
  const response = await axios(option);
  let responseOK =
    (response && response.statusText === 'OK' && response.status === 200) ||
    (response &&
      response.statusText === 'Created' &&
      response.status === 201) ||
    (response &&
      response.statusText === 'No Content' &&
      response.status === 204);

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
    return request(HTTP_METHOD.GETDETAIL(id));
  },

  getCommentData(id) {
    return request(HTTP_METHOD.GETCOMMENT(id));
  },

  createPost(data) {
    return request(HTTP_METHOD.CREATE({ data }));
  },

  createComment(id, data) {
    return request(HTTP_METHOD.CREATECOMMENT(id, data));
  },

  deleteComment(id) {
    return request(HTTP_METHOD.DELETECOMMENT(id));
  },
};

export default MenuApi;
