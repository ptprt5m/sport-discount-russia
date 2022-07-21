import React from 'react'
import ProductItem from '../ProductImtes/ProductItem/ProductItem'
import fire from '../../img/main/fire.png'
import HotDealsSlick from './HotDealsSlick'
import Preloader from "../commons/Preloader";

const HotDeals = ({numberWithCommas, items, isFetching, isFetching_toBasket, setBasketItemsTC}) => {

    if(isFetching) {
        return <Preloader/>
    }

    return (
        <div className='hotDeals flexColumn wh100'>
            <div className='hotDeals__topBlock wh100'>
                <div className='main__wrapper-titleBlock flex'>
                    <p className='hotDeals__title flex'><img src={fire} alt='HOT'/>Горячие предложения</p>
                </div>
            </div>
            <div className='main__content flex wh100'>
                {/*<HotDealsSlick numberWithCommas={numberWithCommas} itemsList={products}/>*/}

                {items.map(product => {
                    if ((product.sale >= 40) || (product.publicationDate === '2022-06-18')) {
                        return <ProductItem isFetching_toBasket={isFetching_toBasket} setBasketItemsTC={setBasketItemsTC} numberWithCommas={numberWithCommas} key={product.id} product={product}/>
                    }
                })}

            </div>
        </div>
    )
}

export default HotDeals