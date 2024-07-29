import './largenavigation.scss';
import {Link} from 'react-router-dom';
import Log from "../../assets/signin.jpg";
import CartIcon from '../cartIcon/cartIcon.component';
import Search from '../../assets/search.png';
import { useSelector, useDispatch } from 'react-redux';
import { searchSelector } from '../../store/search/searchselector';
import { setSearch } from '../../store/search/searchaction';
import Signin from '../signin/signin.component';
import { signInSelector } from '../../store/signin/signin.selector';
import { SetSignIn } from '../../store/signin/signin.action';





const LargeNavigation = ()=>{
    const displaySearch = useSelector(searchSelector);
    const dispatch = useDispatch();
    const displaySignin = useSelector(signInSelector);
    

    const signInNames = ["default", "displaysignin", "removesignin"]
    

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

            <Signin className={signInNames[displaySignin]}/>

        </div>
    )
}
export default LargeNavigation;