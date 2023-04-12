import { useState } from 'react'
import './Temperature.css'
function Temperature(props) {
    const [tempImg, setTempImg] = useState('')
    const mainData = props.data

    if (mainData) {
        mainData.weather[0].main == "Clear" && setTempImg('./assets/weather-images/sun.png')
        mainData.weather[0].description == "overcast clouds" && setTempImg('./assets/weather-images/clouds.png')
    }

    return (
        <div id="temperature-container">
            <img src={tempImg} id="temperature-img" />
            <p id="temperature-integer">{props.data && `${Math.round(props.data.main.temp)}°C`}</p>
        </div>
    )
}

export default Temperature