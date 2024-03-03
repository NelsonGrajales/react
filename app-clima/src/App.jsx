import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import sun from '../src/assets/01_sunny_color_w32.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='contenedor'> 
      <div className='city'>
        <div className='top'>
          <span>New York</span>
          <span>09:30</span>
        </div>
        <img className="img" src={sun} alt="" />                 
        <div className='bottom'>
          <span>AQUI 70</span>          
          <span> -5-0</span>   
        </div>
      </div> 
    </div>      
  )
}

export default App
