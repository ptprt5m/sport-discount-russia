import React from 'react'

import './styles/commons/reset.css'
import './styles/fonts.css'
import './styles/imports.scss'
import './styles/screen.scss'

import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

const App = () => {
    return (
        <div>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}

export default App;
