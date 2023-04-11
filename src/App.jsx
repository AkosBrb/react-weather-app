import AdditionalData from './AdditionalData/AdditionalData'
import Search from './Search/Search'
import Temperature from './Temperature/Temperature'
import './App.css'
import { useEffect, useState } from 'react'

function App() {

  const [city, setCity] = useState('')
  const [data, setData] = useState('')
  const apiKey = 'c3d51ea689596d793b31f2a7389e400d'

  useEffect(() => {
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`)
      .then(response => console.log(response))
  }, [])

  console.log(city)

  return (
    <div className='inside-container'>
      <Search city={city} setCity={setCity} />
      <Temperature data={data} />
      <AdditionalData data={data} />
    </div>
  )
}

export default App