import React from 'react'
import logo from '../../img/logo/logo.jpg'
import favorites from '../../img/favorites.svg'
import profile from '../../img/profile.svg'
import {NavLink} from 'react-router-dom'
import {products} from '../../data/data'

const Header = () => {
    return (
        <header className='header'>
            <div className='header__blur'>
                <div className='wrapper'>
                    <div className='header__wrapper flex'>
                        <div className='header__top-position flex wh100'>
                            <div className='header__left-position'>
                                <div className='header__logo flex'>
                                    <NavLink to={'/'}>
                                        <img src={logo} alt='Логотип'/>
                                    </NavLink>
                                    <div className='header__logo-about flexColumn'>
                                        <h1 className='header__logo-title'>
                                            SPORT DISCOUNT RUSSIA
                                        </h1>
                                        <h2 className='header__logo-subtitle'>
                                            Лучший дисконт-центр в Нижнем Новгороде!
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div className='header__right-position'>
                                <nav className='header__nav'>
                                    <NavLink className='header__nav-link header__nav-basket' to={'/basket'}
                                             alt='Корзина'>1295 руб</NavLink>
                                    <a className='header__nav-link' href='/'><img src={favorites} alt='Избранное'/></a>
                                    <a className='header__nav-link' href='/'><img src={profile} alt='Профиль'/></a>
                                </nav>
                            </div>
                        </div>
                        <h2 className='header__items-title'>
                            Сейчас в наличии {products.length} уникальных товаров
                        </h2>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header