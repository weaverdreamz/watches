import './searchmenu.scss';
import Search from '../../assets/search.png';
import Input from '../input/input.component';
import { useState } from 'react';
import {useSelector} from 'react-redux'


const Searchmenu = ({...otherProps})=>{

    let [search, setSearch] = useState('');

    let searchHandler = (event)=>{
        let {value} = event.target;
        setSearch(value)

    }

    return(

        

<div {...otherProps}>

<div className='mainsearch'>
    <div className='searchicon'>
        <img src={Search} alt='search'/>
    </div>

    <div className='searchinput'>
        <Input type='search'  name='search' value={search} onChange={searchHandler} placeholder='search on yourswatch.com'/>

    </div>

    <div className='searchtext'>
        <h5>Search</h5>
        

    </div>
</div>

</div>
        
       
    )

}

export default Searchmenu;