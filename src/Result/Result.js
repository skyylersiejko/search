import React, { useState, useEffect } from 'react';
import "../Result/Result.css"
export  default function Result(props) {
  const [count, setCount] = useState(0);
  const [hidden, visability] = useState(false);

const show = () =>{
    setCount(count +1)
    visability(!hidden)
}
    
  return (
    <div className = {"Result"}>
      <button onClick={() => show()}>
        {(hidden)?"show" :"hide"} {props.name}
      </button>
      {!hidden?<div className = {"Item"}><img src = {props.url}/><h6>{props.name}</h6></div>:null}
    </div>
  );
}

