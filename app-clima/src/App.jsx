import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import sun from '../src/assets/01_sunny_color_w32.png'
import { weather } from './services/clima'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='contenedor'> 
      <div className='d'>
        <h1 className='b'>Hongkong</h1>
        <p className='c'>09:30 • 03/08</p>
        <span className='g'>24°</span>
        <img className='l' src={sun} alt="" />
        <div></div>
      </div>
      
    </div>      
  )
}

export default App
