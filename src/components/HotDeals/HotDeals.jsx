import React from 'react'
import {products} from '../../data/data'
import ProductItem from '../ProductImtes/ProductItem/ProductItem'
import fire from '../../img/main/fire.png'
import HotDealsSlick from "./HotDealsSlick";

const HotDeals = ({numberWithCommas}) => {
    return (
        <div className='hotDeals'>
            <div className='hotDeals__topBlock'>
                <div className="main__wrapper-search">
                    <p className='hotDeals__title'><img src={fire} alt="HOT"/>Горячие предложения</p>
                </div>
            </div>
            <div className="main__content">
                {/*<HotDealsSlick numberWithCommas={numberWithCommas} itemsList={products}/>*/}

                {products.map(product => {
                    if ((product.sale >= 40) || (product.publicationDate === '17.06.2022')) {
                        return <ProductItem numberWithCommas={numberWithCommas} key={product.id} product={product}/>
                    }
                })}

            </div>
        </div>
    )
}

export default HotDeals