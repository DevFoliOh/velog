import { useState, useEffect, useCallback } from 'react';
import MenuApi from 'Common/api';
import { useInView } from 'react-intersection-observer';

const useGetListData = (postData, setPostData, LIMIT) => {
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();
  // const LIMIT = 10;

  const getData = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await MenuApi.getAllPosts(LIMIT, page);
      console.log(response);
      setPostData(response.data.results);
      setIsLoading(false);
    } catch (error) {
      throw new Error('data load 실패');
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  // useEffect(() => {
  //   // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
  //   if (inView && !isLoading) {
  //     setPage((prevState) => prevState + 1);
  //   }
  // }, [inView, isLoading]);

  return isLoading;
};

export default useGetListData;
