import Cart from "../Cart";
import App from "../App";
import { connect } from "react-redux";
import Header from "../components/Header";

const mapStateToProps = state => ({
    data: state.cardItems
})
const mapDispatchToProps = dispatch => ({
})

// console.log(state);
export default connect(mapStateToProps, mapDispatchToProps)(Cart)
//export default Home;
