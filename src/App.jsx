import React from 'react'
import { useRef } from 'react'

const App = () => {

  let store =useRef(null);
  const response1=useRef(null);

  
  //here i'm calling API 
    const call=async()=>{
    const response=await fetch("https://jsonplaceholder.typicode.com/todos");
    store.current=await response.json();

  }
  const show=()=>{
    response1.current.innerText=JSON.stringify(store.current);
  }







  return (
    <div>
      //today i will learn about API calling in React
      <h1>DATA from API</h1>
      <div ref={response1}></div>
      <button onClick={call}>Call API</button>
      <button onClick={show}>Show Data</button>
    </div>
  )
}

export default App