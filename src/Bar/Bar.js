import React, { useState, useEffect } from 'react';
import Result from "../Result/Result"
import * as util from '../Util'
export  default function SearchBar() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [searched, Searching] = useState(false);
  const [results, addResult] = useState([]);

// add filter to search

  const getData = async () => { 
      console.log(text)
    fetch(util.api_url+text.toLowerCase())
    .then(function(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    })  
    .then(result => {
    return result.json();
    }).then(data => {
        //data is the pulled request
        console.log(data)
        addResult([...results, <Result url = {data.sprites.front_default} name = {data.name}/>])
        Searching(false)
        
     
    
    }).catch(error => console.log(error));
  }

const searching = () =>{
    setCount(count +1)
    Searching(true)
    if(text.length > 0){
        getData()
        setText("")
        
    }
}
    
  return (
    <div>
      <p>searched {count} times</p>
      <input onChange = {e =>setText(e.target.value)} value = {text} placeholder = {"search"}></input>
      <button onClick={() => searching()}>
        Click me
      </button> 
      {results.map((item, index) => {
          return <h2 key = {index}>{item}</h2>
      })}
    </div>
  );
}





