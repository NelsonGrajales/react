import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='contenedor'>
      <div className='info'>
        <p className='ciudad'>Venice, CA</p>
        <span className='temperatura'>23/20</span>
        <div className='datos'>
          <span>Wind <br /> sw 25km/h</span>
          <span>Humidity <br /> 75%</span>
          <span>uv index  <br /> 0/10</span>
        </div>
      </div>
      <div className="luna"></div>   
       
    </div>      
  )
}

export default App
