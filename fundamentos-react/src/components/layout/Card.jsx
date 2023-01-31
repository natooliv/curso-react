import React from 'react';
import "./Card.css"
export default (props) => {
     return(
  <div className='Card' style={{
    backgroundColor: props.color ||'#008',
   borderColor: props.color || '#008',
  }}>
    <div className='Title'></div>
    <div className='Content'>{props.titulo}</div>
    {props.children}
  </div>
  );
}