import { GoLocation } from 'react-icons/go'
import { BiSearchAlt } from 'react-icons/bi'
import './Search.css'
function Search(props) {
    let result = null;
    function inputReader(event) {
        if (event.key === "Enter") return props.setCity(event.target.value)
    }

    function reader(event) {
        return result = event.target.value
    }

    function clickHandler() {
        return props.setCity(result)
    }

    return (
        <div id="search-container">
            <GoLocation size={50} />
            <input onChange={reader} onKeyDown={inputReader} id="city-input" type="text" placeholder="City..." />
            <button onClick={clickHandler} id="search-button"><BiSearchAlt size={35} color='white' /></button>
        </div>
    )
}

export default Search