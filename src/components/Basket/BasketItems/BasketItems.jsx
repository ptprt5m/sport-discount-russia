import React from 'react'
import del from '../../../img/del.svg'
import {NavLink} from "react-router-dom";
import Favorite from "../../../img/main/Favorites_red.png";

const BasketItems = ({item, numberWithCommas}) => {

    const deleteItemsFromBasket = () => {
        return window.confirm('Вы действительно хотите удалить этот товар из корзины?')
    }

    return (
        <div className='main__basket-item'>
            <div className='main__basket-photoBlock'>
                {item.sale !== 0 ?
                    <div className='discountPercentage'>
                        <p>-{item.sale}%</p>
                    </div>
                    : null}
                <a href="#!" className='addToFavorites' title="Добавить в избранное">
                    <img src={Favorite} alt="Favorites"/>
                </a>
                <NavLink to={'/products/' + item.id}>
                    <img className='main__basket-photo' src={item.img} alt="Фото"/>
                </NavLink>
            </div>
            <div className='main__basket-desc'>
                <NavLink to={'/products/' + item.id}>
                    <h3 className='main__basket-title'>{item.name}<span>(Art. {item.art})</span></h3>
                </NavLink>
                <div className='main__basket-sizes'>
                    <div className="group__info">
                        <p>Выберите Ваш размер в US:</p>

                        {item.sizes.map(size => {
                            return (
                                <label className="checkbox-btn">
                                    <input type="checkbox"/>
                                    <span>{size}</span>
                                </label>
                            )
                        })}

                        {/*<p className="group__info-bold">{item.sizes.join(', ')}</p>*/}
                    </div>
                </div>
                <h4 className='main__basket-price'>{item.sale !== 0 ? numberWithCommas(item.price - (item.price / 100 * item.sale)) : numberWithCommas(item.price)} руб. {item.sale !== 0 ?
                    <span>{numberWithCommas(item.price)} руб.</span>
                    : null}</h4>
            </div>
            <div className="main__basket-buttonsGroup">
                <button className='default-button' onClick={deleteItemsFromBasket}>
                    <img src={del} alt="Удалить товар"/>
                </button>
            </div>
        </div>
    )
}

export default BasketItems