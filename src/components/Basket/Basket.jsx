import React from 'react'
import {basketItems} from '../../data/data'
import BasketItems from './BasketItems/BasketItems'
import backLine from '../../img/backLine.svg'
import { useNavigate } from 'react-router-dom'

const Basket = () => {

    const navigate = useNavigate();

    return (
        <div>
            <div className='productItems__header' style={{justifyContent: 'flex-start'}}>
                <button className='default-button' onClick={() => navigate(-1)}>
                    <img className='productItems__img' src={backLine} alt="Назад"/>
                </button>
                <p className='productItems__title' style={{marginLeft: '20px'}}>Корзина</p>
            </div>
            <div className='productItems'>
                {basketItems.map(item => {
                    return <BasketItems key={item.id} item={item} />
                })}
            </div>
        </div>
    )
}

export default Basket