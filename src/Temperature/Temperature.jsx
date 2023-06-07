import { useEffect, useState } from 'react'
import './Temperature.css'
import sun from '../assets/weather-images/sun.png'
import partlyCloudy from '../assets/weather-images/partly-cloudy.png'
import rainyDay from '../assets/weather-images/rainy-day.png'
import clouds from '../assets/weather-images/clouds.png'
import cloud from '../assets/weather-images/cloud.png'
import rain from '../assets/weather-images/rain.png'
import wind from '../assets/weather-images/wind.png'
import snow from '../assets/weather-images/snow.png'
import mist from '../assets/weather-images/mist.png'
import thunderstorm from '../assets/weather-images/thunderstorm.png'

function Temperature({ data }) {
    const [tempImg, setTempImg] = useState('')
    const mainData = data

    useEffect(() => {
        let result = ''
        if (mainData) {
            if (mainData.weather[0].main == "Clear") result = sun
            if (mainData.weather[0].id >= 500 && mainData.weather[0].id <= 504) result = rainyDay
            if (mainData.weather[0].description == "overcast clouds" || mainData.weather[0].description == "broken clouds") result = clouds
            if (mainData.weather[0].description == "scattered clouds") result = cloud
            if (mainData.weather[0].description == "few clouds") result = partlyCloudy
            if (mainData.weather[0].description.includes("shower rain") || mainData.weather[0].main == "Drizzle") result = rain
            if (mainData.weather[0].main == "Wind") result = wind
            if (mainData.weather[0].main == "Snow" || mainData.weather[0].description == "freezing rain") result = snow
            if (mainData.weather[0].id >= 701 && mainData.weather[0].id <= 781) result = mist
            if (mainData.weather[0].main == "Thunderstorm") result = thunderstorm
            setTempImg(result)
        }
    }, [mainData])

    return (
        <div id="temperature-container">
            <img src={tempImg} id="temperature-img" />
            <p id="temperature-integer">{data && `${Math.round(data.main.temp)}°C`}</p>
        </div>
    )
}

export default Temperature