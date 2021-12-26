import React, { useState, useEffect, useCallback } from 'react';
import { style } from 'Pages/WritePage/WritePageStyle';
import { Button } from 'Common';
import { Editor, ImgUpload, Modal } from 'Components';
import { useSelector } from 'react-redux';
import MenuApi from 'lib/api';
import parse from 'html-react-parser';

const EditPage = ({ history }) => {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loadedContent, setLoadedContent] = useState('');
  const [hashTagArr, setHashTagArr] = useState([]);
  const [viewContent, setViewContent] = useState([]);
  const [url, setUrl] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [clickComponent, setClickComponent] = useState('');
  const id = useSelector((state) => state.getCardReducer.card.id);

  const getData = async (id) => {
    try {
      setLoading(true);
      const response = await MenuApi.getPostDetail(id);
      const data = response.data;
      setTitle(data.title);
      setLoadedContent(data.body);
      setContent(data.body);
      setHashTagArr(data.tags);
      setUrl(data.thumbnail);
      setLoading(false);
    } catch (error) {
      throw new Error('data load 실패');
    }
  };

  useEffect(() => {
    getData(id);
  }, []);

  const editTitle = (e) => {
    const value = e.target.value;
    setTitle(value);
  };

  const handleKeyEnter = (e) => {
    if (e.code === 'Enter') {
      setHashTagArr([...hashTagArr, e.target.value]);
      e.target.value = '';
    }
  };

  const removeHashTag = (hashtag) => {
    setHashTagArr(hashTagArr.filter((element) => hashtag !== element));
  };

  const previewPost = () => {
    setViewContent({ title: title, body: content });
  };

  const editPost = async () => {
    try {
      await MenuApi.patchPost(id, title, content, url, hashTagArr);
      history.push('/detail');
      console.log('PATCH 성공!');
    } catch (error) {
      console.log(error);
    }
  };

  const addLocalStorage = () => {
    const postInfo = {
      title: title,
      content: content,
      tags: hashTagArr,
      thumbnail: url,
    };
    localStorage.setItem('posts', JSON.stringify(postInfo));
    console.log('로컬에 저장: ' + JSON.stringify(postInfo));
  };

  const loadLocalStorage = () => {
    const loaded = JSON.parse(localStorage.getItem('posts'));
    setTitle(loaded.title);
    setLoadedContent(loaded.content);
    setHashTagArr(loaded.tags);
    setUrl(loaded.thumbnail);
  };

  const onToggleModal = useCallback((click) => {
    setShowModal(false);
    if (click) {
      setClickComponent(click);
      setShowModal(true);
    }
  }, []);

  const onOpenModal = () => {
    onToggleModal('goToBack');
  };

  return (
    <Container>
      {!loading && (
        <WriteContainer>
          <WriteHeader>
            <div>
              <WriteTitle onChange={editTitle} value={title} />
              <WriteLine />
              <WriteTagContainer>
                <WriteTagContent>
                  {hashTagArr.map((hashtag, idx) => {
                    return (
                      <div key={idx} onClick={() => removeHashTag(hashtag)}>
                        <span>{hashtag}</span>
                      </div>
                    );
                  })}
                </WriteTagContent>
                <WriteTag onKeyPress={handleKeyEnter} />
              </WriteTagContainer>
            </div>
            <ImgUpload url={url} setUrl={setUrl} />
          </WriteHeader>
          <EditorContainer>
            <Editor
              setContent={setContent}
              loadedContent={loadedContent}
              setLoadedContent={setLoadedContent}
            />
          </EditorContainer>
          <WriteFooter>
            <div>
              <Button
                style={{
                  background: '#fff',
                  color: 'rgb(73, 80, 87)',
                }}
                text="🔙 뒤로가기"
                _link="/"
                _onClick={onOpenModal}
              />
            </div>
            <div>
              <Button
                text="임시저장"
                _onClick={addLocalStorage}
                style={{
                  background: 'rgb(233, 236, 239)',
                  color: 'rgb(73, 80, 87)',
                  marginRight: '10px',
                }}
              />
              <Button
                text="불러오기"
                _onClick={loadLocalStorage}
                style={{
                  background: 'rgb(233, 236, 239)',
                  color: 'rgb(73, 80, 87)',
                  marginRight: '10px',
                }}
              />
              <Button
                text="미리보기"
                _onClick={previewPost}
                style={{
                  background: 'rgb(233, 236, 239)',
                  color: 'rgb(73, 80, 87)',
                  marginRight: '10px',
                }}
              />
              <Button text="수정하기" _onClick={() => editPost()} />
            </div>
          </WriteFooter>
        </WriteContainer>
      )}
      <PreviewContainer>
        <div>
          <h2>{viewContent.title}</h2>

          {viewContent.body &&
            parse(viewContent.body)
              .replace(/(<([^>]+)>)/gi, '\n')
              .split('\n')
              .map((line) => {
                console.log(line);
                return (
                  <>
                    <p>{line}</p>
                    <br />
                  </>
                );
              })}
        </div>
      </PreviewContainer>
      {showModal && (
        <Modal
          title="포스트 작성 취소"
          description="정말 페이지를 벗어나시겠습니까?"
          modalLink="/"
          onToggleModal={onToggleModal}
          clickComponent={clickComponent}
          history={history}
        />
      )}
    </Container>
  );
};

export default EditPage;

const {
  Container,
  WriteContainer,
  WriteHeader,
  WriteTitle,
  WriteLine,
  WriteTagContainer,
  WriteTagContent,
  WriteTag,
  EditorContainer,
  WriteFooter,
  PreviewContainer,
} = style;
