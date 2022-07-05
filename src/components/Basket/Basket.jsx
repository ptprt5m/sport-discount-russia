import React, {useEffect} from 'react'
import BasketItems from './BasketItems/BasketItems'
import backLine from '../../img/backLine.svg'
import {useNavigate} from 'react-router-dom'
import Search from '../Search/Search'
import Vector from '../../img/main/Vector.png'
import {basketItemsData} from '../../data/data'

const Basket = ({numberWithCommas, setBasketItems, basketItems}) => {

    const navigate = useNavigate();

    useEffect(() => {
        setBasketItems(basketItemsData)
    }, [])

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
                    return <BasketItems numberWithCommas={numberWithCommas} key={item.id} item={item}/>
                }) : null}
            </div>
            <div className='main__checkout flex wh100'>
                <p>К оплате: <span>{numberWithCommas(basketItems.reduce((total, item) => {
                    return total + ((item.sale !== 0) ? (item.price - (item.price / 100 * item.sale)) : item.price)
                }, 0))}</span> руб.</p>
                <button href='#!' className='main__checkout-button'>
                    Оформить заказ
                </button>
            </div>
        </div>
    )
}

export default Basket