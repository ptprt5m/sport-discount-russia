import React from 'react'
import del from '../../../img/del.svg'
import {NavLink} from 'react-router-dom'
import Favorite from '../../../img/main/Favorites_red.png'
import {limitStr} from '../../../commons/func'

const BasketItems = ({item, numberWithCommas, deleteItemFromBasket}) => {

    const basketDelete = (id) => {
        let resultDel = window.confirm('Вы действительно хотите удалить этот товар из корзины?')
        if (resultDel) {
            deleteItemFromBasket(item.id)
        }
    }

    const publicationDate = item.publicationDate;
    const publicationDateInMs = new Date(publicationDate);
    const dateNow = new Date()

    return (
        <div className='basketPage__container-item flex wh100'>
            <div className='basketPage__container-photoBlock'>
                {item.sale !== 0 ?
                    <div className='discountPercentage flex'>
                        <p>-{item.sale}%</p>
                    </div>
                    : null}
                {((dateNow.getTime() - 604800000) < publicationDateInMs.getTime()) ?
                    <div className='newItem flex'>
                        <p>NEW</p>
                    </div>
                    : null}
                <a href="#!" className='addToFavorites' title="Добавить в избранное">
                    <img src={Favorite} alt="Favorites"/>
                </a>
                <NavLink to={'/products/' + item.id}>
                    <img className='basketPage__container-photo wh100' src={item.img} alt="Фото"/>
                </NavLink>
            </div>
            <div className='basketPage__container-desc flexColumn'>
                <NavLink to={'/products/' + item.id}>
                    <h3 className='basketPage__container-title flex'>{limitStr(item.name, 45)}<span>(Art. {item.art})</span></h3>
                </NavLink>
                <div className='basketPage__container-sizes'>
                    <div className='group__info'>
                        <p>Выберите Ваш размер в US:</p>

                        {item.sizes.map(size => {
                            return (
                                <label className='checkbox-btn'>
                                    <input type='checkbox'/>
                                    <span>{size}</span>
                                </label>
                            )
                        })}

                        {/*<p className="group__info-bold">{item.sizes.join(', ')}</p>*/}
                    </div>
                </div>
                <h4 className='basketPage__container-price flex'>{item.sale !== 0 ? numberWithCommas(item.price - (item.price / 100 * item.sale)) : numberWithCommas(item.price)} руб. {item.sale !== 0 ?
                    <span>{numberWithCommas(item.price)} руб.</span>
                    : null}</h4>
            </div>
            <div className='basketPage__container-buttonsGroup flexColumn'>
                <button className='default-button' onClick={() => basketDelete(item.id)}>
                    <img src={del} alt="Удалить товар"/>
                </button>
            </div>
        </div>
    )
}

export default BasketItems