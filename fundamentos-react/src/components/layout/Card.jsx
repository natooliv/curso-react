import React from 'react';
import "./Card.css"
export default (props) => {
  return(
  <div className='Card'>
    <div className='Title'></div>
    <div className='Content'>{props.titulo}</div>
    {props.children}
  </div>
  );
}