import { useEffect, useCallback } from 'react';
import MenuApi from 'Common/api';
<<<<<<< HEAD

const useGetListData = (page, setPostData) => {
  const [isLoading, setIsLoading] = useState(false);
=======
>>>>>>> 7ac8e6255b47c6573100ef0630547e78bc845a07

const useGetListData = (page, setPostData, setLoading) => {
  const getData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await MenuApi.getAllPosts(page);
      setPostData(response.data.results);
      setLoading(false);
    } catch (error) {
      throw new Error('data load 실패');
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);
};

export default useGetListData;
