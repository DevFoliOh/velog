import { useEffect } from 'react';
import { MenuApi } from 'lib';

export const useGetAllPosts = (page, setPostData, setLoading) => {
  const getData = async () => {
    try {
      setLoading(true);
      const response = await MenuApi.getAllPosts(page);
      setPostData(response.data.results);
      setLoading(false);
    } catch (error) {
      throw new Error('data load 실패');
    }
  };

  useEffect(() => {
    getData();
  }, []);
};
