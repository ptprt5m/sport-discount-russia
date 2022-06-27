import React from 'react'
import {products} from '../../data/data'
import ProductItem from './ProductItem/ProductItem'
import Search from '../Search/Search'
import Vector from '../../img/main/Vector.png'

const ProductItems = ({numberWithCommas}) => {

    const sortByPrice = () => {

    }

    return (
        <div className='flexColumn wh100'>
            <div className='wh100'>
                <div className='main__wrapper-titleBlock flex'>
                    <p>Весь ассортимент</p>
                    <Search/>
                </div>
                <div className='main__wrapper-sortedBy flex'>
                    <p>Сортировать по:</p>
                    <div className='main__wrapper-sortedBy_price'><a onClick={() => sortByPrice()}
                                                                     className='sortedBy__link'>Цене</a> <img
                        src={Vector} alt='sorted by' id='price'/></div>
                    {/*<div className="main__wrapper-sortedBy_age"><a onClick="age()"*/}
                    {/*                                           className="sortedBy__link">Возрасту</a> <img*/}
                    {/*    src={Vector} alt="sorted by" id="age"/></div>*/}
                </div>
            </div>
            <div className='main__content flex wh100'>

                {products.map(product => {
                    return <ProductItem numberWithCommas={numberWithCommas} key={product.id} product={product}/>
                })}

            </div>
            <a href='#!' className='main__showMore'>
                Показать еще 20
            </a>
        </div>
    )
}

export default ProductItems