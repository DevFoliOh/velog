import axios from 'axios';
axios.defaults.baseURL = 'https://limitless-sierra-67996.herokuapp.com/v1';

export default {
  createPost(data) {
    return axios.post('/posts', data);
  },
};
