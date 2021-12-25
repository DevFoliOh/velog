import React, { useState, useEffect } from 'react';
import { style } from './ListPageStyle';
import Header from 'Components/Header/Header';
import Card from 'Components/Card';
import Navbar from 'Components/Navbar';
import useGetListData from 'Hooks/useGetListData';
import { useInView } from 'react-intersection-observer';
import MenuApi from 'lib/api';
import ListSkeleton from 'Components/ListSkeleton/ListSkeleton';
import ScrollToTop from 'Components/ScrollToTop/ScrollToTop';

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
            {sortedData &&
              sortedData.map((post) => {
                return (
                  <div ref={ref} key={post.id}>
                    <Card post={post} />
                  </div>
                );
              })}
          </CardList>
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
