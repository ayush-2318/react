import { useState } from 'react'

import './App.css'

function App() {
//  let counter=10;
const [counter,setCounter]=useState(10)
  const addValue=()=>{
     setCounter(counter+1);
     //console.log(counter)
  }

  const subValue=()=>{
    setCounter(counter-1);
  }

  return (
    <>
    <h1> React cousre with hitesh {counter}</h1>
    <h2>Counter value :{counter}</h2>
    <button onClick={addValue}>Add Value</button> {" "}
    <button onClick={subValue}>Remove Value</button>
    <p>footer:{counter} </p>
    </>
  )
}

export default App
