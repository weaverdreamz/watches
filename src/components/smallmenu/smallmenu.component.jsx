import './smallmenu.scss';
import {useDispatch} from 'react-redux';
import { setMobileMenu } from '../../store/mobilemenu/mobilemenu.action';

const SmallMenu = ({...otherProps})=>{

const dispatch = useDispatch()


const closeHandler = ()=>{

dispatch(setMobileMenu(2))

}

    return(
        <div {...otherProps}>
            <div className='menuwidth'>

                <div className='mobilehead'>
                    <h2>
                        YOURS WATCH
                        <p>Always on spot</p>
                    </h2>

                    <div className="mobileClose" onClick={closeHandler}>
                        X
                    </div>
                </div>
                <hr/>

                <div className='mobileMenus'>

                    <h3>Rolex</h3>
                    <hr/>
                    <h3>Patek Philippe</h3>
                    <hr/>
                    <h3>Richard Mille</h3>
                    <hr/>
                    <h3>Cartier</h3>
                    <hr/>
                    <h3>About us</h3>
                    <hr/>
                    <h3>Contact</h3>
                    <hr/>
                    <h3>Checkout</h3>
                    <hr/>
                </div>

                <div className='signandRegister'>

                    <div className='mobilesign'>
                        SIGN IN

                    </div>
                    <div className='mobileregister'>
                        CREATE ACCOUNT

                    </div>


                </div>

                


            </div>



        </div>
    )
}

export default SmallMenu;