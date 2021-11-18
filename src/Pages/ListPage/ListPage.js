import React, { useState, useEffect } from 'react';
import { style } from './ListPageStyle';
import Card from 'Components/Card';
import axios from 'axios';

const ListPage = (props) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      await axios('https://jsonplaceholder.typicode.com/users')
        .then((res) => setData(res.data))
        .catch((error) => {
          console.log(error);
        });
    }, 1000);
  }, []);

  return (
    <Wrapper>
      <Header>velog</Header>

      <Container>
        <CardList>
          {data &&
            data.map((userInfo) => {
              return (
                <Card
                  userInfo={userInfo}
                  className="profile"
                  key={userInfo.id}
                />
              );
            })}
        </CardList>
      </Container>
    </Wrapper>
  );
};

export default ListPage;

const { Wrapper, Header, Container, CardList } = style;
