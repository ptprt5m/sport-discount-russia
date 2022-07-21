import {connect} from "react-redux";
import Header from "./Header";
import {getBasketItems, getItems} from "../../redux/ItemsReducer";

let mapStateToProps = (state) => {
    return {
        items: state.items.items,
        basketItems: state.items.basketItems
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         setBasketItems: (items) => {
//             dispatch(setBasketItems(items))
//         }
//     }
// }

export default connect(mapStateToProps, {getItems, getBasketItems})(Header);