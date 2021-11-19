import React, { useCallback, useEffect, useRef, useState } from 'react';
import Header from 'Components/Header/Header';
import { style } from './DetailPageStyle';

import Tag from 'Components/Tag/Tag';
import Comment from 'Components/Comment/Comment';
import parse from 'html-react-parser';
import MenuApi from 'Common/api';
import { useSelector } from 'react-redux';
import useGetData from 'Hooks/useGetData';

const DetailPage = () => {
  const [detailData, setDetailData] = useState({
    tags: [],
    title: '',
    body: '',
    createdAt: '',
    updatedAt: '',
    id: '',
  });
  const [commentData, setCommentData] = useState([]);
  const [tagArr, setTagArr] = useState([]);

  const textRef = useRef();

  const id = useSelector((state) => state.getCardIdReducer.cardId);

  const setPostData = useCallback((data) => {
    setDetailData(data);
  }, []);

  const setComment = useCallback((data) => {
    setCommentData(data);
  }, []);

  const loading = useGetData(setPostData, setComment, id);

  const onTextSubmit = (event) => {
    event.preventDefault();
    const text = textRef.current.value;
    MenuApi.createComment(id, text);
  };

  useEffect(() => {
    detailData && setTagArr(detailData.tags);
  }, [detailData]);

  return (
    <div>
      <Header></Header>
      <Main>
        <Title>{detailData.title}</Title>
        <TagList>
          {tagArr &&
            tagArr.map((tagContent) => <Tag tagContent={tagContent} />)}
        </TagList>
        <Content
          dangerouslySetInnerHTML={{ __html: parse(detailData.body) }}
        ></Content>
        <UserContainer>
          <UserImg src="avatar.png" />
          <UserDescriptionWrap>
            <UserDescriptionTitle>User</UserDescriptionTitle>
            <UserDescriptionSubTitle>Front-end</UserDescriptionSubTitle>
          </UserDescriptionWrap>
        </UserContainer>
        <CommentContainer>
          <CommentCount>{`${commentData.length}개의 댓글`}</CommentCount>
          <form onSubmit={onTextSubmit}>
            <CommentTextArea
              placeholder="댓글을 작성하세요"
              ref={textRef}
            ></CommentTextArea>
            <ButtonWraper>
              <Button>댓글 작성</Button>
            </ButtonWraper>
          </form>
          <CommentList>
            {commentData.map((comment) => (
              <Comment comment={comment} />
            ))}
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
} = style;
