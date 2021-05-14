import React from 'react';

const Paragraph = (props) => (
    <span id="text">{props.selectedQuote ? props.selectedQuote.quote : ""}  </span>

);
export default Paragraph;