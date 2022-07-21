import React from 'react'
import {deleteItemFromBasket, getBasketItems, setBasketItemsTC} from "../../redux/ItemsReducer";
import {connect} from "react-redux";
import Basket from "./Basket";

let mapStateToProps = (state) => {
    return {
        basketItems: state.items.basketItems
    }
}

export default connect(mapStateToProps, {
    setBasketItemsTC,
    getBasketItems,
    deleteItemFromBasket
})(Basket);
