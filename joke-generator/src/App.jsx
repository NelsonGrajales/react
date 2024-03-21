import { useState } from 'react'
import './App.css'
import Joke from './components/Joke'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Joke Generator Using React and Joke API</h1>
      <Joke></Joke>
    </div>
  )
}

export default App
