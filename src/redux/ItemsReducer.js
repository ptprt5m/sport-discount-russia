
const SET_ITEMS = 'itemsReducer/SET_ITEMS'
const SET_BASKET_ITEMS = 'itemsReducer/SET_BASKET_ITEMS'

let initialState = {
    items: [],
    basketItems: []
}

const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ITEMS: {
            return {
                ...state,
                items: action.items
            };
        }
        case SET_BASKET_ITEMS: {
            return {
                ...state,
                basketItems: action.items
            };
        }
        default:
            return state;
    }
}

export const setItems = (items) => ({type: SET_ITEMS, items})
export const setBasketItems = (items) => ({type: SET_BASKET_ITEMS, items})

export default itemsReducer