import {connect} from "react-redux";
import PageItem from "./PageItem";

let mapStateToProps = (state) => {
    return {
        items: state.items.items
    }
}

export default connect(mapStateToProps, {})(PageItem);