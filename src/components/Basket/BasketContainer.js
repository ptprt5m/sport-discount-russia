import React from 'react'
import {setBasketItems} from "../../redux/ItemsReducer";
import {connect} from "react-redux";
import Basket from "./Basket";

let mapStateToProps = (state) => {
    return {
        basketItems: state.items.basketItems
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setBasketItems: (items) => {
            dispatch(setBasketItems(items))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
