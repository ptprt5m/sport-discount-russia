import React from 'react'
import {products} from '../../data/data'
import ProductItem from './ProductItem/ProductItem'
import Search from '../Search/Search'
import Vector from '../../img/main/Vector.png'

const ProductItems = ({numberWithCommas}) => {

    const sortByPrice = () => {

    }

    return (
        <div className="main__wrapper-content">
            <div className="main__wrapper-top">
                <div className="main__wrapper-search">
                    <p>Весь ассортимент</p>
                    <Search/>
                </div>
                <div className="main__wrapper-sortedBy">
                    <p>Сортировать по:</p>
                    <div className="main__wrapper-sortedBy_price"><a onClick={() => sortByPrice()}
                                                                     className="sortedBy__link">Цене</a> <img
                        src={Vector} alt="sorted by" id="price"/></div>
                    {/*<div className="main__wrapper-sortedBy_age"><a onClick="age()"*/}
                    {/*                                           className="sortedBy__link">Возрасту</a> <img*/}
                    {/*    src={Vector} alt="sorted by" id="age"/></div>*/}
                </div>
            </div>
            <div className="main__content">

                {products.map(product => {
                    return <ProductItem numberWithCommas={numberWithCommas} key={product.id} product={product}/>
                })}

            </div>
            <a href="#!" className="main__showMore">
                Показать еще 20
            </a>
        </div>
    )
}

export default ProductItems