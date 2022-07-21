import axios from 'axios'

const instance = axios.create({
    withCredentials: false,
    baseURL: 'https://62d7f1ed9c8b5185c77f7f5e.mockapi.io'
})

export const api = {
    getItems() {
        return instance.get(`/items`)
            .then(responsive => responsive.data)
    },
    setBasketItems(items) {
        return instance.post('/basketItems', {items})
            .then(responsive => responsive.data)
    },
    getBasketItems() {
        return instance.get('/basketItems')
            .then(responsive => responsive.data)
    }
}