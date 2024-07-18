import './slidercontainers.scss';

const SliderContainers = ({images, altenate,  headtwo, para})=>{
    return(

        <div className='slidercontainer'>

            <img src={images} alt={altenate}/>

            <div className='overlay'></div>
            <div className='toptext'>
                <div className='textcontainer'>
                    <h2>{headtwo}</h2>
                    <p>{para}</p>
                </div>

                <h2>EXPLORE</h2>
            </div>
        </div>

        

    )
}
export default SliderContainers;