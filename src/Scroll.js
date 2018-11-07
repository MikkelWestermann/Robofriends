import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{overflowY: 'scroll', border: '2px solid black', height: '1000px'}}>
      {props.children}
    </div>
  );
}

export default Scroll;
