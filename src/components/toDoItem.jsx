import React, { useState } from "react";



function ToDoItem(props) {
    const [isMouseOver, setMouseOver] = useState(false);

    function handleMouseOver(){
        setMouseOver(true);
    }
    function handleMouseOut(){
        setMouseOver(false);
    }

  return (
    <div 
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li  style={{textDecoration : isMouseOver ? "line-through" : "none"}} onMouseOver={handleMouseOver}  onMouseOut={handleMouseOut} >{props.text}</li>
    </div>
  );
}

export default ToDoItem;
