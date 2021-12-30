import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { useGetAllPosts, useInfinityScroll } from 'Hooks';
import { Grid } from 'Common';
import { Header, Card, Navbar, ScrollToTop, ListSkeleton } from 'Components';

export const ListPage = ({ history }) => {
  const [loading, setLoading] = useState(false);
  const [postData, setPostData] = useState([]);
  const [page, setPage] = useState(2);
  const [location, setLocation] = useState('');
  const [ref, inView] = useInView();

  useGetAllPosts(1, setPostData, setLoading);
  useInfinityScroll(postData, setPostData, page, setPage, inView);

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

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #f8f9fa;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 2rem;
  width: 1728px;
  margin-left: auto;
  margin-right: auto;
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

const CardList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: left;
  background: #f8f9fa;
`;
