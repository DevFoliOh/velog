import ReactHtmlParser from 'react-html-parser';

// 오브젝트의 escape문자와 태그를 제거하고 순수 문자열로 만드는 코드
export const removeHTMLTagFromObject = (htmlObj) => {
  const strBody = String(ReactHtmlParser(htmlObj));
  return strBody.replace(/(<([^>]+)>)/gi, '');
};

// 문자열의 escape문자와 태그 제거하는 코드
export const removeHTMLTagFromString = (string) => {
  return string.replace(/(<([^>]+)>)/gi, '');
};
