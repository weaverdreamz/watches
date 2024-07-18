import './largenavigation.scss';
import {Link} from 'react-router-dom';
import Log from "../../assets/signin.jpg";
import CartIcon from '../cartIcon/cartIcon.component';
import Search from '../../assets/search.png';
import { useSelector, useDispatch } from 'react-redux';
import { searchSelector } from '../../store/search/searchselector';
import { setSearch } from '../../store/search/searchaction';
import { signinSelector } from '../../store/signin/signinselector';
import { yoursSignin } from '../../store/signin/sigininactions';




const LargeNavigation = ()=>{
    const displaySearch = useSelector(searchSelector);
    const dispatch = useDispatch();
    const mysignin = useSelector(signinSelector);

    const displayHandler = ()=>{
        if(displaySearch<=1){
            dispatch(setSearch(2))
        }
        if(displaySearch===2){
            dispatch(setSearch(1))
        }
       
    }

    const mySignIn = ()=>{
        dispatch(yoursSignin(2));
        alert(yoursSignin)
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
                    <img src={Log} alt='login' onClick={mySignIn}/>

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

        </div>
    )
}
export default LargeNavigation;