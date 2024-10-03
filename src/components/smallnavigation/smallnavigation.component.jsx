import './smallnavigation.scss';
import Signin from '../../assets/signin.jpg';
import CartIcon from '../cartIcon/cartIcon.component';
import Search from '../../assets/search.png';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '../../store/search/searchaction';
import { searchSelector } from '../../store/search/searchselector';
import { setMobileMenu } from '../../store/mobilemenu/mobilemenu.action';
import SmallMenu from '../smallmenu/smallmenu.component';
import { mobileMenuSelector } from '../../store/mobilemenu/mobilemenu.selector';
import {setViewCart} from '../../store/viewcart/viewcart.action';
import { viewCartSelector } from '../../store/viewcart/viewcart.selector';
import YoursCart from '../yourscart/yourscart.component';






const SmallNavigation = ()=>{

    const dispatch = useDispatch();
    const displaySearch = useSelector(searchSelector);
    const decideMenu = useSelector(mobileMenuSelector);
    const decideCart = useSelector(viewCartSelector);
    const cartNames = ["firstCart", "middleCart", "lastCart"]


    const displayHandler = ()=>{
            if(displaySearch<=1){
                dispatch(setSearch(2))
            }
            if(displaySearch===2){
                dispatch(setSearch(1))
            }
    }

    const menuNames = ['firstName', 'middleName', 'lastName'];

    const mobileHandler = ()=>{
        dispatch(setMobileMenu(1))
    }

    const cartHandler = ()=>{
        dispatch(setViewCart(1));
    }

    

    
    

    return(
        <div className='smallnav'>            
            <div className='topmenu'>

            <div className='topmenulogo' onClick={displayHandler}>
                    <img src={Search} alt='logo'/>
                </div>
                <div className='horizontals' onClick={mobileHandler}>

                    <div className='tophorizontals'></div>
                    <div className='tophorizontals'></div>
                    <div className='tophorizontals'></div>


                </div>

               
                <div className='mobilemenuname'>
                    <Link to='/'>
                    <h2>YOURS WATCH
                        <p>always on spot</p>
                    </h2>
                    </Link>
                </div>

                <div className='mobilemenus' onClick={cartHandler}>
                    <CartIcon/>

                </div>

                <SmallMenu className={menuNames[decideMenu]}/>
                <YoursCart className={cartNames[decideCart]} dir="rtl"/>

                 
            </div>

            

           

            

                
        </div>

    )
}
export default SmallNavigation;