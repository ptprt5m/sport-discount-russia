import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import Favorite from '../../../img/main/Favorites_red.png'

const ProductItem = ({product, numberWithCommas}) => {
    const [favorites, setFavorites] = useState(false)

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
                <div className='discountPercentage'>
                    <p>-{product.sale}%</p>
                </div>
                : null}
            <a href="#!" className='addToFavorites' title="Добавить в избранное">
                <img src={Favorite} alt="Favorites"/>
            </a>
            <NavLink to={'/products/' + product.id}>
                <img className="main__item-photo" src={product.img} alt="Фото"/>
            </NavLink>
            <div className="main__item-wrapper">
                <NavLink to={'/products/' + product.id}>
                    <h3 className="main__catsName">{product.name}</h3>
                </NavLink>
                <div className="main__item-group">
                    {/*<div className="group__info-left"><img src={line} alt="Line"/>*/}
                    {/*    <p>Коричневый*/}
                    {/*        <br/> окрас</p>*/}
                    {/*</div>*/}
                    <div className="group__info">
                        <p>Размеры US</p>
                        <p className="group__info-bold">{product.sizes.join(', ')}</p>
                    </div>
                    {/*<div className="group__info">*/}
                    {/*    <p>Сезон</p>*/}
                    {/*    <p className="group__info-bold">Лето/Спорт</p>*/}
                    {/*</div>*/}
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
            <div className="main__item-action"><a className="main__item-action-text" href="#!">В корзину</a></div>
        </div>
    )
}

export default ProductItem