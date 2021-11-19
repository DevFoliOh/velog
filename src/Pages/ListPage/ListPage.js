import React, { useState, useEffect } from 'react';
import { style } from './ListPageStyle';
import Header from 'Components/Header/Header';
import Card from 'Components/Card/Card';
import useGetListData from 'Hooks/useGetListData';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import MenuApi from 'Common/api';

const ListPage = () => {
  const [postData, setPostData] = useState(null);
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

  return (
    <Wrapper>
      <Container>
        <Header />
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
      </Container>
    </Wrapper>
  );
};

export default ListPage;

const { Wrapper, Container, CardList } = style;
