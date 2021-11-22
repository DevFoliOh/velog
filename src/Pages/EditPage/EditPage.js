import React, { useState, useEffect, useCallback } from 'react';
import { style } from './EditPageStyle';
import Button from 'Components/Button/Button';
import * as axios from 'axios';
import Editor from 'Components/Editor/Editor';
import parse from 'html-react-parser';
import Input from 'Components/Input/Input';
import { useSelector } from 'react-redux';
import useGetData from 'Hooks/useGetData';
import { formatDate } from 'Common/formatDate';
import { removeHTMLTagFromObject } from 'Common/removeHTMLTag';
import MenuApi from 'Common/api';
import usePatchEditData from 'Hooks/usePatchEditData';
import Modal from 'Components/Modal/Modal';
// import { history } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

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

  // 2. axois로 서버에서 수정할 데이터를 받아온다
  const getData = async (id) => {
    try {
      setLoading(true);
      const response = await MenuApi.getPostDetail(id);

      // 3. 데이터 통째로 저장
      const data = response.data;

      // 4. 각 세터에 저장
      setTitle(data.title);

      setLoadedContent(data.body);
      setContent(data.body);
      // setLoadedContent(removeHTMLTagFromObject(data.body));

      setHashTagArr(data.tags);

      setUrl(data.thumbnail);

      setLoading(false);
    } catch (error) {
      throw new Error('data load 실패');
    }
  };

  // 1. 첫 페이지 로드 시 getData 함수 실행
  useEffect(() => {
    getData(id);
  }, []);

  useEffect(() => {
    console.log(typeof url);
  }, [url]);

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

  // 수정하기 버튼을 누르면 수정된 데이터를 서버로 보낸다
  const editPost = async () => {
    try {
      await axios.patch(
        `https://limitless-sierra-67996.herokuapp.com/v1/posts/${id}`,
        {
          id: id, // 리덕스에서 받은 아이디
          title: title,
          body: content,
          tags: hashTagArr,
          thumbnail: url,
          // updatedAt: formatDate(data.updatedAt), // 수정한 날짜로 변경
        },
      );

      history.push('/detail');
    } catch (error) {
      console.log(error);
    }
    console.log('PATCH 성공!');
  };

  const addLocalStorage = () => {
    const postInfo = {
      title: title,
      content: content,
      tags: hashTagArr,
      thumbnail: url,
    };
    localStorage.setItem('posts', JSON.stringify(postInfo));
  };

  const loadLocalStorage = () => {
    const loaded = JSON.parse(localStorage.getItem('posts'));
    localStorage.setItem('post', JSON.stringify(loaded));
    setTitle(loaded.title);
    // console.log(typeof loaded.title);
    // console.log(typeof title);

    setLoadedContent(loaded.content);
    // console.log(typeof loaded.content);
    console.log(loadedContent);

    setHashTagArr(loaded.tags);
    // console.log(typeof loaded.tag);
    // console.log(typeof hashTagArr);
    setUrl(loaded.thumbnail);
    console.log(typeof loaded.thumbnail);
    // console.log(url);
  };

  const onToggleModal = useCallback((click) => {
    console.log('??');
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
            <Input url={url} setUrl={setUrl} />
          </WriteHeader>
          <EditorContainer>
            <Editor setContent={setContent} loadedContent={loadedContent} />
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
          <p>{viewContent.body}</p>
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
