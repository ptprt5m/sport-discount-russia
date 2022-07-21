import React from 'react'
import {NavLink} from 'react-router-dom'
import HotDealsContainer from "../HotDeals/HotDealsContainer";

const Home = ({numberWithCommas}) => {
    return (
        <div className={'homePage'}>
            <NavLink to={'/products'}>Ассортимент</NavLink>
            <HotDealsContainer numberWithCommas={numberWithCommas} />
        </div>
    )
}

export default Home