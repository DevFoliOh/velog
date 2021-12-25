export const formatDate = (date) => {
  const format = date.slice(0, 10).split('-');
  return `${format[0]}년 ${format[1]}월 ${format[2]}일`;
};
