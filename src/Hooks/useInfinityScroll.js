import { useEffect } from 'react';
import { MenuApi } from 'lib';

export const useInfinityScroll = (
  postData,
  setPostData,
  page,
  setPage,
  inView,
) => {
  useEffect(() => {
    if (inView) {
      MenuApi.getAllPosts(page).then((res) => {
        if (!res.data) {
          return;
        } else {
          setPostData(() => postData.concat(res.data.results));
          setPage((prevState) => prevState + 1);
        }
      });
    }
  }, [inView, page, postData, setPage, setPostData]);
};
