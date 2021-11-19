import React, { useState, useEffect } from 'react';
import { style } from './ListPageStyle';
import Header from 'Components/Header/Header';
import Card from 'Components/Card/Card';
import useGetListData from 'Hooks/useGetListData';
import { useInView } from 'react-intersection-observer';

const ListPage = () => {
  const [postData, setPostData] = useState(null);
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const LIMIT = 10;

  let result = useGetListData(postData, setPostData, LIMIT);

  useEffect(() => {
    setLoading(result);
  }, [page]);

  console.log(postData);

  useEffect(() => {
    if (inView && !loading) {
      setPage((prevState) => prevState + 1);
    }
  }, [inView, loading]);

  return (
    <Wrapper>
      <Header />
      <Container>
        <CardList>
          {postData &&
            postData.map((posts, idx) => {
              return (
                <React.Fragment key={idx}>
                  {postData.length === LIMIT ? (
                    <Card posts={posts} key={posts.id} />
                  ) : (
                    <Card posts={posts} key={posts.id} />
                  )}
                </React.Fragment>
              );
            })}
        </CardList>
      </Container>
    </Wrapper>
  );
};

export default ListPage;

const { Wrapper, Container, CardList } = style;
