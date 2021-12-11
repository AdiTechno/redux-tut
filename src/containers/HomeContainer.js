import {connect} from 'react-redux'
import Home from '../components/Home'
import {addToCart} from '../service/actions/Action'

const mapStateToProps=state=>({
     data: state
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)