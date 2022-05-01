import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
export const GlobalStyle = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
    font-smooth: antialiased;
    font-family: 'Open Sans', 'Noto Sans KR', sans-serif, sans-serif;
  }
  font-size: 14px;
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 14px;
    font: inherit;
    vertical-align: baseline;
    font-weight: 400;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  body {
  background-color: #d9d9d9;

  }

  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  input, textarea {
    border: none;
    outline: none;
    appearance: none;
    background-color: inherit;
    resize: none;
  }
  button {
    border: none;
    outline: none;
    appearance: none;
    background-color: inherit;
    cursor: pointer;
  }
  a {
    color: black;
    text-decoration: none;
    outline: none;
    word-wrap: break-word;
  }

  pre {
    white-space: pre-wrap;
  }
`;
