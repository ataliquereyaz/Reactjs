import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

// function MyApp(){
//   return(
//     <div>
//       <h1>my app !!! new</h1>
//     </div>
//   )
// }

const AnotherElement=(
  <a href='https://google.com' target='_blank'>Vist google</a>
)

const username="atalique"
const reactElement= React.createElement(
  'a',
  {href:"https://google.com", target:"_blank"},
  "click here to visit google",
  username
)

createRoot(document.getElementById('root')).render(
  
  reactElement
)
