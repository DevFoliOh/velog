import { useState, useEffect, useCallback } from 'react';
import MenuApi from 'Common/api';
import { useInView } from 'react-intersection-observer';

const useGetListData = (page, setPostData, setLoading) => {
  const getData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await MenuApi.getAllPosts(page);
      setPostData(response.data.results);
    } catch (error) {
      throw new Error('data load 실패');
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);
};

export default useGetListData;
