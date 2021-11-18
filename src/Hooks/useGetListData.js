import { useState, useEffect } from 'react';
import MenuApi from 'Common/api';

const useGetListData = (setPostData) => {
  const [isLoading, setIsLoading] = useState(false);
  console.log(isLoading);

  const getData = async () => {
    try {
      setIsLoading(true);
      const response = await MenuApi.getAllPosts();
      setPostData(response.data.results);
      setIsLoading(false);
    } catch (error) {
      throw new Error('data load 실패');
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return isLoading;
};

export default useGetListData;
