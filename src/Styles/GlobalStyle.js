import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { palette } from './palette';

const GlobalStyle = createGlobalStyle`
    ${reset};

    * {
        box-sizing: inherit;
    };

    body {
        margin: 0px;
        padding: 0px;
        font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Apple SD Gothic Neo", "Malgun Gothic", "맑은 고딕", 나눔고딕, "Nanum Gothic", "Noto Sans KR", "Noto Sans CJK KR", arial, 돋움, Dotum, Tahoma, Geneva, sans-serif;
        -webkit-font-smoothing: antialiased;
        color: ${palette.gray[11]};
        box-sizing: border-box;
        background: rgb(248, 249, 250);
        height: 100%;
        overflow-y: initial;
    };

    button {
        display: flex;
        cursor: pointer;
        outline: none;
        border-radius: 3px;
    };

    input {
        display: flex;
        outline: none;
    };

    input:active {
        border: none;
        outline: none;
    };
    
    a {
        text-decoration: none;
        color: inherit;
    };
`;

export default GlobalStyle;
