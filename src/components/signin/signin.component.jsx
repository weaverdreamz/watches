import './signin.scss';
import Input from '../input/input.component';
import { useState } from 'react';
import Button from '../Button/button.component';
import { useDispatch, useSelector } from 'react-redux';
import { SetSignIn } from '../../store/signin/signin.action';
import { signInSelector } from '../../store/signin/signin.selector';
import {setTwo} from '../../store/two/two.action';
import { twoSelector } from '../../store/two/two.selector';
import { signInWithGooglePopup, createUserUsingEmailAndPassword, signUserWithEmailAndPassword, createUserDocument} from '../../backend/firebase';




const valueDefault = {email:"", password:""};

const regDefault   = {firstname:"", lastname:"", regpassword:"", regemail:"",  male:"Male", female:"Female", other:"Other"};

const defaultSignWarn = "";
const defaultWarn = "";

let genderHolder="";




const Signin = ({...otherProps})=>{

    

    const dispatch = useDispatch();
    const collectSign = useSelector(signInSelector);
    const displayReg = useSelector(twoSelector);
    const [warn, setWarn] = useState(defaultWarn);
    const [signWarn, setSignWarn] = useState(defaultSignWarn);

    const [formInput, setFormInput] = useState(valueDefault);
    const [regInput, setRegInput] = useState(regDefault);
    const [able, setAble] = useState(false);

    const {email, password} = formInput;

    const {firstname, lastname, regpassword, regemail, male, female, other} = regInput;

    const changeHandler = (event)=>{
        const {name, value} = event.target;
        setFormInput({...formInput, [name]:value})
    }

    const sexHandler = (event)=>{

        
        genderHolder = event.target.value;
        console.log(genderHolder);
        
    }




    const closeHandler = ()=>{

        setRegInput(regDefault);
        setFormInput(valueDefault);

        setSignWarn(defaultSignWarn);
        setWarn(defaultWarn);

        dispatch(SetSignIn(2));
         dispatch(setTwo(0));
        

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

    const googleSignInHandler = async()=>{

        setAble(true);

        try{
            const {user} = await signInWithGooglePopup();
            setAble(true)

        }
        catch(error){
            console.log(error.code);
            setAble(false);
        }

        

    }


    const RegistrationHandler = async(event)=>{
        
        event.preventDefault();
        setAble(able)

       

        if(regpassword.length<=8){

            setWarn("! your password is not strong enough");
            setAble(false);
            return;
        }
        if(genderHolder===""){
             setWarn("! select a gender");
             setAble(false);
             return;
        }


        try{

            let doneauth = await createUserUsingEmailAndPassword(regemail,regpassword);
            console.log(doneauth);
            await createUserDocument(doneauth.user, {userEmail:regemail, userPassword:regpassword, userName:firstname+" "+lastname, gender:genderHolder})
            setRegInput(regDefault);

        }

        catch(error){

             if(error.code==="auth/email-already-in-use"){
                setWarn("! email already in use");
                 setAble(false);
            }
            else{
                
                console.log("error encountered while creating user", error.message)
                 setAble(false);
            }

        }


    }


    const signInAuth = async(event)=>{

        event.preventDefault();
        setAble(true);

        try{

            const {user} = await signUserWithEmailAndPassword(email,password);
            setAble(true);


        }

        catch(error){

        if(error.code==="auth/invalid-login-credentials"){
            setSignWarn("! Wrong Sign In Credentials");
            setAble(false);

        
        }

        else{
            setSignWarn(error.code);
            setAble(false);
        }
                    

        }

        

    }

    

    return(
        <div {...otherProps}>

            {

                displayReg===1?(<div className={`notShow ${displayReg===1?'regnow':'notShow'}`}>

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

                      <h5 id='warn'>{warn}</h5>

                    <form onSubmit={RegistrationHandler}>

                      

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

                        <div className='gender'>

                           <input type='radio' name='sex' value={male} onChange={sexHandler}/>&nbsp;  Male    &nbsp;
                           <input type='radio' name='sex' value={female} onChange={sexHandler}/>&nbsp; Female&nbsp;
                           <input type='radio' name='sex' value={other} onChange={sexHandler}/>&nbsp; Other
                        </div>

                        <Button type="submit" className='login' children="Create Account"  disabled={able}/>

                       

                        


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
                 <h5 id='warn'>{signWarn}</h5>
                

                <form onSubmit={signInAuth}>

                    

                    <fieldset>
                        <legend>Email Address</legend>
                        <Input type="email" placeholder="Enter your email"  name="email" value={email}  onChange={changeHandler} required/>

                    </fieldset>

                    <fieldset>
                        <legend>Password</legend>
                        <Input type="password" name="password" value={password} placeholder="Enter your password"  onChange={changeHandler} required/>

                    </fieldset>

                

                <h4>Forgot Password?</h4>

                <Button type="submit" className='login' children="Sign In" disabled={able}/>
                <Button type="button" className='google' onClick={googleSignInHandler} children="Sign In With Google" disabled={able}/>

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