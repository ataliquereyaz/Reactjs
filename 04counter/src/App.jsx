import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter]=useState (10)  
  
  const addValue =()=> {
    setCounter(counter+1)
  setCounter((prevCounter) =>prevCounter+1)
  setCounter((prevCounter) =>prevCounter+1)
  setCounter((prevCounter) =>prevCounter+1)
  setCounter((prevCounter) =>prevCounter+1)
  if(counter===20){
    setCounter(counter+1)
   setCounter(counter=20)
  }
 }

 const removeValue =()=> {
  setCounter(counter-1)
  if(counter===0){
    setCounter(counter=0)
  }
 }

  return (
    <>
      <h1>Welcome to counter</h1>
      <h2>Counter:{counter} </h2>

      <button onClick={addValue}>add value</button>
      <button onClick={removeValue}>remove value</button>
      
    </>
  )
}

export default App
