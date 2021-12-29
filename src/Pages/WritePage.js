import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { Grid, Button, Icon, Text, Input } from 'Common';
import { MenuApi } from 'lib';
import { Editor, ImgUpload, Modal, Tag, EditorFooter } from 'Components';

export const WritePage = ({ history }) => {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [hashTagArr, setHashTagArr] = useState([]);
  const [url, setUrl] = useState('');
  const [command, setCommand] = useState('');
  const [showModal, setShowModal] = useState(false);

  const onToggleModal = useCallback((text) => {
    setShowModal(false);

    if (text) {
      setCommand(text);
      setShowModal(true);
    }
  }, []);

  const registerPost = async () => {
    try {
      await MenuApi.createPost(title, content, url, hashTagArr);
      history.push('/');
      localStorage.removeItem('posts');
    } catch (error) {
      console.log(error);
      throw new Error('게시글 등록 실패');
    }
  };

  useEffect(() => {
    const post = JSON.parse(localStorage.getItem('posts'));
    if (!post) {
      return;
    } else {
      setTitle(post.title);
      setContent(post.body);
      setHashTagArr(post.tags);
      setUrl(post.thumbnail);
    }

    return () => {
      localStorage.removeItem('posts');
    };
  }, []);

  const handleKeyEnter = (e) => {
    if (e.code === 'Enter') {
      setHashTagArr([...hashTagArr, e.target.value]);
      e.target.value = '';
    }
  };

  const removeHashTag = useCallback(
    (hashtag) => {
      setHashTagArr(hashTagArr.filter((element) => hashtag !== element));
    },
    [hashTagArr],
  );

  return (
    <Grid is_flex height="100vh">
      <Grid is_flex column>
        <Grid is_flex justify="space-between" padding="30px 50px 0">
          <div>
            <TitleInput
              type="text"
              name="title"
              placeholder="제목을 입력하세요"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <Grid
              width="64px"
              height="6px"
              bg="rgb(133, 133, 133)"
              margin="1.5rem 0 1rem"
            />
            <Grid is_flex flexWrap>
              <Grid is_flex margin="0 0 10px">
                {hashTagArr.map((hashtag, idx) => {
                  return (
                    <Tag
                      key={idx}
                      tagContent={hashtag}
                      _onClick={() => removeHashTag(hashtag)}
                    >
                      {hashtag}
                    </Tag>
                  );
                })}
              </Grid>
              <TagInput
                type="text"
                name="tag"
                placeholder="태그를 입력하세요"
                onKeyPress={handleKeyEnter}
              />
            </Grid>
          </div>
          <ImgUpload
            url={url}
            setUrl={setUrl}
            loading={loading}
            setLoading={setLoading}
          />
        </Grid>

        <EditorContainer>
          <Editor content={content} setContent={setContent} />
        </EditorContainer>

        <EditorFooter
          registerPost={registerPost}
          onToggleModal={onToggleModal}
          post={(title, content, hashTagArr, url)}
        />
      </Grid>

      <PreviewContainer>
        <div>
          <H1>{title}</H1>
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
      </PreviewContainer>

      {showModal && command === 'goToBack' && (
        <Modal
          title="포스트 작성 취소"
          content="정말 페이지를 벗어나시겠습니까? 작성중인 내용은 저장되지 않습니다."
          history={history}
          command={command}
          onToggleModal={onToggleModal}
        />
      )}

      {showModal && command === 'saveLocalStorage' && (
        <Modal
          title="포스트 임시 저장"
          content="작성중인 포스트를 임시저장하였습니다."
          command={command}
          onToggleModal={onToggleModal}
        />
      )}
    </Grid>
  );
};

const H1 = styled.h1`
  font-size: 3rem;
  line-height: 1.5;
  letter-spacing: -0.004em;
  margin: 0 0 2rem;
  font-weight: 800;
  color: rgb(52, 58, 64);
  word-break: keep-all;

  @media (max-width: 1024px) {
    font-size: 2.25rem;
  }
`;

const TitleInput = styled.input`
  width: 100%;
  height: 66px;
  font-size: 30px;
  font-weight: 700;
  color: rgb(133, 133, 133);
  border: none;
  padding-left: 0;
`;

const TagInput = styled.input`
  width: 100%;
  height: 30px;
  font-size: 20px;
  border: none;
  padding-left: 0;
  margin-bottom: 12px;
`;

const EditorContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0 50px 14px;

  .ck.ck-editor {
    max-width: 700px;
  }
  .ck-editor__editable {
    min-height: 400px;
  }
`;
const PreviewContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 100px 50px;
  background: #fafafa;

  h2 {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 30px;
  }

  p {
    font-size: 16px;
    line-height: 24px;
  }
`;
