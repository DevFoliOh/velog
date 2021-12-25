import React, { useState, useEffect } from 'react';
import { style } from './ListPageStyle';
import Header from 'Components/Header/Header';
import Card from 'Components/Card';
import useGetListData from 'Hooks/useGetListData';
import { useInView } from 'react-intersection-observer';
import MenuApi from 'lib/api';
import ListSkeleton from 'Components/ListSkeleton/ListSkeleton';
import ScrollToTop from 'Components/ScrollToTop/ScrollToTop';

const ListPage = ({ history }) => {
  const [postData, setPostData] = useState(null);
  const [location, setLocation] = useState('');
  const [ref, inView] = useInView();
  const [page, setPage] = useState(2);
  const [loading, setLoading] = useState(false);

  useGetListData(1, setPostData, setLoading);

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
  }, [inView]);

  useEffect(() => {
    setLocation(history.location.pathname);
  }, []);

  return (
    <Wrapper>
      <Header location={location} />
      <Container>
        {loading ? (
          <ListSkeleton />
        ) : (
          <CardList>
            {postData &&
              postData.map((post) => {
                return (
                  <div ref={ref} key={post.id}>
                    <Card post={post} />
                  </div>
                );
              })}
          </CardList>
        )}
      </Container>
      <ScrollToTop />
    </Wrapper>
  );
};

export default ListPage;

const { Wrapper, Container, CardList } = style;
