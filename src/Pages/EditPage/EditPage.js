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

const EditPage = () => {
  // const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loadedContent, setLoadedContent] = useState('');
  const [hashTagArr, setHashTagArr] = useState([]);
  const [viewContent, setViewContent] = useState([]);
  const [url, setUrl] = useState('');
  // 리덕스에서 받아온 id
  const id = useSelector((state) => state.getCardIdReducer.cardId);
  console.log(url);

  // 2. axois로 서버에서 수정할 데이터를 받아온다
  const getData = async (id) => {
    try {
      setLoading(true);
      const response = await MenuApi.getPostDetail(id);
      console.log(response.data);
      // 3. 데이터 통째로 저장
      // setData(response.data);
      const data = response.data;
      console.log(data);

      // 4. 각 세터에 저장
      setTitle(data.title);
      console.log(data.title);
      console.log(typeof data.title);

      setLoadedContent({
        ops: [
          {
            insert: data.body,
          },
        ],
      });
      // setLoadedContent(removeHTMLTagFromObject(data.body));
      console.log(loadedContent);
      console.log(typeof loadedContent);

      console.log(content);

      setHashTagArr(data.tags);
      setUrl(data.thumbnail);

      console.log(url);

      setLoading(false);
    } catch (error) {
      // console.log(error);
      throw new Error('data load 실패');
    }
  };

  // 1. 첫 페이지 로드 시 getData 함수 실행
  useEffect(() => {
    getData(id);
  }, []);

  const editTitle = (e) => {
    const value = e.target.value;
    console.log(typeof value);
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

  console.log(viewContent);

  const previewPost = () => {
    console.log(viewContent);
    setViewContent(viewContent.concat({ ...title, ...content, hashTagArr }));
    console.log(viewContent);
  };

  const editPost = async () => {
    try {
      console.log(id);
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
    } catch (error) {
      console.log(error);
    }
    console.log('PATCH 성공!');
  };

  const addLocalStorage = () => {
    const postInfo = {
      title: title,
      content: content,
      tag: hashTagArr,
      thumbnail: url,
    };
    console.log(postInfo);
    localStorage.setItem('post', JSON.stringify(postInfo));
  };

  const loadLocalStorage = () => {
    console.log('성공!');
    const loaded = JSON.parse(localStorage.getItem('post'));
    localStorage.setItem('post', JSON.stringify(loaded));

    // console.log(loaded);
    // console.log(typeof loaded);

    setTitle(loaded.title);
    console.log(typeof loaded.title);
    console.log(typeof title);

    setContent(loaded.content);
    console.log(typeof loaded.content);
    console.log(typeof content);

    setHashTagArr(loaded.tag);
    console.log(typeof loaded.tag);
    console.log(typeof hashTagArr);

    setUrl(loaded.thumbnail);
    console.log(loaded.thumbnail);
    console.log(url);
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
              <Button text="수정하기" _onClick={() => editPost()} _link="/" />
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
