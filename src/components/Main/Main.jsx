import React from 'react'
import ProductItems from '../ProductImtes/ProductItems'
import {Route, Routes} from 'react-router-dom'
import Basket from '../Basket/Basket'
import PageItem from '../PageItem/PageItem'
import Home from '../__Home/Home'

const Main = () => {

    return (
        <main className='main'>
            <div className='main-block'>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    {/*<Route path='/' element={<Navigate to={'/products'}/>}/>*/}
                    <Route path='/products' element={<ProductItems/>}/>
                    <Route path='/products/1' element={<PageItem />}/>
                    <Route path='/basket' element={<Basket/>}/>
                    {/*<Route path='*' element={<Error404Page />}/>*/}
                </Routes>

            </div>
        </main>
    )
}

export default Main
