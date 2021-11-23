import { useEffect } from 'react';
import MenuApi from 'Common/api';

const useGetListData = (page, setPostData, setLoading) => {
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

export default useGetListData;
