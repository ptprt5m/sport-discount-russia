import {api} from "../API/api";

const SET_ITEMS = 'itemsReducer/SET_ITEMS'
const SET_BASKET_ITEMS = 'itemsReducer/SET_BASKET_ITEMS'
const SET_PAGE_SIZE = 'itemsReducer/SET_PAGE_SIZE'
const DEL_ITEM_FROM_BASKET = 'itemsReducer/DEL_ITEM_FROM_BASKET'
const TOGGLE_IS_FETCHING = 'itemsReducer/TOGGLE_IS_FETCHING'
const TOGGLE_IS_FETCHING_TO_BASKET = 'itemsReducer/TOGGLE_IS_FETCHING_TO_BASKET'

let initialState = {
    items: [],
    basketItems: [],
    pageSize: 8,
    totalItemsCount: 0,
    isFetching: false,
    isFetching_toBasket: false
}

const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ITEMS: {
            return {
                ...state,
                items: action.items
            }
        }
        case SET_BASKET_ITEMS: {
            return {
                ...state,
                basketItems: action.items
            }
        }
        case SET_PAGE_SIZE: {
            return {
                ...state,
                pageSize: action.pageSize
            }
        }
        // case DEL_ITEM_FROM_BASKET: {
        //     let findId = basketItemsData.find(item => item.id === action.id)
        //     let findId = basketItemsData.filter(function (f) {
        //         if (f.id !== action.id) {
        //             return f
        //         }
        //     })
        //     return {
        //         ...state,
        //         basketItems: findId
        //     }
        // }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            };
        }
        case TOGGLE_IS_FETCHING_TO_BASKET: {
            return {
                ...state,
                isFetching_toBasket: action.isFetching
            };
        }
        default:
            return state
    }
}

export const setItems = (items) => ({type: SET_ITEMS, items})
export const setBasketItems = (items) => ({type: SET_BASKET_ITEMS, items})
export const setPageSize = (pageSize) => ({type: SET_PAGE_SIZE, pageSize})
export const deleteItemFromBasket = (id) => ({type: DEL_ITEM_FROM_BASKET, id})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleIsFetchingToBasket = (isFetching) => ({type: TOGGLE_IS_FETCHING_TO_BASKET, isFetching})

export const getItems = () => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        let response = await api.getItems()

        dispatch(setItems(response))
        dispatch(toggleIsFetching(false))
    }
}

export const getBasketItems = () => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        let response = await api.getBasketItems()

        dispatch(setBasketItems(response))
        dispatch(toggleIsFetching(false))
    }
}

export const setBasketItemsTC = (items) => {
    return async (dispatch) => {
        dispatch(toggleIsFetchingToBasket(true))
        let response = await api.setBasketItems(items)
        dispatch(toggleIsFetchingToBasket(false))
    }
}




export default itemsReducer