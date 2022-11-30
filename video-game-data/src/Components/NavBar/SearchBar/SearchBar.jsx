import { useState } from "react";

const SearchBar = ({ gameData, setSearchResults }) => {
    const [searchCriteria, setSearchCriteria] = useState('')

    const handleChange = e => setSearchCriteria(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        const filteredData = gameData.filter((games) => {
            return Object.values(games).join('').toLowerCase().includes(searchCriteria.toLowerCase());
        });
        setSearchResults(filteredData)
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input placeholder="Search Game" type="text" value={searchCriteria} onChange={handleChange} />
            <button type="submit">Search</button>
        </form> 
    );
};
 
export default SearchBar;