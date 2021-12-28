import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Header, Tag, PostShare, Modal, DetailSkeleton } from 'Components';
import { Grid, Text, Image } from 'Common';
import { MenuApi, formatDate } from 'lib';
import CommentView from 'Components/Comment/CommentView';
import parse from 'html-react-parser';
import { useSelector } from 'react-redux';
import { useGetPost } from 'Hooks';
import { debounce } from 'lodash';
import CommentWrite from 'Components/Comment/CommentWrite';
import avatar from 'Assets/avatar.png';

export const DetailPage = ({ history }) => {
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
  const [isFixedShare, setIsFixedshare] = useState();
  const [command, setCommand] = useState('');
  const [showModal, setShowModal] = useState(false);
  const mainRef = useRef();

  const card = useSelector((state) => state.getCardReducer.card);

  const onToggleModal = useCallback((text) => {
    setShowModal(false);
    if (text) {
      setCommand(text);
      setShowModal(true);
    }
  }, []);

  const setPostData = useCallback((data) => {
    setDetailData(data);
  }, []);

  const setComment = useCallback((data) => {
    setCommentData(data);
  }, []);

  const deleteComment = useCallback(
    (id) => {
      const deleteData = commentData.filter((data) => data.id !== id);
      setCommentData(deleteData);
    },
    [commentData],
  );

  const loading = useGetPost(setPostData, setComment, card.id);

  const onTextSubmit = useCallback(async (text) => {
    const response = await MenuApi.createComment(card.id, text);

    if (response) {
      const commentResponse = await MenuApi.getCommentData(card.id);
      setCommentData(commentResponse.data.results);

      mainRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest',
      });
    }
  }, []);

  const onFixedShareComponent = () => {
    if (window.pageYOffset > 220) {
      setIsFixedshare(true);
    } else {
      setIsFixedshare(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', debounce(onFixedShareComponent, 10));
  }, []);

  useEffect(() => {
    detailData && setTagArr(detailData.tags);
    detailData && window.scrollTo(0, 0);
  }, [detailData]);

  return (
    <Grid width="100%" _ref={mainRef}>
      {showModal && command === 'postDelete' && (
        <Modal
          title="포스트 삭제"
          content="정말로 삭제하시겠습니까?"
          postId={card.id}
          mainRef={mainRef}
          deleteComment={deleteComment}
          command={command}
          history={history}
          onToggleModal={onToggleModal}
        />
      )}
      {showModal && command === 'commentDelete' && (
        <Modal
          title="댓글 삭제"
          content="댓글을 정말로 삭제하시겠습니까?"
          postId={card.id}
          mainRef={mainRef}
          deleteComment={deleteComment}
          command={command}
          onToggleModal={onToggleModal}
        />
      )}

      <Header />
      {loading ? (
        <DetailSkeleton />
      ) : (
        <Body>
          <Title>{detailData.title}</Title>

          <Grid is_flex align="center" justify="space-between">
            <Text size="1rem" color="rgb(73, 80, 87)">
              {formatDate(detailData.createdAt)}
            </Text>
            <ActionWrap>
              <EditLink to={`/edit/${detailData.id}`}>
                <ActionChange>수정</ActionChange>
              </EditLink>
              <ActionDelete onClick={() => onToggleModal('postDelete')}>
                삭제
              </ActionDelete>
            </ActionWrap>
          </Grid>

          <TagList>
            {tagArr &&
              tagArr.map((tagContent, index) => (
                <Tag key={index} tagContent={tagContent} />
              ))}
            {!loading && (
              <PostShare isFixedShare={isFixedShare} detailData={detailData} />
            )}
          </TagList>
          <Grid is_flex justify="center" width="100%" margin="5rem 0">
            {detailData.thumbnail && (
              <Thumbnail src={detailData.thumbnail} alt="thumbnail"></Thumbnail>
            )}
          </Grid>
          <Content
            dangerouslySetInnerHTML={{ __html: parse(detailData.body) }}
          ></Content>

          <Grid
            is_flex
            align="center"
            margin="10rem 0 6rem"
            padding="0 0 2rem 0"
            borderBottom="1px solid rgb(233, 236, 239)"
          >
            <UserImg src={avatar} alt="user" />
            <Grid is_flex column justify="center" margin="0 0 0 1rem">
              <Text size="1.5rem" line="1.5" bold="700" color="rgb(33, 37, 41)">
                User
              </Text>
              <Text
                size="1.125rem"
                line="1.5"
                margin="0.25rem 0 0 0"
                color="rgb(73, 80, 87)"
              >
                Front-end
              </Text>
            </Grid>
          </Grid>

          <Grid margin="3rem auto auto" width="768px">
            <Text
              bold="600"
              color="rgb(52, 58, 64)"
            >{`${commentData.length}개의 댓글`}</Text>
            <CommentWrite onTextSubmit={onTextSubmit} />
            <CommentList>
              {commentData.map((comment) => (
                <CommentView
                  key={comment.id}
                  comment={comment}
                  openModal={onToggleModal}
                />
              ))}
            </CommentList>
          </Grid>
        </Body>
      )}
    </Grid>
  );
};

const ActionWrap = styled.ul`
  display: flex;
`;

const ActionChange = styled.li`
  padding: 0px;
  outline: none;
  border: none;
  background: none;
  font-size: inherit;
  cursor: pointer;
  color: rgb(134, 142, 150);
`;

const ActionDelete = styled.li`
  padding: 0px;
  outline: none;
  border: none;
  background: none;
  font-size: inherit;
  cursor: pointer;
  color: rgb(134, 142, 150);
  margin-left: 8px;
`;

const EditLink = styled(Link)`
  text-decoration: none;
  color: rgb(134, 142, 150);
`;

const Body = styled.div`
  margin-top: 5.5rem;
  width: 768px;
  height: auto;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1024px) {
    margin-top: 2rem;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  line-height: 1.5;
  letter-spacing: -0.004em;
  margin-top: 0px;
  font-weight: 800;
  color: rgb(52, 58, 64);
  margin-bottom: 2rem;
  word-break: keep-all;
`;

const TagList = styled.ul`
  position: relative;
  margin-top: 0.875rem;
  margin-bottom: -0.875rem;
  min-height: 0.875rem;
`;

const Thumbnail = styled.img`
  width: 50%;
  height: auto;
`;

const Content = styled.section`
  margin-top: 2rem;
  line-height: 2;
`;

const CommentCount = styled.h4`
  font-size: 1.125rem;
  line-height: 1.5;
  font-weight: 600;
  margin-top: 1.33rem;
  margin-bottom: 1.33rem;
`;

const UserImg = styled.img`
  width: 8rem;
  height: 8rem;
  cursor: pointer;
`;

const CommentList = styled.ul`
  margin-top: 2.5rem;
  margin-bottom: 4rem;
`;
