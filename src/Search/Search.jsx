import { GoLocation } from 'react-icons/go'
import { BiSearchAlt } from 'react-icons/bi'
import './Search.css'
function Search(props) {

    function inputReader(event) {
        if (event.key === "Enter") return props.setCity(event.target.value)
    }

    return (
        <div id="search-container">
            <GoLocation size={50} />
            <input onKeyDown={inputReader} id="city-input" type="text" placeholder="City..." />
            <button id="search-button"><BiSearchAlt size={35} color='white' /></button>
        </div>
    )
}

export default Search