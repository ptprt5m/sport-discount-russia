import {connect} from "react-redux";
import ProductItems from "./ProductItems";
import {setItems} from "../../redux/ItemsReducer";

let mapStateToProps = (state) => {
    return {
        items: state.items.items
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setItems: (items) => {
            dispatch(setItems(items))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItems);