import React from 'react'
import './styles/style.scss'
import './styles/screen.scss'
import './styles/fonts.css'
import './styles/reset.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}

export default App;
