import React from 'react'
import logo from '../../img/logo/logo.jpg'
import vk from '../../img/footer/vk.png'
import fb from '../../img/footer/fb.png'
import insta from '../../img/footer/insta.png'

const Footer = () => {
    return (
        <footer>
            <div className="wrapper">
                <div className="footer__wrapper">
                    <div className="footer__wrapper-info">
                        <div className="footer__logo">
                            <img src={logo} alt="logo"/>
                            <h5>sport discount russia</h5>
                        </div>
                        <p>2022 © Лучший дисконт-центр одежды, обуви и аксессуаров в Нижнем Новгороде. Все права защищены. Доставка по всей России.</p>
                    </div>
                    <div className="footer__wrapper-links">
                        <div className="footer__links-block">
                            <p>Основные ссылки</p>
                            <a href="#!">О компании</a>
                            <a href="#!">Каталог</a>
                            <a href="#!">Доставка</a>
                            <a href="#!">Оплата</a>
                        </div>
                        <div className="footer__links-block">
                            <p>Категории</p>
                            <a href="#!">Мужская одежда и обувь</a>
                            <a href="#!">Женская одежда и обувь</a>
                            <a href="#!">Детская одежда и обувь</a>
                            <a href="#!">Аксессуары</a>
                        </div>
                        <div className="footer__links-block">
                            <p>Полезные ссылки</p>
                            <a href="#!">Блог о моде</a>
                            <a href="#!">Наша миссия</a>
                        </div>
                        <div className="footer__links-block">
                            <p>Соц сети</p>
                            <a href="#!">
                                <img src={vk} alt="vk"/>
                                <p>VK.com</p>
                            </a>
                            <a href="#!">
                                <img src={fb} alt="facebook"/>
                                <p>Facebook</p>
                            </a>
                            <a href="#!">
                                <img src={insta} alt="insta"/>
                                <p>Instagram</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer