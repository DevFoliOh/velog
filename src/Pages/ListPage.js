import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import MenuApi from 'lib/api';
import useGetListData from 'Hooks/useGetAllPosts';
import { Header, Card, Navbar, ScrollToTop, ListSkeleton } from 'Components';
import { Grid } from 'Common';

export const ListPage = ({ history }) => {
  const [postData, setPostData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [location, setLocation] = useState('');
  const [ref, inView] = useInView();
  const [page, setPage] = useState(2);
  const [loading, setLoading] = useState(false);
  const [sort, setSort] = useState(false);

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

  useEffect(() => {
    setSortedData(
      postData.sort((a, b) => {
        const prevDate = a.createdAt;
        const nextDate = b.createdAt;
        return prevDate > nextDate ? -1 : prevDate < nextDate ? 1 : 0;
      }),
    );
  }, [sort]);

  return (
    <Grid bg="#f8f9fa">
      <Header location={location} />

      <Container>
        <Navbar sort={sort} setSort={setSort} setPostData={setPostData} />
        {loading ? (
          <ListSkeleton />
        ) : sort ? (
          <Grid width="100%" margin="2rem auto" bg="#f8f9fa">
            <Grid flex="1 1 0%">
              <Grid is_flex flexWrap="wrap">
                {sortedData &&
                  sortedData.map((post) => {
                    return (
                      <div ref={ref} key={post.id}>
                        <Card post={post} />
                      </div>
                    );
                  })}
              </Grid>
            </Grid>
          </Grid>
        ) : (
          <Grid width="100%" margin="2rem auto" bg="#f8f9fa">
            <Grid flex="1 1 0%">
              <Grid is_flex flexWrap="wrap">
                {postData &&
                  postData.map((post) => {
                    return (
                      <div ref={ref} key={post.id}>
                        <Card post={post} />
                      </div>
                    );
                  })}
              </Grid>
            </Grid>
          </Grid>
        )}
      </Container>
      <ScrollToTop />
    </Grid>
  );
};

const Container = styled.div`
  width: 100%;
  margin: 0 auto 1rem;
  background: #f8f9fa;

  @media (max-width: 1919px) {
    width: 1376px;
  }
  @media (max-width: 1440px) {
    width: 1024px;
    margin: 0 auto;
  }
  @media (max-width: 1056px) {
    width: calc(100% - 2rem);
  }
  @media (max-width: 767px) {
    width: calc(100% - 2rem);
  }
`;
