import './button.scss';

const Button = ({ children,...otherProps})=>{


    return(
        <div className='buttons'>

            <button {...otherProps}>

                {
                    children
                }

            
            </button>

        </div>
        
    )

}
export default Button