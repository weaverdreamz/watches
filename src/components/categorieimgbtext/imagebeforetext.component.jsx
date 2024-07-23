import './imagebeforetext.scss';
import Button from '../Button/button.component';

const ImageBText = ({imageUrl, textHeading, textParagraph})=>{

    return(

        <div className='imagebtext'>

            <div className='btext'>
                <img src={imageUrl} alt='textHeading'/>
                

            </div>

            <div className='aimg'>
                <h1>
                    {textHeading}
                </h1>

                <p>
                    {textParagraph}

                </p>

                <Button className='previewsbtn' type='button' children={`SHOP ${textHeading}`}/>

            </div>

            
            

        </div>
    )

}
export default ImageBText;