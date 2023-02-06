import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/fontawesome-free-solid'

const Search = () => {
    
    return (
        <div className='search-area'>
            <form action="/" method="get" className='minisearch'>
        
                <input
                    type="text"
                    id="header-search"
                    placeholder="Search..."
                    name="search" 
                />
                <button type="submit" className='action'><FontAwesomeIcon icon={faSearch} /></button>
            </form>
        </div>
    )
}

export default Search