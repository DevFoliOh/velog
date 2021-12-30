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
    <Main ref={mainRef}>
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
          <ActionContainer>
            <div>{formatDate(detailData.createdAt)}</div>
            <ActionWrap>
              <EditLink to={`/edit/${detailData.id}`}>
                <ActionChange>수정</ActionChange>
              </EditLink>
              <ActionDelete onClick={() => onToggleModal('postDelete')}>
                삭제
              </ActionDelete>
            </ActionWrap>
          </ActionContainer>
          <TagList>
            {tagArr &&
              tagArr.map((tagContent, index) => (
                <Tag key={index} tagContent={tagContent} />
              ))}
            {!loading && (
              <PostShare isFixedShare={isFixedShare} detailData={detailData} />
            )}
          </TagList>
          <ThumbnailWrap>
            {detailData.thumbnail && (
              <Thumbnail src={detailData.thumbnail} alt="thumbnail"></Thumbnail>
            )}
          </ThumbnailWrap>
          <Content
            dangerouslySetInnerHTML={{ __html: parse(detailData.body) }}
          ></Content>
          <UserContainer>
            <UserImg src={avatar} alt="user" />
            <UserDescriptionWrap>
              <UserDescriptionTitle>User</UserDescriptionTitle>
              <UserDescriptionSubTitle>Front-end</UserDescriptionSubTitle>
            </UserDescriptionWrap>
          </UserContainer>
          <CommentContainer>
            <CommentCount>{`${commentData.length}개의 댓글`}</CommentCount>
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
          </CommentContainer>
        </Body>
      )}
    </Main>
  );
};

const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: rgb(73, 80, 87);
  justify-content: space-between;
`;

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

const Main = styled.main`
  width: 100%;
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

const ThumbnailWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 5rem 0 5rem 0;
`;

const Thumbnail = styled.img`
  width: 50%;
  height: auto;
`;

const Content = styled.section`
  margin-top: 2rem;
  line-height: 2;
`;

const CommentContainer = styled.div`
  margin-top: 3rem;
  width: 768px;
  margin-left: auto;
  margin-right: auto;
  color: rgb(52, 58, 64);
`;

const CommentCount = styled.h4`
  font-size: 1.125rem;
  line-height: 1.5;
  font-weight: 600;
  margin-top: 1.33rem;
  margin-bottom: 1.33rem;
`;

const UserContainer = styled.footer`
  display: flex;
  align-items: center;
  margin-top: 10rem;
  margin-bottom: 6rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgb(233, 236, 239); ;
`;

const UserImg = styled.img`
  width: 8rem;
  height: 8rem;
  cursor: pointer;
`;

const UserDescriptionWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1rem;
`;

const UserDescriptionTitle = styled.div`
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: bold;
  color: rgb(33, 37, 41);
`;

const UserDescriptionSubTitle = styled.div`
  white-space: pre-wrap;
  font-size: 1.125rem;
  line-height: 1.5;
  margin-top: 0.25rem;
  color: rgb(73, 80, 87);
  letter-spacing: -0.004em;
`;

const CommentList = styled.ul`
  margin-top: 2.5rem;
  margin-bottom: 4rem;
`;
