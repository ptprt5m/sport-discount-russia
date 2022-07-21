import React, {useEffect} from 'react'
import BasketItems from './BasketItems/BasketItems'
import backLine from '../../img/backLine.svg'
import {useNavigate} from 'react-router-dom'
import Search from '../Search/Search'
import Vector from '../../img/main/Vector.png'

const Basket = ({numberWithCommas, basketItems, deleteItemFromBasket, getBasketItems}) => {

    const navigate = useNavigate();

    useEffect(() => {
        getBasketItems()
    }, [])

    // useEffect(() => {
    //     if (items.length > 0) {
    //         for (let i = 0; i < items.length; i++) {
    //             for (let j = 0; j < basketItems.length; j++) {
    //                 if (basketItems[j] === items[i].id) {
    //                     setBasketItemsArray([...basketItemsArray, items[i]])
    //                 }
    //             }
    //         }
    //     }
    // }, [items])

    return (
        <div className='basketPage flexColumn wh100'>
            <div className='wh100'>
                <div className='main__wrapper-titleBlock flex'>
                    <div className='main__wrapper-back flex'>
                        <button className='default-button' onClick={() => navigate(-1)}>
                            <img src={backLine} alt='Назад'/>
                        </button>
                        <p>Корзина</p>
                    </div>
                    <Search/>
                </div>
                <div className='main__wrapper-sortedBy flex'>
                    <p>Сортировать по:</p>
                    <div className='main__wrapper-sortedBy_price'><a onClick={() => alert('hello')}
                                                                     className='sortedBy__link'>Цене</a> <img
                        src={Vector} alt='sorted by' id='price'/></div>
                    {/*<div className="main__wrapper-sortedBy_age"><a onClick="age()"*/}
                    {/*                                           className="sortedBy__link">Возрасту</a> <img*/}
                    {/*    src={Vector} alt="sorted by" id="age"/></div>*/}
                </div>
            </div>
            <div className='basketPage__container flexColumn wh100'>
                {basketItems ? basketItems.map(item => {
                    return <BasketItems deleteItemFromBasket={deleteItemFromBasket} numberWithCommas={numberWithCommas} key={item.id} item={item.items}/>
                }) : null}
            </div>
            <div className='main__checkout flex wh100'>
                <p>К оплате: <span>{numberWithCommas(basketItems.reduce((total, item) => {
                    return total + ((item.items.sale !== 0) ? (item.items.price - (item.items.price / 100 * item.items.sale)) : item.items.price)
                }, 0))}</span> руб.</p>
                <button href='#!' className='main__checkout-button'>
                    Оформить заказ
                </button>
            </div>
        </div>
    )
}

export default Basket