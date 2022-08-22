import React from 'react';
import Square from './Square';


function Board({squares,onClick}) {

  const grid = squares.map((square,index) => {
    return <Square 
       key = {index}
       value = {square}
       onClick={()=>onClick(index)} 
       
      />
  });

  return (<div className = 'grid-board'>{grid}</div>);
          
  };

export default Board;