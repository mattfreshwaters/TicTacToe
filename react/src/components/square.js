import React from 'react';
import ReactDOM from 'react-dom/client';

function Square(props) {
  return (
      <button className="square" key={props.position} onClick={props.onClick}>
        {props.value}
      </button>
    );
  }

export default Square;