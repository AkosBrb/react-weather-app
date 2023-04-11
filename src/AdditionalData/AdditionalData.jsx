import { WiHumidity } from 'react-icons/wi'
import { MdWindPower } from 'react-icons/md'
import './AdditionalData.css'
import { useState } from 'react'
function AdditionalData() {
    const [windInteger, setWindInteger] = useState('')
    const [humidityInteger, setHumidityInteger] = useState('')

    return (
        <div id="additional-data-container">
            <div id="wind-container">
                <MdWindPower size={45} />
                <span id="wind-integer">{windInteger}</span>
            </div>
            <div id="humidity-container">
                <WiHumidity size={45} />
                <span id="humidity-integer">{humidityInteger}</span>
            </div>
        </div>
    )
}

export default AdditionalData