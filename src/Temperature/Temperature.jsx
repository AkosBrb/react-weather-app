import { useState } from 'react'
import './Temperature.css'
function Temperature() {
    const [tempImg, setTempImg] = useState('')
    const [tempInteger, setTempInteger] = useState('')

    return (
        <div id="temperature-container">
            <img src={tempImg} id="temperature-img" />
            <p id="temperature-integer">{tempInteger}</p>
        </div>
    )
}

export default Temperature