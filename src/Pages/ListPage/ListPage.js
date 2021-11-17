import React, { useState, useEffect } from 'react';
import { Wrapper, Header, Section, CardList } from './Style';

const ListPage = (props) => {
  const [data, setData] = useState(null);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      console.log('load');
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      console.log(data);
      setProfile(data);
    }, 2000);
  }, []);

  return (
    <Wrapper>
      <Header>velog</Header>
      {/*<Section>
        {data.map((el) => (
          <Card data={el} />
        ))}
      </Section> */}

      <Section>
        <CardList>
          {profile &&
            profile.map((userInfo, id) => {
              return (
                <Card
                  userInfo={userInfo}
                  className="profile"
                  key={userInfo.id}
                />
              );
            })}

          {!profile && <SkeletonProfile />}
        </CardList>
      </Section>
    </Wrapper>
  );
};

export default ListPage;
