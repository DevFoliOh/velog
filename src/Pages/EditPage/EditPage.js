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
import ReactHtmlParser from 'react-html-parser';

const EditPage = () => {
  const [editData, setEditData] = useState({
    tags: [],
    title: '',
    body: '',
    createdAt: '',
    updatedAt: '',
    id: '',
  });
  // console.log(editData);
  // console.log(editData.title);
  console.log(editData.body);
  // console.log(editData.tags);
  // console.log(editData.thumbnail);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [hashTagArr, setHashTagArr] = useState([]);
  const [viewContent, setViewContent] = useState([]);
  const [url, setUrl] = useState('');
  const date = new Date();
  const id = useSelector((state) => state.getCardIdReducer.cardId);
  const [commentData, setCommentData] = useState([]); // 안 넣으면 useGetData가 작동하지 않아서 넣고 나중에 제거

  const setPostData = useCallback((data) => {
    setEditData(data);
    setTitle(editData.title);
    // setContent(ReactHtmlParser(editData.body));
    setHashTagArr(editData.tags);
    setUrl(editData.thumbnail);
  }, []);

  console.log(typeof content);
  // console.log(ReactHtmlParser(content));

  // 안 넣으면 useGetData가 작동하지 않아서 넣고 나중에 제거
  const setComment = useCallback((data) => {
    setCommentData(data);
  }, []);

  // id에 해당하는 데이터를 받아옴
  const loading = useGetData(setPostData, setComment, id);
  console.log(loading);

  const editTitle = (e) => {
    const { value } = e.target;
    setTitle({ ...title, title: value });
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
    setViewContent(viewContent.concat({ ...title, ...content, hashTagArr }));
  };

  const editPost = async (id) => {
    try {
      const response = await axios.patch(
        `https://limitless-sierra-67996.herokuapp.com/v1/posts/${id}`,
        {
          id: id, // 리덕스에서 받은 아이디
          title: title,
          body: content,
          tags: hashTagArr,
          thumbnail: url,
          updatedAt: formatDate(editData.updatedAt), // 수정한 날짜로 바꾸기
        },
      );
    } catch (error) {
      alert(error);
    }
    console.log('PATCH 성공!');
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
                <div>{ReactHtmlParser(editData.body)}</div>
                <WriteTag onKeyPress={handleKeyEnter} />
              </WriteTagContainer>
            </div>
            <Input url={url} setUrl={setUrl} />
          </WriteHeader>
          <EditorContainer>
            <Editor setContent={setContent} content={content} />
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
              />
            </div>
            <div>
              <Button
                text="미리보기"
                _onClick={previewPost}
                style={{
                  background: 'rgb(233, 236, 239)',
                  color: 'rgb(73, 80, 87)',
                  marginRight: '10px',
                }}
              />
              <Button
                text="수정하기"
                _onClick={(id) => editPost(id)}
                link="/"
              />
            </div>
          </WriteFooter>
        </WriteContainer>
      )}
      <PreviewContainer>
        {viewContent.map((element, idx) => (
          <div key={idx}>
            <h2>{element.title}</h2>
            <p>{parse(element.body)}</p>
          </div>
        ))}
      </PreviewContainer>
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
