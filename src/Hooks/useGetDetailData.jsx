import { getPostData } from 'Common/get-post-data';
import React, { useEffect, useState } from 'react';

const useGetDetailData = (setData, id) => {
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    try {
      setIsLoading(false);
      const response = await getPostData(id);
      setData(response);
      console.log(response);
      setIsLoading(true);
    } catch (error) {
      throw new Error('data load 실패');
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return isLoading;
};

export default useGetDetailData;
