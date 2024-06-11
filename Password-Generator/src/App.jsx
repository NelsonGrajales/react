import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const randomPass = (length, options) => {
  const { isUppercase, isLowercase, isNumber, isSymbols } = options;
  let characters = '';
  let result = '';

  if (isUppercase) {
    characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  if (isLowercase) {
    characters += 'abcdefghijklmnopqrstuvwxyz';
  }
  if (isNumber) {
    characters += '0123456789';
  }
  if (isSymbols) {
    characters += '!@#$%^&*()_+[]{}|;:,.<>?';
  }

  const charLength = characters.length;
  if (charLength === 0) {
    return '';
  }

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charLength));
  }

  return result;
};

function App() {
  const [isUppercase, setIsUppercase] = useState(true)
  const [isLowercase, setIsLowercase] = useState(false)
  const [isNumber, setIsNumber] = useState(false)
  const [isSymbols, setIsSymbols] = useState(false)
  const [isValue, setIsValue] = useState(10)
  const [isPass, setIsPass] = useState(randomPass(isValue, { isUppercase, isLowercase, isNumber, isSymbols }))

  const handleUppercase = (event) => {
    setIsUppercase(event.target.checked)
  }
  const handleLowercase = (event) => {
    setIsLowercase(event.target.checked)
  }
  const handleNumber = (event) => {
    setIsNumber(event.target.checked)
  }
  const handleSymbols = (event) => {
    setIsSymbols(event.target.checked)
  }

  const handleValue = (event) => {
    setIsValue(event.target.value)
  }


  useEffect(() => {
    const options = { isUppercase, isLowercase, isNumber, isSymbols };
    const result = randomPass(isValue, options);
    setIsPass(result);


  }, [isLowercase, isNumber, isSymbols, isUppercase, isValue])
  return (
    <div>
      <h2>Password Generator</h2>
      <header className='mb-4 bg-zinc-800 flex justify-between items-center'>
        <span className='ml-8 text-xl font-bold text-slate-700'>{isPass}</span>
        <button className='bg-transparent'>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-copy" width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" />
            <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
          </svg>
        </button>
      </header>
      <main className='flex flex-col  gap-2.5 content-around bg-zinc-800 h-96 w-96 p-4'>
        <div className='flex justify-between'>
          <p>Character Length </p>
          <span>{isValue}</span>
        </div>
        <input type="range" name="" id="" min="0" max="25" value={isValue} onChange={handleValue} />
        <label className='flex gap-4'>
          <input type="checkbox" name="" id="" checked={isUppercase} onChange={handleUppercase} />
          Include Uppercase letters
        </label>
        <label className='flex gap-4'>
          <input type="checkbox" name="" id="" checked={isLowercase} onChange={handleLowercase} />
          Include Lowercase letters
        </label>
        <label className='flex gap-4'>
          <input type="checkbox" name="" id="" checked={isNumber} onChange={handleNumber} />
          Include Numbers
        </label>
        <label className='flex gap-4'>
          <input type="checkbox" name="" id="" checked={isSymbols} onChange={handleSymbols} />
          Inlude Symbols
        </label>
        <div className='bg-zinc-900'>
          <p>Strength</p>
          <p>Hard</p>
        </div>
        <button className='bg-green-600 font-semibold text-zinc-900'>GENERATE</button>
      </main>
    </div>
  )
}

export default App
