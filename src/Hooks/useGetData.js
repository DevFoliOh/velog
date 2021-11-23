import { useEffect, useState } from 'react';
import MenuApi from 'Common/api';

const useGetData = (setPostData, setComment, id) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (id) {
      getData(id);
    }
  }, []);

  const getData = async (id) => {
    try {
      setIsLoading(true);
      const postResponse = await MenuApi.getPostDetail(id);
      const commentResponse = await MenuApi.getCommentData(id);
      setPostData(postResponse.data);
      setComment(commentResponse.data.results);
      setIsLoading(false);
    } catch (error) {
      throw new Error('data load 실패');
    }
  };

  return isLoading;
};

export default useGetData;
