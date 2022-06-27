import React from 'react'
import Slider from 'react-slick'
import ProductItem from '../ProductImtes/ProductItem/ProductItem'

const HotDealsSlick = ({itemsList, numberWithCommas}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    }
    return (
        <Slider {...settings}>
            {itemsList.map(hotItem => {
                return (
                    <ProductItem numberWithCommas={numberWithCommas} key={hotItem.id} product={hotItem}/>
                )
            })}
        </Slider>
    );
}

export default HotDealsSlick