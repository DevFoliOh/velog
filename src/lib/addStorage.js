export const addStorage = (title, content, hashTagArr, url) => {
  const post = {
    title,
    body: content,
    tags: hashTagArr,
    thumbnail: url,
  };

  localStorage.setItem('posts', JSON.stringify(post));
};
