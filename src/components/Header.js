import React from 'react'
import Search from './Search'

const Header = () => {
    return (

        <header className='header'>
            <div className='header__container'>
                <div className='header__box'>
                    
                <h2 className='header__title'>Find The Perfect Place to Live With your Family</h2>
                    <Search />
                </div>

            </div>
        </header>
    )
}

export default Header