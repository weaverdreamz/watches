import './smallmenu.scss';
import {useDispatch} from 'react-redux';
import { setMobileMenu } from '../../store/mobilemenu/mobilemenu.action';
import { SetSignIn } from '../../store/signin/signin.action';
import { setTwo } from '../../store/two/two.action';

const SmallMenu = ({...otherProps})=>{

const dispatch = useDispatch()


const closeHandler = ()=>{

dispatch(setMobileMenu(2));

}

const loginHandler = ()=>{

    dispatch(setMobileMenu(0));
    dispatch(SetSignIn(1));

}

const signupHandler = ()=>{
    dispatch(setMobileMenu(0));
    dispatch(SetSignIn(1));
    dispatch(setTwo(1));

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

                    <div className='mobilesign' onClick={loginHandler}>
                        SIGN IN

                    </div>
                    <div className='mobileregister' onClick={signupHandler}>
                        CREATE ACCOUNT

                    </div>


                </div>

                


            </div>



        </div>
    )
}

export default SmallMenu;