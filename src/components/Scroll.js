import React from 'react';

const Scroll = (props) => {
  // this renders the cardlist because it wraps the component CardList. 
  return (
    <div style={{
      overflow: 'scroll',
      border: '5px solid black',
      height: '800px'
    }}>
      {props.children}
    </div>
  )
}

export default Scroll;