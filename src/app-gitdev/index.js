/* Main Component */ 

import React, { useState, useEffect } from 'react';

// Components
import Search from '../components/search';
import UserCard from '../components/user-card';

const GitDev = () => {

    const [user, setUser] = useState({});

    useEffect(() => {
        searchUser('HardikGohilHLR');
    }, []);    
    
    const searchUser = (value) => {
        fetch(`https://api.github.com/users/${value}`)
        .then(res => res.json())
        .then(data => setUser(data));
    } 

    console.log('data',user);

    return (
        <React.Fragment>
            <div className="content">
                <div className="app-container">
                    <div className="header">    
                        <h1>GitDev Finder</h1>
                    </div>

                    <Search searchUser={searchUser} />
                    
                    {
                        Object.keys(user)?.length > 0 &&
                        <>
                        {
                            user?.message === 'Not Found' ?
                            <div className="github-user-not-found">
                                <h3>No User Found.</h3>
                            </div>
                            :
                            <UserCard user={user} />
                        }
                        
                        </>
                    }
                    
                </div>
            </div>
        </React.Fragment>
    )
}

export default GitDev;