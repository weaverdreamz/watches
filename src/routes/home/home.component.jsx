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
import Rolexdisplay from '../../assets/Rolexshop.webp';
import MobilePreview from '../../components/mobilecategorypreview/mobileCategoryPreview.component';
import Patekdisplay from '../../assets/patekinstock.avif';
import ImageBText from '../../components/categorieimgbtext/imagebeforetext.component';
import Richarddisplay from '../../assets/richardmilleincase.webp';
import Cartierdisplay from '../../assets/cartierincase2.webp'

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

            <MobilePreview imageUrl={Rolexdisplay} textHeading="ROLEX" textParagraph='Enter the Patek Philippe universe to discover classic watches that suit any wrist.'/>

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

            <MobilePreview imageUrl={Patekdisplay} textHeading="PATEK" textParagraph='Craftsmanship,timeless design, strategic scarcity is one of the key ways the brand has crafted its image and reputation.'/>

            <ImageBText imageUrl={Patekdisplay} textHeading="PATEK" textParagraph='Craftsmanship,timeless design, strategic scarcity is one of the key ways the brand has crafted its image and reputation.'/>

            <div className='productpreview'>
                <div className='overfloww'>

                    {
                        available&&ourProduct['patek philippe'].filter((_,idx)=>idx<4)
                        .map((patekproducts)=>{
                            return <Products  className='productss' key={patekproducts['id']} product={patekproducts}/>
                        })
                    }



              

                </div>

              

            </div>

            <MobilePreview imageUrl={Richarddisplay} textHeading="RICHARD" textParagraph='Unleash The Power Of Time On Your Wrist, experience The Luxury Of Fine Timepieces from Richard Mille.'/>

            <TextBImage imageUrl={Richarddisplay} textHeading="RICHARD" textParagraph='Unleash The Power Of Time On Your Wrist, experience The Luxury Of Fine Timepieces from Richard Mille.'/>

            <div className='productpreview'>
                <div className='overfloww'>

                    {
                        available&&ourProduct['richard mille'].filter((_,idx)=>idx<4)
                        .map((richardproducts)=>{
                            return <Products  className='productss' key={richardproducts['id']} product={richardproducts}/>
                        })
                    }



              

                </div>

              

            </div>

            <MobilePreview imageUrl={Cartierdisplay} textHeading="CARTIER" textParagraph='Discover The World Of Precision, Unleash Your Ultimate Accessory. Watches That Stand The Test Of Time.'/>

            <ImageBText imageUrl={Cartierdisplay} textHeading="CARTIER" textParagraph='Discover The World Of Precision, Unleash Your Ultimate Accessory. Watches That Stand The Test Of Time.'/>

            <div className='productpreview'>
            <div className='overfloww'>

            {
                available&&ourProduct['cartier'].filter((_,idx)=>idx<4)
                .map((cartierproducts)=>{
                return <Products  className='productss' key={cartierproducts['id']} product={cartierproducts}/>
                })
            }



  

    </div>

  

</div>

           



        </div>

    </div>

    )
    

    

}
export default Home;