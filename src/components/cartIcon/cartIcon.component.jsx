import './cartIcon.scss';
import {ReactComponent as Icon} from "../../assets/004 shopping-bag.svg"

const CartIcon = ()=>{
    return(
        <div className='carticon'>

            <Icon className='cicon'/>
            <span className='counter'>0</span>

        </div>
    )
}
export default CartIcon;