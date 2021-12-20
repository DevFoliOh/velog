import React, { useCallback, useEffect, useRef, useState } from 'react';
import Header from 'Components/Header/Header';
import { style } from './DetailPageStyle';
import Tag from 'Components/Tag/Tag';
import CommentView from 'Components/Comment/CommentView/CommentView';
import parse from 'html-react-parser';
import MenuApi from 'Common/api';
import { useSelector } from 'react-redux';
import useGetData from 'Hooks/useGetData';
import DetailSkeleton from 'Components/DetailSkeleton/DetailSkeleton';
import DetailAction from 'Components/DetailAction/DetailAction';
import PostShare from 'Components/PostShare/PostShare';
import { throttle } from 'lodash';
import CommentWrite from 'Components/Comment/CommentWrite/CommentWrite';
import Modal from 'Components/Modal/Modal';
import avatar from 'Assets/avatar.png';

const DetailPage = ({ history }) => {
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
  const [clickComponent, setClickComponent] = useState('');
  const [showModal, setShowModal] = useState(false);
  const mainRef = useRef();

  const card = useSelector((state) => state.getCardReducer.card);

  const onToggleModal = useCallback((click) => {
    setShowModal(false);
    if (click) {
      setClickComponent(click);
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

  const loading = useGetData(setPostData, setComment, card.id);

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
    console.log(window.pageYOffset);
    if (window.pageYOffset > 220) {
      setIsFixedshare(true);
    } else {
      setIsFixedshare(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', throttle(onFixedShareComponent, 50));
  }, []);

  useEffect(() => {
    detailData && setTagArr(detailData.tags);
    detailData && window.scrollTo(0, 0);
  }, [detailData]);

  return (
    <Main ref={mainRef}>
      {showModal && clickComponent === 'postDelete' && (
        <Modal
          title="포스트 삭제"
          description="정말로 삭제하시겠습니까?"
          modalLink="/"
          postId={card.id}
          mainRef={mainRef}
          deleteComment={deleteComment}
          clickComponent={clickComponent}
          history={history}
          onToggleModal={onToggleModal}
        />
      )}
      {showModal && clickComponent === 'commentDelete' && (
        <Modal
          title="댓글 삭제"
          description="댓글을 정말로 삭제하시겠습니까?"
          modalLink=""
          postId={card.id}
          mainRef={mainRef}
          deleteComment={deleteComment}
          clickComponent={clickComponent}
          onToggleModal={onToggleModal}
        />
      )}

      <Header />
      {loading ? (
        <DetailSkeleton />
      ) : (
        <Body>
          <Title>{detailData.title}</Title>
          <DetailAction openModal={onToggleModal} detailData={detailData} />
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

export default DetailPage;

const {
  Main,
  Body,
  Title,
  TagList,
  ThumbnailWrap,
  Thumbnail,
  Content,
  CommentContainer,
  CommentCount,
  CommentList,
  UserContainer,
  UserImg,
  UserDescriptionWrap,
  UserDescriptionTitle,
  UserDescriptionSubTitle,
} = style;
