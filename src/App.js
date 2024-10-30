import {Routes, Route} from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import {useEffect} from 'react';
import { whenAuthStateChange, createUserDocument } from "./backend/firebase";
import { setUser } from "./store/cart/user/user.action";
import { useDispatch } from "react-redux";


const App = ()=>{

    const dispatch = useDispatch()

    useEffect(()=>{

        const unSubscribed = whenAuthStateChange((user)=>{

            if(user){
                createUserDocument(user)
            }

            dispatch(setUser);

            

        })

        return unSubscribed
    })


    

   
    
    return(
        <div className='app'>

            <Routes>
                <Route path='/' element={<Navigation/>}>
                    <Route index element={<Home/>}/>
                    
                </Route>
            </Routes>

        </div>

    )
    

}
export default App;