import React from 'react';
import { throttle } from 'lodash';
import { useInView } from 'react-intersection-observer';

export default function InfinityScroll(props) {
  const { callNext, is_next } = props;
  const [ref, inView] = useInView();

  const handleScroll = () => {
    const { innerHeight } = window; // 브라우저 높이
    const { scrollHeight } = document.body; // 웹사이트 body 높이

    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop; // Scroll Top 위치

    if (scrollHeight - innerHeight - scrollTop < 100) {
      callNext();
    }
  };

  React.useEffect(() => {
    if (!is_next) {
      window.addEventListener('scroll', throttle(handleScroll, 300));
    } else {
      window.removeEventListener('scroll', handleScroll);
    }
    return () => window.removeEventListener('scroll', handleScroll);
  }, [is_next]);

  return <>{props.children}</>;
}
