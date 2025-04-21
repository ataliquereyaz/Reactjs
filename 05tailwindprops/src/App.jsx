import './App.css'
import Cards from './components/Cards'

function App() {
let myobj={
  username:"atalique",
  email:"ar@google.com"
}

let myArray=[1,2,3]
return (
   <>
   <h1 className='bg-green-400 text-black p-4 rounded-xxl'>Tailwind test</h1>
   <Cards username="atalique" />
   <Cards username="reyaz"/>
   </>
  )
}

export default App
