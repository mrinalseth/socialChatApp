import React from 'react'

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder='Search' />
      </div>
      <div className="userChat">
        <img src="https://picsum.photos/200" alt="" />
        <div className="userChatInfo">
          <span>Mrinal</span>
        </div>
      </div>
    </div>
  )
}

export default Search