import Home from "../components/Home";
import { connect } from "react-redux";
import { addTocart,removeFromocart } from "../Services/Actions/actions";

const mapStateToProps = state => ({
    data: state.cardItems
})
const mapDispatchToProps = dispatch => ({
    addTocartHandler: data => dispatch(addTocart(data)),
    ramovefromocartHandler: data => dispatch(removeFromocart(data))
})


export default connect(mapStateToProps, mapDispatchToProps)(Home)
//export default Home;
