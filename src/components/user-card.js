/* User Card */ 

import React from 'react';

const UserCard = ({user}) => {

    const getJoiningDate = date => {
        return new Date(date)?.toLocaleDateString('en-US', {
            year: 'numeric', month: 'short', day: 'numeric'
        });
    } 

    return (
        <React.Fragment>
        
            <div className="github-user flex">
                <div className="github-user-avatar">
                    <div className="github-user-avatar-img">
                        <img src={user?.avatar_url} alt={user?.name} title={user?.name} />
                    </div>
                </div>
                <div className="github-user-info">
                    <div className="github-user-header flex">
                        <div className="github-user-name">
                            <h2>{user?.name}</h2>
                            <a target="_blank" href={user?.html_url}>@{user?.login}</a>
                        </div>
                        <h5>Joined {getJoiningDate(user?.created_at)}</h5>
                    </div>
                    
                    <div className="github-user-bio">
                        <p>{user?.bio || '-'}</p>
                    </div>
                    
                    <div className="github-user-repo flex">
                        <div className="github-user-repo-block">
                            <span>Repos</span>
                            <h4>{user?.public_repos || '-'}</h4>
                        </div>
                        <div className="github-user-repo-block">
                            <span>Followers</span>
                            <h4>{user?.followers || '-'}</h4>
                        </div>
                        <div className="github-user-repo-block">
                            <span>Following</span>
                            <h4>{user?.following || '-'}</h4>
                        </div>
                    </div>

                    <div className="github-user-links flex">
                        <div className="github-user-link-block flex">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z" fill="#cee3e9" />
                                </svg>
                            </span>
                            <h5>{user?.location || '-'}</h5>
                        </div>
                        <div className="github-user-link-block flex">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" fill="#cee3e9" />
                                </svg>
                            </span>
                            <h5>
                                {
                                    user?.twitter_username ?
                                    <a target="_blank" href={`https://twitter.com/${user?.twitter_username}`}>{user?.twitter_username}</a>
                                    : '-'
                                }
                            </h5>
                        </div>
                        <div className="github-user-link-block flex">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                    <path d="M172.5 131.1C228.1 75.51 320.5 75.51 376.1 131.1C426.1 181.1 433.5 260.8 392.4 318.3L391.3 319.9C381 334.2 361 337.6 346.7 327.3C332.3 317 328.9 297 339.2 282.7L340.3 281.1C363.2 249 359.6 205.1 331.7 177.2C300.3 145.8 249.2 145.8 217.7 177.2L105.5 289.5C73.99 320.1 73.99 372 105.5 403.5C133.3 431.4 177.3 435 209.3 412.1L210.9 410.1C225.3 400.7 245.3 404 255.5 418.4C265.8 432.8 262.5 452.8 248.1 463.1L246.5 464.2C188.1 505.3 110.2 498.7 60.21 448.8C3.741 392.3 3.741 300.7 60.21 244.3L172.5 131.1zM467.5 380C411 436.5 319.5 436.5 263 380C213 330 206.5 251.2 247.6 193.7L248.7 192.1C258.1 177.8 278.1 174.4 293.3 184.7C307.7 194.1 311.1 214.1 300.8 229.3L299.7 230.9C276.8 262.1 280.4 306.9 308.3 334.8C339.7 366.2 390.8 366.2 422.3 334.8L534.5 222.5C566 191 566 139.1 534.5 108.5C506.7 80.63 462.7 76.99 430.7 99.9L429.1 101C414.7 111.3 394.7 107.1 384.5 93.58C374.2 79.2 377.5 59.21 391.9 48.94L393.5 47.82C451 6.731 529.8 13.25 579.8 63.24C636.3 119.7 636.3 211.3 579.8 267.7L467.5 380z" fill="#cee3e9" />
                                </svg>
                            </span>
                            <h5>
                                {
                                    user?.blog ?
                                    <a target="_blank" href={user?.blog}>{user?.blog}</a>
                                    : '-'
                                }
                            </h5>
                        </div>
                        <div className="github-user-link-block flex">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path d="M336 0C362.5 0 384 21.49 384 48V464C384 490.5 362.5 512 336 512H240V432C240 405.5 218.5 384 192 384C165.5 384 144 405.5 144 432V512H48C21.49 512 0 490.5 0 464V48C0 21.49 21.49 0 48 0H336zM64 272C64 280.8 71.16 288 80 288H112C120.8 288 128 280.8 128 272V240C128 231.2 120.8 224 112 224H80C71.16 224 64 231.2 64 240V272zM176 224C167.2 224 160 231.2 160 240V272C160 280.8 167.2 288 176 288H208C216.8 288 224 280.8 224 272V240C224 231.2 216.8 224 208 224H176zM256 272C256 280.8 263.2 288 272 288H304C312.8 288 320 280.8 320 272V240C320 231.2 312.8 224 304 224H272C263.2 224 256 231.2 256 240V272zM80 96C71.16 96 64 103.2 64 112V144C64 152.8 71.16 160 80 160H112C120.8 160 128 152.8 128 144V112C128 103.2 120.8 96 112 96H80zM160 144C160 152.8 167.2 160 176 160H208C216.8 160 224 152.8 224 144V112C224 103.2 216.8 96 208 96H176C167.2 96 160 103.2 160 112V144zM272 96C263.2 96 256 103.2 256 112V144C256 152.8 263.2 160 272 160H304C312.8 160 320 152.8 320 144V112C320 103.2 312.8 96 304 96H272z" fill="#cee3e9" />
                                </svg>
                            </span>
                            <h5>{user?.company || '-'}</h5>
                        </div>
                    </div>

                </div>
            </div>

        </React.Fragment>   
    )
}

export default UserCard;