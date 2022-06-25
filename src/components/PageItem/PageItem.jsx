import React from 'react'
import {products} from '../../data/data'
import Favorite from "../../img/main/Favorites_red.png";
import backLine from "../../img/backLine.svg";
import {useNavigate} from "react-router-dom";

const PageItem = ({numberWithCommas}) => {

    const navigate = useNavigate();

    return (
        <div className='productCard'>
            <div className="main__wrapper-back">
                <button className="default-button" onClick={() => navigate(-1)}>
                    <img src={backLine} alt="Назад"/>
                </button>
                <p>Описание</p>
            </div>
            <div className='productCard__mainBlock'>
                <div className='productCard__mainBlock-photo'>
                    {products[0].sale !== 0 ?
                        <div className='discountPercentage flex'>
                            <p>-{products[0].sale}%</p>
                        </div>
                        : null}
                    {(products[0].publicationDate === '17.06.2022') ?
                        <div className='newItem flex'>
                            <p>NEW</p>
                        </div>
                        : null}
                    <a href="#!" className='addToFavorites' title="Добавить в избранное">
                        <img src={Favorite} alt="Favorites"/>
                    </a>
                    <img className='productCard__mainBlock-photo_img' src={products[0].img} alt="Фото товара"/>
                </div>
                <div className='productCard__mainBlock-about'>
                    <h3 className='productCard__mainBlock-about_name'>{products[0].name}</h3>
                    <span className='productCard__mainBlock-about_art'>Art. {products[0].art}</span>
                    <p className='productCard__mainBlock-about_desc'>{products[0].desc}</p>
                    <p className='productCard__mainBlock-about_sizes'>Размеры: <span>{products[0].sizes.join(', ')}</span>
                    </p>
                    <p className='productCard__mainBlock-about_sex'>Пол: <span>{products[0].sex}</span></p>
                    <p className='productCard__mainBlock-about_price'>
                        {products[0].sale !== 0 ?
                            <div>
                                <span>{numberWithCommas(products[0].price)} руб.</span>
                            </div> : null}
                        {products[0].sale !== 0 ?
                            numberWithCommas(products[0].price - (products[0].price / 100 * products[0].sale)) :
                            numberWithCommas(products[0].price)} руб.
                    </p>
                </div>
            </div>
            <a className='productCard__addToBasket' href="#!">Добавить в корзину</a>
        </div>
    )
}

export default PageItem