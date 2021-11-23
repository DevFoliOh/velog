import axios from 'axios';

const BASE_URL = 'https://limitless-sierra-67996.herokuapp.com/v1';

const HTTP_METHOD = {
  GETAll(page) {
    return {
      method: 'GET',
      url: `${BASE_URL}/posts`,
      params: {
        page: page,
        // createdAt: 'asc',
      },
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

  DELETEDETAIL(id) {
    return {
      method: 'delete',
      url: `${BASE_URL}/posts/${id}`,
    };
  },

  CREATEPOST(title, content, url, hashTagArr) {
    return {
      method: 'POST',
      url: `${BASE_URL}/posts`,
      data: {
        title: title,
        body: content,
        thumbnail: url,
        tags: hashTagArr,
      },
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

  PATCH(id, title, content, url, hashTagArr) {
    return {
      method: 'PATCH',
      url: `${BASE_URL}/posts/${id}`,
      data: {
        id: id,
        title: title,
        body: content,
        tags: hashTagArr,
        thumbnail: url,
      },
    };
  },

  PATCHCOMMENT(id, data) {
    return {
      method: 'PATCH',
      url: `${BASE_URL}/comments/${id}`,
      data: {
        body: data,
      },
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
  getAllPosts(page) {
    return request(HTTP_METHOD.GETAll(page));
  },

  getPostDetail(id) {
    return request(HTTP_METHOD.GETDETAIL(id));
  },

  deleteDetail(id) {
    return request(HTTP_METHOD.DELETEDETAIL(id));
  },

  getCommentData(id) {
    return request(HTTP_METHOD.GETCOMMENT(id));
  },

  createPost(title, content, url, hashTagArr) {
    return request(HTTP_METHOD.CREATEPOST(title, content, url, hashTagArr));
  },

  createComment(id, data) {
    return request(HTTP_METHOD.CREATECOMMENT(id, data));
  },

  deleteComment(id) {
    return request(HTTP_METHOD.DELETECOMMENT(id));
  },

  patchPost(id, title, content, url, hashTagArr) {
    return request(HTTP_METHOD.PATCH(id, title, content, url, hashTagArr));
  },

  patchComment(id, data) {
    return request(HTTP_METHOD.PATCHCOMMENT(id, data));
  },
};

export default MenuApi;
