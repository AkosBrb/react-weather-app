import AdditionalData from './AdditionalData/AdditionalData'
import Search from './Search/Search'
import Temperature from './Temperature/Temperature'
import './App.css'
import { useLayoutEffect, useRef, useState } from 'react'

function App() {

  const [city, setCity] = useState('')
  const [data, setData] = useState('')
  const [longitude, setLongitude] = useState('')
  const [latitude, setLatiTude] = useState('')
  const apiKey = 'c3d51ea689596d793b31f2a7389e400d'

  const firstUpdate = useRef(true);
  useLayoutEffect(() => {
    if (firstUpdate.current) {
      return;
    }
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`)
      .then(response => response.json())
      .then(coordinates => {
        setLongitude(coordinates[0].lon)
        setLatiTude(coordinates[0].lat)
      })
  }, [city])

  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`)
      .then(response => response.json())
      .then(weatherData => {
        setData(weatherData)
        console.log(weatherData)
      })
  }, [longitude, latitude])

  return (
    <div className='inside-container'>
      <Search city={city} setCity={setCity} />
      <Temperature data={data} />
      <AdditionalData data={data} />
    </div>
  )
}

export default App