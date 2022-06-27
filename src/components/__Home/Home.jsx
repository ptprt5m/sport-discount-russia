import React from 'react'
import {NavLink} from 'react-router-dom'
import HotDeals from '../HotDeals/HotDeals'

const Home = ({numberWithCommas}) => {
    return (
        <div className={'homePage'}>
            <NavLink to={'/products'}>Ассортимент</NavLink>
            <HotDeals numberWithCommas={numberWithCommas} />
        </div>
    )
}

export default Home