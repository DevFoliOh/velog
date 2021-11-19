import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import MenuApi from 'Common/api';

const useGetDetailData = (setData, id) => {
  const [isLoading, setIsLoading] = useState(false);
  const [postId, setPostId] = useState();
  const Id = useSelector((state) => state.getCardIdReducer.cardId);

  useEffect(() => {
    Id && setPostId(Id);
  }, [Id]);

  const getData = async () => {
    try {
      setIsLoading(true);
      const response = await MenuApi.getPostDetail(postId);
      setData(response);
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

export default useGetDetailData;
