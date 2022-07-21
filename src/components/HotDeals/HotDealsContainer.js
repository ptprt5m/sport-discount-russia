import {connect} from "react-redux";
import HotDeals from "./HotDeals";
import {setBasketItemsTC} from "../../redux/ItemsReducer";

let mapStateToProps = (state) => {
    return {
        items: state.items.items,
        isFetching: state.items.isFetching,
        isFetching_toBasket: state.items.isFetching_toBasket
    }
}

export default connect(mapStateToProps, {setBasketItemsTC})(HotDeals);