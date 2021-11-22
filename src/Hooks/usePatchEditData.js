import { useState, useEffect, useCallback } from 'react';
import MenuApi from 'Common/api';
import { useSelector } from 'react-redux';

const usePatchEditData = (post, setPost) => {
  const [isLoading, setIsLoading] = useState(false);
  const Id = useSelector((state) => state.getCardIdReducer.card.id);

  const getData = useCallback(async () => {
    try {
      setIsLoading(true);

      // axios로 수정할 게시글을
      const newPost = await MenuApi.editPost(post, Id);
      console.log(newPost);
      if (!newPost) throw Error('No edited data !');

      // setPosts((posts) => {
      //   const targetIndex = posts.findIndex((post) => post.id === Id);
      //   if (targetIndex < 0) return posts;

      //   const newPosts = [...posts];
      //   newPosts.splice(targetIndex, 1, newPost);

      //   return newPosts;
      // });
      // setIsLoading(false);
    } catch (error) {
      console.log(error);
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

export default usePatchEditData;
