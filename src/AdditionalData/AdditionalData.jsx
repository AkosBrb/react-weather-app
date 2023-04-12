import { WiHumidity } from 'react-icons/wi'
import { MdWindPower } from 'react-icons/md'
import './AdditionalData.css'
function AdditionalData(props) {


    return (
        <div id="additional-data-container">
            <div id="wind-container">
                <MdWindPower size={45} />
                <span id="wind-integer">{props.data && props.data.wind.speed}</span>
            </div>
            <div id="humidity-container">
                <WiHumidity size={45} />
                <span id="humidity-integer">{props.data && props.data.main.humidity}</span>
            </div>
        </div>
    )
}

export default AdditionalData