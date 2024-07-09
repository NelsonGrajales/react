import { useState } from 'react'
import './App.css'

function App() {
  const [isDay, setIsDay] = useState(0);
  const [isYear, setIsYear] = useState(0);
  const [isMonth, setIsMonth] = useState(0);

  const handleClick = (anio, mes, dia) => {
    const fechaActual = new Date();
    const usuario = new Date(isDay, isMonth - 1, isYear)
    console.log(fechaActual)
    console.log(usuario)
  }

  return (
    <>
      <form action="/submit" method="post">
        <div>
          <label for="nombre">Day</label>
          <input type="number" id="nombre" name="nombre" required value={isDay}
            onChange={(e) => setIsDay(e.target.value)} />
        </div>
        <div>
          <label for="email">Month</label>
          <input type="month" id="email" name="month" required value={isMonth}
            onChange={(e) => setIsMonth(e.target.value)} />
        </div>
        <div>
          <label for="pregunta">Year</label>
          <input type="number" id="pregunta" name="pregunta" required value={isYear}
            onChange={(e) => setIsYear(e.target.value)} />
        </div>
      </form>
      <button onClick={handleClick}><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-down" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 5l0 14" />
        <path d="M16 15l-4 4" />
        <path d="M8 15l4 4" />
      </svg></button>

      <div>
        <div>
          <span>{isDay}</span>
          <h1>years</h1>
        </div>
        <div>
          <span>{isMonth}</span>
          <h1>month</h1>
        </div>
        <div>
          <span>{isYear}</span>
          <h1>days</h1>
        </div>
      </div>
    </>
  )
}

export default App
