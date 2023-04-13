import { useEffect, useState } from 'react'
import './Temperature.css'
import sun from '../assets/weather-images/sun.png'
import partlyCloudy from '../assets/weather-images/partly-cloudy.png'
import clouds from '../assets/weather-images/clouds.png'
import rain from '../assets/weather-images/rain.png'
import wind from '../assets/weather-images/wind.png'
import snow from '../assets/weather-images/snow.png'
import mist from '../assets/weather-images/mist.png'

function Temperature(props) {
    const [tempImg, setTempImg] = useState('')
    const mainData = props.data

    useEffect(() => {
        let result = ''
        if (mainData) {
            if (mainData.weather[0].main == "Clear") result = sun
            if (mainData.weather[0].description == "overcast clouds") result = clouds
            if (mainData.weather[0].description == "broken clouds") result = partlyCloudy
            if (mainData.weather[0].main == "Rain") result = rain
            if (mainData.weather[0].main == "Wind") result = wind
            if (mainData.weather[0].main == "Snow") result = snow
            if (mainData.weather[0].main == "Mist") result = mist
            setTempImg(result)
        }
    }, [mainData])

    return (
        <div id="temperature-container">
            <img src={tempImg} id="temperature-img" />
            <p id="temperature-integer">{props.data && `${Math.round(props.data.main.temp)}°C`}</p>
        </div>
    )
}

export default Temperature