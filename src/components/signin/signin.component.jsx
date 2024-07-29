import './signin.scss';
import Input from '../input/input.component';
import { useState } from 'react';
import Button from '../Button/button.component';
import { useDispatch, useSelector } from 'react-redux';
import { SetSignIn } from '../../store/signin/signin.action';
import { signInSelector } from '../../store/signin/signin.selector';



const valueDefault = {email:"", password:""};


const Signin = ({...otherProps})=>{

    const dispatch = useDispatch();
    const collectSign = useSelector(signInSelector)

    const [formInput, setFormInput] = useState(valueDefault);

    const {email, password} = formInput

    const changeHandler = (event)=>{
        const {name, value} = event.target;
        setFormInput({...formInput, [name]:value})
    }

    

    const closeHandler = ()=>{

        dispatch(SetSignIn(2));

    }

    

    return(
        <div {...otherProps}>
            <div className='signinback'>
            <div className="mainsignin">
                <div className="signtext">
                    <h3>Login to Yourswatch with email</h3>
                    <p>Enter your email and password to sign in.</p>
                </div>

                <div className='signinclose' onClick={closeHandler}>
                    x
                </div>

                

            </div>

            <div className="contents">

                <form>

                    <fieldset>
                        <legend>Email Address</legend>
                        <Input type="email" placeholder="Enter your email"  name="email" value={email}  onChange={changeHandler} required/>

                    </fieldset>

                    <fieldset>
                        <legend>Password</legend>
                        <Input type="password" name="password" value={password} placeholder="Enter your password"  onChange={changeHandler} required/>

                    </fieldset>

                

                <h4>Forgot Password?</h4>

                <Button type="submit" className='login' children="Sign In"/>
                <Button type="button" className='google' children="Sign In With Google"/>

                </form>

                

                

                
            
            </div>

            <hr/>

            <div className="signupsection">
                <h4>Don't have a Yourswatch account?</h4>

                <Button type="button" className="signup" children="CREATE ACCOUNT"/>
            </div>

            

            </div>
            
        </div>
    )

}
export default Signin