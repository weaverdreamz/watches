import './textbeforeimage.scss';
import Button from '../Button/button.component'

const TextBImage = ({imageUrl, textHeading, textParagraph})=>{

    return(
        <div className='textbimage'>
            <div className='textb'>
                <h1>
                    {textHeading}
                </h1>

                <p>
                    {textParagraph}

                </p>

                <Button className='previewsbtn' type='button' children={`SHOP ${textHeading}`}/>

            </div>

            <div className='atext'>
                <img src={imageUrl} alt='textHeading'/>
                

            </div>
            
        </div>
    )

}
export default TextBImage;

