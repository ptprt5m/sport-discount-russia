import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import Favorite from '../../../img/main/Favorites_red.png'
import {limitStr} from '../../../commons/func'

const ProductItem = ({product, numberWithCommas}) => {
    const [favorites, setFavorites] = useState(false)
    const [isAdded, setIsAdded] = useState(false)

    const toggleBasketAdded = () => {
        setIsAdded(!isAdded)
    }

    const favoriteAddFunc = () => {
        setFavorites(!favorites)
    }

    const test = () => {
        let a
        {
            product ? (a = product.id) : (a = null)
        }
        return a
    }

    return (
        <div className='main__item'>
            {product.sale !== 0 ?
                <div className='discountPercentage flex'>
                    <p>-{product.sale}%</p>
                </div>
                : null}
            {(product.publicationDate === '17.06.2022') ?
                <div className='newItem flex'>
                    <p>NEW</p>
                </div>
                : null}
            <a href="#!" className='addToFavorites' title='Добавить в избранное'>
                <img src={Favorite} alt='Favorites'/>
            </a>
            <NavLink to={'/products/' + product.id}>
                <img className='main__item-photo wh100' src={product.img} alt='Фото'/>
            </NavLink>
            <div className='main__item-wrapper'>
                <NavLink to={'/products/' + product.id}>
                    <h3 className='main__catsName'>{limitStr(product.name, 30)}</h3>
                </NavLink>
                <div className='main__item-group flex'>
                    {/*<div className='group__info-left flex'><img src={line} alt="Line"/>*/}
                    {/*    <p>Коричневый*/}
                    {/*        <br/> окрас</p>*/}
                    {/*</div>*/}
                    <div className='group__info'>
                        <p>Размеры US</p>
                        <p className='group__info-bold'>{product.sizes.join(', ')}</p>
                        {(product.sizes.length === 1) ? <span className='group__info-last'>Последний</span> : null}
                    </div>
                    <div className='group__info'>
                        <p>Пол</p>
                        <p className='group__info-bold'>{product.sex}</p>
                    </div>
                </div>
                <h4>{product.sale !== 0 ?
                    <div>
                        <span>{numberWithCommas(product.price)} руб.</span>
                    </div> : null}
                    {product.sale !== 0 ?
                        numberWithCommas(product.price - (product.price / 100 * product.sale)) :
                        numberWithCommas(product.price)} руб.
                </h4>
            </div>
            <div className={isAdded ? 'main__item-action-added flexColumn wh100' : 'main__item-action flexColumn wh100'} onClick={toggleBasketAdded}>
                <div className='main__item-action-text'>
                    {isAdded ? 'Убрать из корзины' : 'В корзину'}
                </div>
            </div>
        </div>
    )
}

export default ProductItem