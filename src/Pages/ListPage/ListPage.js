import React, { useState, useEffect } from 'react';
import { style } from './ListPageStyle';
import Header from 'Components/Header/Header';
import Card from 'Components/Card/Card';
import useGetListData from 'Hooks/useGetListData';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import MenuApi from 'Common/api';
import ListSkeleton from 'Components/ListSkeleton/ListSkeleton';

const ListPage = ({ history }) => {
  const [postData, setPostData] = useState(null);
  const [location, setLocation] = useState('');
  const [ref, inView] = useInView();
  const [page, setPage] = useState(2);
  const [loading, setLoading] = useState(false);

  let result = useGetListData(1, setPostData);

  useEffect(() => {
    setLoading(result);
  }, [result]);

  useEffect(() => {
    if (inView && !loading) {
      setPage((prevState) => prevState + 1);
      MenuApi.getAllPosts(page).then((res) => {
        if (!res.data) {
          return;
        } else {
          setPostData((prevState) => [...prevState, ...res.data.results]);
        }
      });
    }
  }, [inView, loading]);

  useEffect(() => {
    setLocation(history.location.pathname);
  }, []);

  return (
<<<<<<< HEAD
    <Wrapper>
=======
    <Wrapper ref={ref}>
      <Header location={location} />
>>>>>>> ce548ad673fd344127be95d0f2b0d7372b77c85f
      <Container>
        <Header />
        {loading ? (
          <ListSkeleton />
        ) : (
          <CardList>
            {postData &&
              postData.map((posts) => {
                return (
                  <div>
                    <Card posts={posts} key={posts.id} />
                    <div ref={ref}></div>
                  </div>
                );
              })}
          </CardList>
        )}
      </Container>
    </Wrapper>
  );
};

export default ListPage;

const { Wrapper, Container, CardList } = style;
