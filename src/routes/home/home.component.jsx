import './home.scss';
import Rolex from '../../assets/rolex datejust custom 2500ctw diamond 41mm watch.jpg';
import Patek from '../../assets/Patek Philippe, reference 1938P.jpg';
import Cartier from '../../assets/Ballon Blanc de Cartier in steel.jpg';
import Richard from '../../assets/Richard Mille RM66 Flying Tourbillon.webp';
import {useState, useEffect} from 'react';
import SliderContainers from '../../components/slidercontainers/slidercontainers.component';
import MobileSlider from '../../components/mobileslider/mobileslider.component';
import SlideIndicator from '../../components/slideindicator/slideindicator.component';
import { grabNewProduct } from '../../backend/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { latestProductSelector } from '../../store/latestproduct/latestproductselector';
import {setNewProduct }from '../../store/latestproduct/latestproductaction';
import Products from '../../components/products/products.component';
import { getOurProducts } from '../../backend/firebase';
import { ourProductSelector } from '../../store/latestproduct/latestproductselector';
import TextBImage from '../../components/categorietextbimg/textbeforeimage.component';
import Rolexdisplay from '../../assets/rolexincase.webp';


const Home = ()=>{

    const dispatch = useDispatch();
    const myLatestProduct = useSelector(latestProductSelector);
    const ourProduct = useSelector(ourProductSelector);
    useEffect(()=>{
        const mynewProduct = async()=>{
            const gotnewProduct = await grabNewProduct();
            const getProducts = await getOurProducts(); 
            dispatch(setNewProduct(gotnewProduct, getProducts));
            
            
        }

        mynewProduct();

    },[])

    
    const available = myLatestProduct['newest arrival'];

  
    
    
    


    //THIS CODE STARTING FROM HERE IS FOR IMAGE SLIDER FOR DEVICE WITH WIDTH 769PX TILL ...

    const [mywatch, setMyWatch] = useState(0)
    const watches = [Rolex, Richard];
    const watchheading = ['ROLEX', 'RICHARD MILLE'];
    const watchtext = ['The Rolex collection offers a wide range of prestigious, high-precision timepieces, from Professional to Classic models to suit any wrist.', 'Discover, Step Up Your Wrist Game, Unleash The Power Of Time On Your Wrist, experience The Luxury Of Fine Timepieces from Richard Mille.'];

    const watchess = [Patek, Cartier];
    const watchheadings = ['PATEK PHILIPPE', 'CARTIER'];
    const watchtexts = [' Enter the Patek Philippe universe to discover watches that suit any wrist.', 'Discover The World Of Precision, Unleash Your Ultimate Accessory. Watches That Stand The Test Of Time.']

    const watchSlider = ()=>{
        setMyWatch((mywatch+1)%watches.length)
    }
    useEffect(()=>{
        const watchInterval = setInterval(watchSlider, 5000);
        return ()=> clearInterval(watchInterval);
    })

   

    return(
        

        <div className='home'>
        <div className='imageSlider'>
            <SliderContainers images={watches[mywatch]} altenate={watchheading[mywatch]} headtwo={watchheading[mywatch]} para={watchtext[mywatch]}/>
            <SliderContainers images={watchess[mywatch]} altenate={watchheadings[mywatch]} headtwo={watchheadings[mywatch]} para={watchtexts[mywatch]}/>

            <div className='bigIndicator'>

            
                <SlideIndicator className={mywatch===0?'indicateblue':'indicate'}/>
                <SlideIndicator className={mywatch===1?'indicateblue':'indicate'}/>
            

            </div>            
            
        </div>

        <div className='smallImageSlider'>
            <MobileSlider/>
              
        </div>

        <div className='newarrivals'>
            <h4>
                NEWEST ARRIVAL
            </h4>
            
            
            <div className='newproducts'>
                <div className='overfloww'>

                    
                {
                    available&&available.map((products)=>{
                        return <Products  className='productss' key={products['id']} product={products}/>
                    })
                }
                </div>

                

            </div>
        </div>

        <div className='previews'>

            <TextBImage imageUrl={Rolexdisplay} textHeading="ROLEX" textParagraph='Prestigious, high-precision timepieces, from Professional to Classic models to suit any wrist.'/>

            <div className='productpreview'>
                <div className='overfloww'>

                    {
                        available&&ourProduct['rolex'].filter((_,idx)=>idx<4)
                        .map((rolexproducts)=>{
                            return <Products  className='productss' key={rolexproducts['id']} product={rolexproducts}/>
                        })
                    }



              

                </div>

              

            </div>

           



        </div>

    </div>

    )
    

    

}
export default Home;