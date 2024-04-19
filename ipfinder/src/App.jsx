import { useEffect, useState } from 'react'
import './App.css'
import { Axios } from 'axios';
import Map from './Maps'

function App() {

  const [ipDetails, setIpDetails] = useState([]);
  const [lat, setLat] = useState(22.5726);
  const [lon, setLon] = useState(88.3832);

  useEffect(() => {
    Axios.get('https://ipapi.co/json/').then((res) => {
      setIpDetails(res.data);
      setLat(res.data.latitude);
      setLon(res.data.longitude);
    })
  }, [])

  return (
    <>
      <h1>IP address finder</h1>
      <div>
        <div>
          <h4>What is my IPv4 address?</h4>
          <h1>{ipDetails.ip}</h1>
          <h4>approximate location: </h4>
          <p>{ipDetails.city}, {ipDetails.region},{ipDetails.country_name}</p>
          <h4>Internet Service Provider(ISP): </h4>
          <p>{ipDetails.org}</p>
        </div>
        <Map lat={lat} lon={lon}></Map>
      </div>
    </>
  )
}

export default App
