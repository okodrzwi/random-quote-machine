import React from 'react';

const Button = ({ buttonDisplayName, handleClick }) => (
  <button id="new-quote" onClick={handleClick}>
    {buttonDisplayName}
  </button>
);
export default Button;
