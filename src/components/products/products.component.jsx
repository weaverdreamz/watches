import './products.scss';
import Button from '../Button/button.component';


const Products = ({product})=>{

    const {name,  price, color, collection, imageUrl, description, ref} = product
    return(
        <div className='products'>
            <div className='imgpa'><img src={imageUrl} alt={collection}/></div>
            
            <h5>{collection}</h5>
            <div className='productdetails'>
                <h6><span className='title'>Brand:</span> {name}</h6>
                <h6><span className='ref'>Ref: </span>{ref}</h6>
                <h6><span className='price'>Price:</span>  ${price}</h6>
                <h6><span className='color'>Color: </span> {color}</h6>
                
            </div>
            <div className='instock'>IN-STOCK</div>
           
            <Button type='button' className='addtocart' children='Add To Cart' />
            
            
            
           

        </div>
    )

}
export default Products


