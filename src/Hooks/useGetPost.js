import { useEffect } from 'react';
import { MenuApi } from 'lib';

export const useGetPost = (setPostData, setComment, setLoading, id) => {
  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const postResponse = await MenuApi.getPostDetail(id);
        const commentResponse = await MenuApi.getCommentData(id);
        setPostData(postResponse.data);
        setComment(commentResponse.data.results);
        setLoading(false);
      } catch (error) {
        throw new Error('data load 실패');
      }
    }
    getData();
  }, [setPostData, setComment, setLoading, id]);
};
