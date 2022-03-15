/* Main Component */ 

import React, { useState } from 'react';

const Search = () => {

    const [search, setSearch] = useState('');

    const searchUser = (e) => {

    }

    return (
        <React.Fragment>
            <div className="github-search">
                <div className="search">
                    <input type="text" value={search} onChange={searchUser} />
                </div>
                <button>Search</button>
            </div>
        </React.Fragment>
    )
}

export default Search;