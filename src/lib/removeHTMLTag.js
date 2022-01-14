import ReactHtmlParser from 'react-html-parser';

export const removeHTMLTagFromObject = (htmlObj) => {
  const strBody = String(ReactHtmlParser(htmlObj));
  return strBody.replace(/(<([^>]+)>)/gi, '');
};

export const removeHTMLTagFromString = (string) => {
  return string.replace(/(<([^>]+)>)/gi, '');
};
