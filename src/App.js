import React from 'react'

import './styles/commons/reset.css'
import './styles/fonts.css'
import './styles/imports.scss'
import './styles/screen.scss'

import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import HeaderContainer from "./components/Header/HeaderContainer";

const App = () => {

    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    return (
        <div>
            <HeaderContainer numberWithCommas={numberWithCommas}/>
            <Main numberWithCommas={numberWithCommas}/>
            <Footer/>
        </div>
    )
}

export default App;
