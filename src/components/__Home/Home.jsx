import React from 'react'
import {NavLink} from 'react-router-dom'
import HotDeals from '../HotDeals/HotDeals'

const Home = ({numberWithCommas}) => {
    return (
        <div style={{margin: '50px 0', width: '1180px'}}>
            <NavLink to={'/products'}>Ассортимент</NavLink>
            <HotDeals numberWithCommas={numberWithCommas} />
        </div>
    )
}

export default Home