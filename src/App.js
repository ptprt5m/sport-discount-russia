import React from 'react'
import './styles/style.scss'
import './styles/screen.scss'
import Header from './components/Header/Header'
import Main from './components/Main/Main'

const App = () => {
    return (
        <div className="App">
            <div className="wrapper">
                <Header/>
                <Main />
            </div>
        </div>
    )
}

export default App;
