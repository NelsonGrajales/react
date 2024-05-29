import { useState } from 'react'
import './App.css'

function App() {
  const [isLeft, isIsLeft] = useState(1)
  const img = ['https://w.wallhaven.cc/full/2y/wallhaven-2ywd3y.png', 'https://w.wallhaven.cc/full/gp/wallhaven-gpky1q.png', 'https://w.wallhaven.cc/full/zy/wallhaven-zyj28v.jpg']
  function handleClick() {
    console.log("aa")
  }
  return (
    <div className=''>
      <button onClick={handleClick}><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-badge-left-filled" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M17 6h-6a1 1 0 0 0 -.78 .375l-4 5a1 1 0 0 0 0 1.25l4 5a1 1 0 0 0 .78 .375h6l.112 -.006a1 1 0 0 0 .669 -1.619l-3.501 -4.375l3.5 -4.375a1 1 0 0 0 -.78 -1.625z" stroke-width="0" fill="currentColor" />
      </svg>
      </button>
      <img src="" alt="" />
      <button onClick={handleClick}>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-badge-right-filled" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M7 6l-.112 .006a1 1 0 0 0 -.669 1.619l3.501 4.375l-3.5 4.375a1 1 0 0 0 .78 1.625h6a1 1 0 0 0 .78 -.375l4 -5a1 1 0 0 0 0 -1.25l-4 -5a1 1 0 0 0 -.78 -.375h-6z" stroke-width="0" fill="currentColor" />
        </svg>
      </button>
    </div>
  )
}

export default App
