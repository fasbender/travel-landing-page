import React from 'react'

const Search = () => {
  return (
    <div className='search'>
        <div className='dropdown'>
            <div className='dropdown-item'>
                <span>Date</span>
                <select>
                    <option value="1">Tue, 3 Nov</option>
                    <option value="2">Wed, 6 Dec</option>
                    <option value="3">Sun, 10 Jan</option>
                </select>
            </div>
            <div className='dropdown-item'>
                <span>Country</span>
                <select>
                    <option value="1">Morocco</option>
                    <option value="2">Italy</option>
                    <option value="3">Spain</option>
                </select>
            </div>
            <div className='dropdown-item'>
                <span>Place</span>
                <select>
                    <option value="1">Loften</option>
                    <option value="2">Madrid</option>
                    <option value="3">Barcelona</option>
                </select>
            </div>
            <div className='search-button'>
                <button>Search</button>
            </div>
        </div>
    </div>
  )
}

export default Search