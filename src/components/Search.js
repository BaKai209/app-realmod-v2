import React from 'react'

const Search = () => {
  return (
    <div className='search'>
        {/* Search Top */}
        <div className='search__top'>
            <button className='search__filter'>Sell</button>
            <button className='search__filter'>Buy</button>
            <button className='search__filter'>Rent</button>
        </div>
        {/* Search Bottom */}
        <div className='search__bottom'>
            <div>
                <input 
                className='search__input'
                type='text' 
                placeholder='Enter keyword here ...' />

                <select
                className='search__select'
                >
                    <option value="" defaultValue>Select Location</option>
                    <option value="california">California</option>
                    <option value="newyork">New York</option>
                    <option value="utah">Utah</option>
                </select>
            </div>

             {/* Buttons Search */}
        <div className='search__actions'>
            <span className='search__iconBox'>
            <img 
            className='search__iconImage'
            src='https://res.cloudinary.com/dke83t4p2/image/upload/v1653241863/Realmod/icons/Icon_h53vt8.png' 
            alt='Filter Icon'/>
            </span>
            <button className='search__buttonSearch'>Search</button>
        </div>

        {/* Buttons Search */}

        </div>
        
       
    </div>
  )
}

export default Search