import React, { useState, useEffect, useCallback } from 'react';
import { style } from './ListPageStyle';
import Header from 'Components/Header/Header';
import Card from 'Components/Card/Card';
import useGetListData from 'Hooks/useGetListData';
import { useInView } from 'react-intersection-observer';
import MenuApi from 'Common/api';
import ListSkeleton from 'Components/ListSkeleton/ListSkeleton';
import Button from 'Components/Button/Button';

const ListPage = ({ history }) => {
  const [postData, setPostData] = useState(null);
  const [sortedData, setSortedData] = useState(null);
  const [location, setLocation] = useState('');
  const [ref, inView] = useInView();
  const [page, setPage] = useState(2);
  const [loading, setLoading] = useState(false);

  useGetListData(1, setPostData, setLoading);

  console.log(loading);

  useEffect(() => {
    if (inView) {
      MenuApi.getAllPosts(page).then((res) => {
        console.log(res);
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
              postData.map((posts) => {
                return (
                  <div ref={ref} key={posts.id}>
                    <Card posts={posts} />
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
