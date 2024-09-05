import './signin.scss';
import Input from '../input/input.component';
import { useState } from 'react';
import Button from '../Button/button.component';
import { useDispatch, useSelector } from 'react-redux';
import { SetSignIn } from '../../store/signin/signin.action';
import { signInSelector } from '../../store/signin/signin.selector';
import {setTwo} from '../../store/two/two.action';
import { twoSelector } from '../../store/two/two.selector';



const valueDefault = {email:"", password:""};

const regDefault   = {firstname:"", lastname:"", regpassword:"", regemail:"",  male:"Male", female:"Female", other:"Other"}


const Signin = ({...otherProps})=>{
    

    const dispatch = useDispatch();
    const collectSign = useSelector(signInSelector)
    const displayReg = useSelector(twoSelector)

    const [formInput, setFormInput] = useState(valueDefault);
    const [regInput, setRegInput] = useState(regDefault);

    const {email, password} = formInput;

    const {firstname, lastname, regpassword, regemail, male, female, other} = regInput;

    const changeHandler = (event)=>{
        const {name, value} = event.target;
        setFormInput({...formInput, [name]:value})
    }

    const sexHandler = (event)=>{
        let genderHolder = event.target.value;

        console.log(genderHolder)
    }


    const closeHandler = ()=>{

        dispatch(SetSignIn(2));
         dispatch(setTwo(0))

    }

    const regChanger = (event)=>{


        const {name, value} = event.target;

        setRegInput({...regInput, [name]:value});

    }

    const regHandler = ()=>{

        dispatch(setTwo(1))
    }

    const accountHandler = ()=>{

        dispatch(setTwo(0))

    }

    

    return(
        <div {...otherProps}>

            {

                displayReg==1?(<div className={`notShow ${displayReg==1?'regnow':'notShow'}`}>

                <div className='regfixwidth'>

                    <div className='reghead'>
                        <div className='regtophead'>

                            <h3>Become a Yourswatch  member</h3>
                            <p>Create your Yourswatch profile and get first access to the very best of Icebox products.</p>

                            

                        </div>

                        <div className='regClose' onClick={closeHandler}>
                                x
                        </div>
                        
                    </div>

                    <form>

                        <div className='doublefield'>

                            <fieldset>
                                <legend>First Name</legend>
                                    <Input type="text" placeholder="Enter your first name"  name="firstname" value={firstname}  onChange={regChanger} required/>

                                    

                            </fieldset>

                            <fieldset>
                                <legend>Last Name</legend>
                                <Input type="text" placeholder="Enter your last name"  name="lastname" value={lastname}  onChange={regChanger} required/>

                            </fieldset>

                            <fieldset>
                                <legend>Email</legend>
                                <Input type="email" placeholder="Enter your email"  name="regemail" value={regemail}  onChange={regChanger} required/>

                            </fieldset>

                            <fieldset>
                                <legend>Password</legend>
                                <Input type="password" placeholder="Enter password"  name="regpassword" value={regpassword}  onChange={regChanger} required />

                               

                            </fieldset>

                        </div>

                        <div class='gender'>

                           <input type='radio' name='sex' value={male}/>&nbsp;  Male    &nbsp;
                           <input type='radio' name='sex' value={female}/>&nbsp; Female&nbsp;
                           <input type='radio' name='sex' value={other}/>&nbsp; Other
                        </div>

                        <Button type="submit" className='login' children="Create Account"/>

                       

                        


                    </form>

                </div>
                 <hr/>

                  <div className="signinsection">
                <h4>Already have a Yourswatch account?</h4>

                <Button type="button" className="signup" children="SIGN IN" onClick={accountHandler}/>
            </div>

            </div>
):(<div className='signinback'>
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

                <Button type="button" className="signup" children="CREATE ACCOUNT" onClick={regHandler}/>
            </div>

            

            </div>
            )

            }

            

            
            
        </div>
    )

}
export default Signin