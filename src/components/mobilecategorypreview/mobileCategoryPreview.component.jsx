import './mobileCategoryPreview.scss';
import Button from '../Button/button.component';

const MobilePreview = ({imageUrl, textHeading, textParagraph})=>{

    return(

        <div className='mobilepreviews'>

            <div className='backgroundimg'>

                <img src={imageUrl} alt={textHeading}/>

            </div>

            <div className='justtext'>
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
export default MobilePreview;