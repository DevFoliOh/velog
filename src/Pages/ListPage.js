import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import MenuApi from 'lib/api';
import useGetListData from 'Hooks/useGetListData';
import Header from 'Components/Header/Header';
import Card from 'Components/Card';
import Navbar from 'Components/Navbar';
import ListSkeleton from 'Components/ListSkeleton';
import ScrollToTop from 'Components/ScrollToTop';
import InfinityScroll from 'Components/InfinityScroll';

const ListPage = ({ history }) => {
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
        console.log(prevDate);
        return prevDate > nextDate ? -1 : prevDate < nextDate ? 1 : 0;
      }),
    );
  }, [sort]);

  return (
    <Wrapper>
      <Header location={location} />

      <Container>
        <Navbar sort={sort} setSort={setSort} setPostData={setPostData} />

        {loading ? (
          <ListSkeleton />
        ) : sort ? (
          <CardList>
            <Main>
              <CardWrap>
                {/* <InfinityScroll callNext={scroll} is_next={inView}> */}
                {sortedData &&
                  sortedData.map((post) => {
                    return (
                      <div ref={ref} key={post.id}>
                        <Card post={post} />
                      </div>
                    );
                  })}
                {/* </InfinityScroll> */}
              </CardWrap>
            </Main>
          </CardList>
        ) : (
          <CardList>
            <Main>
              <CardWrap>
                {/* <InfinityScroll callNext={scroll} is_next={inView}> */}
                {postData &&
                  postData.map((post) => {
                    return (
                      <div ref={ref} key={post.id}>
                        <Card post={post} />
                      </div>
                    );
                  })}
                {/* </InfinityScroll> */}
              </CardWrap>
            </Main>
          </CardList>
        )}
      </Container>
      <ScrollToTop />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing: inherit;
  display: block;
  background: #f8f9fa;
`;

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

const CardList = styled.div`
  width: 100%;
  margin: 2rem auto;
  background: #f8f9fa;
`;

const Main = styled.div`
  flex: 1 1 0%;
`;

const CardWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* justify-content: center; */
`;

export default ListPage;
