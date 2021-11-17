import { getPostData } from 'Common/get-post-data';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const useGetDetailData = (setData, id) => {
  const [isLoading, setIsLoading] = useState(false);
  const [postId, setPostId] = useState();
  const card = useSelector((state) => state.getCardReducer.card);
  console.log(card);

  useEffect(() => {
    card && setPostId(card.id);
  }, [card]);

  const getData = async () => {
    try {
      setIsLoading(false);
      const response = await getPostData(postId);
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
