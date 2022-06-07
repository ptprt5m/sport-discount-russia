import React from 'react'
import {products} from '../../data/data'
import ProductItem from './ProductItem/ProductItem'
import Search from '../Search/Search'

const ProductItems = () => {

    return (
        <div>
            <div className='productItems__header'>
                <p className='productItems__title'>Весь ассортимент</p>
                <Search />
            </div>
            <div className='productItems'>
                {products.map(product => {
                    return <ProductItem key={product.id} product={product} />
                })}
            </div>
        </div>
    )
}

export default ProductItems