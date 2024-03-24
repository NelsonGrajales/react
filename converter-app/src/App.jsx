import { useEffect, useState } from 'react'
import axios, { Axios } from 'axios'
import Dropdown from 'react-dropdown'
import {HiSwitchHorizontal} from 'react-icons/hi';
import 'react-dropdown/style.css'
import './App.css'

function App() {
  const [info, setInfo] = useState([]);
  const [input, setInput] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [options, setOptions] = useState([]);
  const [output, setOutput] = useState(0);

  useEffect(() => {
    axios.get(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`)
      .then((res) => {
        setInfo(res.data[from]);
      })
  }, [from]);

  useEffect(() => {
    setOptions(Object.keys(info));
    convert();
  }, [info]);

  function convert() {
    let rate = info[to];
    setOutput(input * rate)
  }

  function flip() {
    let temp = from;
    setFrom(to);
    setTo(temp)
  }

  return(
    <div>
      <div>
        <h1>Currency converter</h1>
      </div>
      <div>
        <div>
          <h3>Amount</h3>
          <input type="text" placeholder='Enter the amount' onChange={(e) => setInput(e.target.value)}/>
        </div>
        <div>
          <h3>From</h3>
          <Dropdown options={options} onChange={(e) => {setFrom(e.value)}} value={from} placeholderClassName='From'></Dropdown>
        </div>
        <div>
          <HiSwitchHorizontal size="30px" onClick={() => {flip()}}></HiSwitchHorizontal>
        </div>
        <div>
          <h3>To</h3>
          <Dropdown options={options} onChange={(e) => {setTo(e.value)}} value={to} placeholder="To"></Dropdown>
        </div>
      </div>
      <div>
        <button onClick={() => {convert()}}>Convert</button>
        <h2>Converted Amount:</h2>
        <p>{input + " " + from + " = " + output.toFixed(2) + " " + to}</p>
      </div>
    </div>
  )

}

export default App