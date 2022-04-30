
import { connect } from "react-redux";
import Header from "../components/Header";
import { removeProduct } from "../Services/Actions/actions";

const mapStateToProps = state => ({
    data: state.cardItems
})

const mapDispatchToProps = dispatch => ({
    removeProductHandler: data => dispatch(removeProduct(data))
})

// console.log(state);
export default connect(mapStateToProps, mapDispatchToProps)(Header)
//export default Home;
