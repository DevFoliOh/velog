import React, { useState, useEffect } from 'react';
import { style } from './ListPageStyle';
import Header from 'Components/Header/Header';
import Card from 'Components/Card/Card';
import useGetListData from 'Hooks/useGetListData';
import { useInView } from 'react-intersection-observer';

const ListPage = ({ history }) => {
  const [postData, setPostData] = useState(null);
  const [location, setLocation] = useState('');
  const [ref, inView] = useInView();

  useGetListData(setPostData);
  console.log(postData);

  useEffect(() => {
    setLocation(history.location.pathname);
  }, []);

  return (
    <Wrapper ref={ref}>
      <Header location={location} />
      <Container>
        <CardList>
          {postData &&
            postData.map((posts) => {
              return <Card posts={posts} key={posts.id} />;
            })}
        </CardList>
      </Container>
    </Wrapper>
  );
};

export default ListPage;

const { Wrapper, Container, CardList } = style;
