import React from 'react'
import Search from '../Search/Search'

const Main = () => {
    return (
        <main className='main'>
            <div className='main-block'>
                <p className='main__title'>Весь ассортимент</p>
                <Search />
            </div>
        </main>
    )
}

export default Main