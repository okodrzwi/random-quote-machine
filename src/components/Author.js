import React from 'react';
const Author = props => (
  <span id="author">
    {props.selectedQuote ? props.selectedQuote.author : ''}{' '}
  </span>
);
export default Author;
