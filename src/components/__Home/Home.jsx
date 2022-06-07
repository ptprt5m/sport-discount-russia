import React from 'react'
import {NavLink} from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <NavLink to={'/products'}>Ассортимент</NavLink>
        </div>
    )
}

export default Home