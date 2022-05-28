import React from 'react'
import logo from '../../img/logo.png'
import favorites from '../../img/favorites.svg'
import profile from '../../img/profile.svg'

const Header = () => {
    return (
        <header className='header'>
            <div className='header-left'>
                <img className='header__logo' src={logo} alt="Логотип"/>
                <div className='header__logoBlock'>
                    <h1 className='header__logoBlock-title'>
                        SPORT DISCOUNT RUSSIA
                    </h1>
                    <h2 className='header__logoBlock-subtitle'>
                        Лучший дисконт-центр в Нижнем Новгороде!
                    </h2>
                </div>
            </div>
            <div className='header-right'>
                <a className='header__orderPrice' href="/">1295 руб</a>
                <a className='header__icons' href="/"><img src={favorites} alt="Избранное"/></a>
                <a className='header__icons' href="/"><img src={profile} alt="Профиль"/></a>
            </div>
        </header>
    )
}

export default Header