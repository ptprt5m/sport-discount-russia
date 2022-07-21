import {connect} from "react-redux";
import ProductItems from "./ProductItems";
import {setBasketItemsTC} from "../../redux/ItemsReducer";

let mapStateToProps = (state) => {
    return {
        items: state.items.items,
        pageSize: state.items.pageSize,
        isFetching: state.items.isFetching,
        isFetching_toBasket: state.items.isFetching_toBasket
    }
}

export default connect(mapStateToProps, {setBasketItemsTC})(ProductItems);