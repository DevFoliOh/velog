import { useState, useEffect, useCallback } from 'react';
import MenuApi from 'Common/api';
import { useSelector } from 'react-redux';

const usePatchEditData = (post, setPosts) => {
  // post는 수정된 게시글, setPosts는 전체 게시글 배열을 수정하기 위한 세터
  const [isLoading, setIsLoading] = useState(false);
  const Id = useSelector((state) => state.getCardIdReducer.card.id);

  const getData = useCallback(async () => {
    try {
      setIsLoading(true);

      const newPost = await MenuApi.patchPost(Id, post);
      console.log(newPost);
      if (!newPost) throw Error('No edited data !');

      setPosts((posts) => {
        const targetIndex = posts.findIndex((post) => post.id === Id);
        if (targetIndex < 0) return posts;

        const newPosts = [...posts];
        newPosts.splice(targetIndex, 1, newPost);

        return newPosts;
      });
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      throw new Error('data load 실패');
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return isLoading;
};

export default usePatchEditData;
