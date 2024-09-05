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





const SmallNavigation = ()=>{

    const dispatch = useDispatch();
    const displaySearch = useSelector(searchSelector);
    const decideMenu = useSelector(mobileMenuSelector);
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

                <div className='mobilemenus'>
                    <CartIcon/>

                </div>

                <SmallMenu className={menuNames[decideMenu]}/>

                 
            </div>

            

           

            

                
        </div>

    )
}
export default SmallNavigation;