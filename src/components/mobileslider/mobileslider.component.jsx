import './mobileslider.scss';
import {useState, useEffect} from 'react';
import Rolex from '../../assets/rolex datejust custom 2500ctw diamond 41mm watch.jpg';
import Patek from '../../assets/Patek Philippe, reference 1938P.jpg';
import Richard from '../../assets/Richard Mille RM66 Flying Tourbillon.webp';
import Cartier from '../../assets/Ballon Blanc de Cartier in steel.jpg';
import SlideIndicator from '../slideindicator/slideindicator.component';

const MobileSlider = ()=>{

    const [mywatch, setMyWatch] = useState(0);
    const watches = [Rolex,  Patek, Richard, Cartier];
    const watchheading = ['ROLEX', 'PATEK', 'RICHARD', 'CARTIER'];
    const watchtext = ['The Rolex collection offers a wide range of prestigious, high-precision timepieces, from Professional to Classic models to suit any wrist.', ' Enter the Patek Philippe universe to discover watches that suit any wrist.' ,'Discover, Step Up Your Wrist Game, Unleash The Power Of Time On Your Wrist, experience The Luxury Of Fine Timepieces from Richard Mille.',  'Discover The World Of Precision, Unleash Your Ultimate Accessory. Watches That Stand The Test Of Time.' ];

    const mobileslideHandler = ()=>{
        setMyWatch((mywatch+1)%watches.length)
    }

    useEffect(()=>{

        const myInterval = setInterval(mobileslideHandler,5000);
        return ()=>clearInterval(myInterval);

    })

    return(

        <div className='mobileslider'>
            <img src={watches[mywatch]} alt={watchheading[mywatch]}/>
            <div className='overflow'></div>
            <div className='textcontainer'>
                <div className='textcontent'>
                    <h3>{watchheading[mywatch]}</h3>
                    <p>{watchtext[mywatch]}</p>
                </div>
                <h4>EXPLORE</h4>
            </div>

            <div className='smallIndicator'>
                <SlideIndicator className={mywatch===0?'indicateblue':'indicate'}/>
                <SlideIndicator className={mywatch===1?'indicateblue':'indicate'}/>
                <SlideIndicator className={mywatch===2?'indicateblue':'indicate'}/>
                <SlideIndicator className={mywatch===3?'indicateblue':'indicate'}/>
            </div>


        </div>
    )

}

export default MobileSlider;