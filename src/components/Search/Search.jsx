import React from 'react'

const Search = () => {

    const onChange = () => {

    }

    return (
        <div className='search'>
            <input type="text" placeholder='Поиск...' onChange={onChange}/>
        </div>
    )
}

export default Search