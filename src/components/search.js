/* Search */ 
import React, { useState } from 'react';

const Search = ({searchUser}) => {

    const [search, setSearch] = useState('HardikGohilHLR');

    const handle = {
        search: (e) => {
            setSearch(e?.target?.value);
        },
        submit: (e) => {
            e?.preventDefault();
            searchUser(search);
        }
    } 

    return (
        <React.Fragment>
            <form className="github-search">

                <div className="search">
                    <input type="text" value={search} placeholder="Type 3 characters to search" onChange={handle.search} />
                </div>

                <button className={search?.length > 3 ? '' : 'disabled'} onClick={handle.submit}>Search</button>

            </form>
        </React.Fragment>
    )
}

export default Search;