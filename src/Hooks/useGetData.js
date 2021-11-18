import { getCommentData, getPostData } from 'Common/api';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const useGetData = (setPostData, setComment) => {
  const [isLoading, setIsLoading] = useState(false);
  const [postId, setPostId] = useState();
  const Id = useSelector((state) => state.getCardIdReducer.cardId);

  useEffect(() => {
    Id && setPostId(Id);
  }, [Id]);

  const getData = async () => {
    try {
      setIsLoading(true);
      const postResponse = await getPostData(postId);
      const commentResponse = await getCommentData(postId);
      setPostData(postResponse.data);
      setComment(commentResponse.data.results);
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

export default useGetData;
