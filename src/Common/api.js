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
};

const request = async (option) => {
  const response = await axios(option);
  console.log(option);
  console.log(response);
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
};

export default MenuApi;

// export const getPostData = async (id) => {
//   try {
//     const response = await axios(
//       `https://limitless-sierra-67996.herokuapp.com/v1/posts/6196101e0b7d21002cce55a0`,
//     );
//     console.log(response);
//     return response;
//   } catch (error) {
//     throw new Error('data load 실패');
//   }
// };

// export const getCommentData = async (id) => {
//   try {
//     const response = await axios({
//       method: 'get',
//       url: 'https://limitless-sierra-67996.herokuapp.com/v1/comments',
//       params: {
//         postId: '6196101e0b7d21002cce55a0',
//       },
//     });
//     return response;
//   } catch (error) {
//     throw new Error('data load 실패');
//   }
// };

// export const postCommentData = async (id, text) => {
//   try {
//     await axios({
//       method: 'post',
//       url: `https://limitless-sierra-67996.herokuapp.com/v1/comments`,
//       data: {
//         postId: '6196101e0b7d21002cce55a0',
//         body: text,
//       },
//     });
//     window.location.reload();
//   } catch (error) {
//     throw new Error('data post 실패');
//   }
// };
