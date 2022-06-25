import React from 'react'
import ProductItems from '../ProductImtes/ProductItems'
import {Route, Routes} from 'react-router-dom'
import Basket from '../Basket/Basket'
import PageItem from '../PageItem/PageItem'
import Home from '../__Home/Home'

const Main = () => {

    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    return (
        <main className="main">
            <div className="wrapper">
                <div className="main__wrapper">

                    <Routes>
                        <Route path='/' element={<Home numberWithCommas={numberWithCommas}/>}/>
                        {/*<Route path='/' element={<Navigate to={'/products'}/>}/>*/}
                        <Route path='/products' element={<ProductItems numberWithCommas={numberWithCommas}/>}/>
                        <Route path='/products/1' element={<PageItem numberWithCommas={numberWithCommas}/>}/>
                        <Route path='/basket' element={<Basket numberWithCommas={numberWithCommas}/>}/>
                        {/*<Route path='*' element={<Error404Page />}/>*/}
                    </Routes>

                </div>
            </div>
        </main>
    )
}

export default Main
