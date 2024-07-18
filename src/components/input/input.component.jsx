import './input.scss';

const Input = ({...otherProps})=>{
    return(
        <div className='input'>

            <input {...otherProps}/>

        </div>
    )
}
export default Input