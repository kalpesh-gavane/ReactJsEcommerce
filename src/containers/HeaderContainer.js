import Cart from "../cart";
import { connect } from "react-redux";

const mapStateToProps = state => ({
    data: state.cardItems
})
const mapDispatchToProps = dispatch => ({
})

// console.log(state);
export default connect(mapStateToProps, mapDispatchToProps)(Cart)
//export default Home;
