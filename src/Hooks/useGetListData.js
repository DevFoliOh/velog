import { useState, useEffect } from 'react';
import { getListData } from 'Common/get-post-data';
import MenuApi from 'Common/api';

const useGetListData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [postData, setPostData] = useState(null);

  const getData = async () => {
    try {
      setIsLoading(true);
      const response = await MenuApi.getAllPosts();
      setPostData(response);
      setIsLoading(false);
    } catch (error) {
      throw new Error('data load 실패');
    }
  };

  useEffect(() => {
    getData();
  }, []);
};

export default useGetListData;
