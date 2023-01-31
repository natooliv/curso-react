import React from 'react';
import { cloneElement } from 'react';

// Clonando elementos, props... 

export default props =>{
  return(
    <div>
      {
      React.Children.map(props.children,child=>{
        return cloneElement(child,props)
      })}
      

    </div>
  );
};