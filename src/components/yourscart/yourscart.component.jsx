import "./yourscart.scss";
import { useSelector, useDispatch } from "react-redux";
import { countSelector } from "../../store/cart/cartselector";
import { setViewCart } from "../../store/viewcart/viewcart.action";


const YoursCart  = ({...otherProps})=>{

    const cartCount = useSelector(countSelector);
    const dispatch = useDispatch();

    const closeCart = ()=>{
        dispatch(setViewCart(2))
    }

    return(
        <div {...otherProps}>

            <div className="cartback" dir='ltr'>

                <div className='cartfix'>
                    <div className='carthead'>
                        <h4>
                            SHOPPING CART ( {cartCount} )
                        </h4>

                        <div className='cartClose' onClick={closeCart}>
                            x
                        </div>
                    </div>
                   
                </div>
                 <hr/>

                 <div className='cartfix2'>
                    <div className="cartitemshold">

                        {
                          cartCount==0?(
                          <div className='cartcontent'>
                            <h2>YOUR CART IS EMPTY
                            </h2>
                            <p>Add more watches to your life!</p>
                            
                            </div>
                            
                          ):null
                        }



                    </div>

                 </div>

                 <div className='btn'>

                    <button type='button' className='checkout'>

                        Go To Checkout
                    </button>


                 </div>

                 
                
               

            </div>

        </div>
    )
}

export default YoursCart