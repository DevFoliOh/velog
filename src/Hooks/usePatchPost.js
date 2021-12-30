import { useState, useEffect, useCallback } from 'react';
import { MenuApi } from 'lib';
import { useSelector } from 'react-redux';

export const usePatchPost = (post, setPosts) => {
  const [isLoading, setIsLoading] = useState(false);
  const Id = useSelector((state) => state.getCardIdReducer.card.id);

  const getData = useCallback(async () => {
    try {
      setIsLoading(true);
      const newPost = await MenuApi.patchPost(Id, post);
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
  }, [Id, post, setPosts]);

  useEffect(() => {
    getData();
  }, [getData]);

  return isLoading;
};
