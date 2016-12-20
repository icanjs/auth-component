import React from 'react';
import ReactDOM from 'react-dom';
// import './buttons';
// import Button from './button';
import AmazonButton from './amazon/amazon';

// Render the DOM
ReactDOM.render(
  <div>
    <AmazonButton popup />
  </div>,
  document.querySelector('[root=true]')
);
