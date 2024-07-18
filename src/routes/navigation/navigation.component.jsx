import LargeNavigation from '../../components/largenavigation/largenavigation.component';
import SmallNavigation from '../../components/smallnavigation/smallnavigation.component';
import {Outlet} from 'react-router-dom';
import './navigation.scss';
import Searchmenu from '../../components/searchmenu/searchmenu.component';
import { useSelector } from 'react-redux';
import { searchSelector } from '../../store/search/searchselector';
import { signinSelector } from '../../store/signin/signinselector';



const Navigation = ()=>{

    const displaySignin = useSelector(signinSelector);
    const displaySearch = useSelector(searchSelector);
    const searchclass = ['defaultstyle', 'remove-div', 'searchmenu']
    
    
    return(
        <div className='navigation'>
            
            <div className='empty'></div>
            <div className='gather'>
            <Searchmenu className={searchclass[displaySearch]}/>
            <LargeNavigation/>
            <SmallNavigation/>

            </div>
           
            <Outlet/>
           
        </div>
    )
}
export default Navigation;