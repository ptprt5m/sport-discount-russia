import React from 'react'
import {Route, Routes, withRouter} from 'react-router-dom'
import PageItem from '../PageItem/PageItem'
import Home from '../__Home/Home'
import ProductsItemsContainer from '../ProductImtes/ProductsItemsContainer'
import BasketContainer from "../Basket/BasketContainer";
import {compose} from "redux";

const Main = ({numberWithCommas}) => {


    return (
        <main className='main'>
            <div className='wrapper'>
                <div className='main__wrapper flexColumn'>

                    <Routes>
                        <Route path='/' element={<Home numberWithCommas={numberWithCommas}/>}/>
                        {/*<Route path='/' element={<Navigate to={'/products'}/>}/>*/}
                        <Route path='/products' element={<ProductsItemsContainer numberWithCommas={numberWithCommas}/>}/>
                        <Route path='/products/:itemId?' element={<PageItem numberWithCommas={numberWithCommas}/>}/>
                        <Route path='/basket' element={<BasketContainer numberWithCommas={numberWithCommas}/>}/>
                        {/*<Route path='*' element={<Error404Page />}/>*/}
                    </Routes>

                </div>
            </div>
        </main>
    )
}

export default Main
