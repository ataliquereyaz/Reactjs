import { useState } from "react"

function App() {
  const [color, setColor]= useState("olive")
  document.body.style.backgroundColor=color
return (
    <>
    <div style={{backgroundColor:color}}>
       <div>
      <button 
      onClick={()=> setColor("red")}
      style={{backgroundColor:"red"}}>Red</button>
      <button 
      onClick={()=> setColor("yellow")}
      style={{backgroundColor:"yellow"}}>Yellow</button>
      <button 
      onClick={()=> setColor("blue")}
      style={{backgroundColor:"blue"}}>Blue</button>
      <button 
      onClick={()=> setColor("orange")}
      style={{backgroundColor:"orange"}}>Orange</button>
      <button 
      onClick={()=> setColor("grey")}
      style={{backgroundColor:"grey"}}>Grey</button>
    </div>
    </div>
   
     </>

  )
}

export default App
