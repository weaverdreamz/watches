import './largenavigation.scss';
import {Link} from 'react-router-dom';
import Log from "../../assets/signin.jpg";
import CartIcon from '../cartIcon/cartIcon.component';
import Search from '../../assets/search.png';
import { useSelector, useDispatch } from 'react-redux';
import { searchSelector } from '../../store/search/searchselector';
import { setSearch } from '../../store/search/searchaction';
import { SetSignIn } from '../../store/signin/signin.action';
import SmallMenu from '../smallmenu/smallmenu.component';
import { mobileMenuSelector } from '../../store/mobilemenu/mobilemenu.selector'; 





const LargeNavigation = ()=>{
    const displaySearch = useSelector(searchSelector);
    const dispatch = useDispatch();
    const decideMenu = useSelector(mobileMenuSelector);

    const menuNames = ['firstName', 'middleName', 'lastName'];  
    

    const displayHandler = ()=>{
        if(displaySearch<=1){
            dispatch(setSearch(2))
        }
        if(displaySearch===2){
            dispatch(setSearch(1))
        }
       
    }

    const signInHandler = ()=>{
        dispatch(SetSignIn(1))

    }

       
    return(
        <div className='largenav'>
            <div className='lnav'>
                <div className='logo' onClick={displayHandler}>
                    <img src={Search} alt='logo'/>
                </div>
                <h3><Link to='/'>YOURS WATCH
                    <p>always on spot</p>

                    </Link>
                </h3>
                <div className='navmenu'>
                    <div className='menus'>
                    <img src={Log} alt='login' onClick={signInHandler}/>

                        </div>
                        <div className='menus'>
                            <CartIcon/>
                            
                        </div>
                </div>
            </div>

            
            <div className='mymenu'>
                <div className='mymenus'>
                    ROLEX
                </div>
                <div className='mymenus'>
                    CARTIER
                </div>
                <div className='mymenus'>
                    PATEK PHILIPPE
                </div>
                
               

                <div className='mymenus'>
                    RICHARD MILLE
                </div>
            </div>

            <SmallMenu className={menuNames[decideMenu]}/>

            

        </div>
    )
}
export default LargeNavigation;