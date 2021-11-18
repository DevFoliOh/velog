import React, { useCallback, useState } from 'react';
import Header from 'Components/Header/Header';
import { style } from './DetailPageStyle';
import useGetDetailData from 'Hooks/useGetDetailData';
import Tag from 'Components/Tag/Tag';
import Comment from 'Components/Comment/Comment';
const DetailPage = () => {
  // const [detailData, setDetailData] = useState({});
  // const setData = useCallback((data) => {
  //   setDetailData(data);
  // }, []);

  // const loading = useGetDetailData(setData, id);
  return (
    <div>
      <Header></Header>
      <Main>
        <Title>Title</Title>
        <TagList>
          <Tag />
        </TagList>
        <Content>
          이런 식으로 태그가 가지고 있는 의미에 맞게 사용하는 것인데, 이런 점
          이외에도 CSS 스타일을 명시하는 태그를 사용하지 않는 것 또한 시맨틱
          마크업의 한 종류 입니다. 즉, 태그가 가지는 의미 자체가 스타일이라면
          이는 마크업 자체가 스타일을 갖는 것이기 때문에 시맨틱 마크업에
          적합하지 않습니다. 예를 들어보겠습니다, 효과를 부여하는 과 태그가
          있습니다. 둘은 동일하게 글자색을 진하게 하지만 태그의 경우는 그 자체가
          "blod"의 약어이기 때문에 태그 자체가 스타일을 가진다고 할 수 있습니다.
          하지만 의 경우는 "그 안의 내용이 다른 내용보다 더 가종되어야
          한다."라는 의미를 가지고 있기 때문에 시맨틱 마크업에 더 적합합니다.
          이런 식으로 태그가 가지고 있는 의미에 맞게 사용하는 것인데, 이런 점
          이외에도 CSS 스타일을 명시하는 태그를 사용하지 않는 것 또한 시맨틱
          마크업의 한 종류 입니다. 즉, 태그가 가지는 의미 자체가 스타일이라면
          이는 마크업 자체가 스타일을 갖는 것이기 때문에 시맨틱 마크업에
          적합하지 않습니다. 예를 들어보겠습니다, 효과를 부여하는 과 태그가
          있습니다. 둘은 동일하게 글자색을 진하게 하지만 태그의 경우는 그 자체가
          "blod"의 약어이기 때문에 태그 자체가 스타일을 가진다고 할 수 있습니다.
          하지만 의 경우는 "그 안의 내용이 다른 내용보다 더 가종되어야
          한다."라는 의미를 가지고 있기 때문에 시맨틱 마크업에 더 적합합니다.
        </Content>
        <UserContainer>
          <UserImg src="avatar.png" />
          <UserDescriptionWrap>
            <UserDescriptionTitle>User</UserDescriptionTitle>
            <UserDescriptionSubTitle>Front-end</UserDescriptionSubTitle>
          </UserDescriptionWrap>
        </UserContainer>
        <CommentContainer>
          <CommentCount>N개의 댓글</CommentCount>
          <CommentTextArea placeholder="댓글을 작성하세요"></CommentTextArea>
          <ButtonWraper>
            <Button>댓글 작성</Button>
          </ButtonWraper>
          <CommentList>
            <Comment></Comment>
          </CommentList>
        </CommentContainer>
      </Main>
    </div>
  );
};

export default DetailPage;

const {
  Main,
  Title,
  TagList,
  Content,
  CommentContainer,
  CommentCount,
  CommentTextArea,
  ButtonWraper,
  Button,
  CommentList,
  UserContainer,
  UserImg,
  UserDescriptionWrap,
  UserDescriptionTitle,
  UserDescriptionSubTitle,
  UserUnderLine,
} = style;
