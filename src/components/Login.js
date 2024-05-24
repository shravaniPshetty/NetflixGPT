import { useRef, useState } from "react";
import checkValidation from "../utils.js/checkValidation";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils.js/firebase";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider,signInWithPopup,signInWithRedirect } from "firebase/auth";


const Login = ()=>{

    const navigate=useNavigate();
    const provider = new GoogleAuthProvider();


    const [signInform,UseSign]=useState(true);

    const email = useRef();
    const password = useRef();

    const [errorMessage,seterrorMessage]=useState();

    const validation = ()=>{

        const result = checkValidation(email.current.value,password.current.value);

        seterrorMessage(result);

        if(result)return;

        if(signInform){

            signInWithEmailAndPassword(auth, email.current.value,password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigate("/browse");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                seterrorMessage(errorCode + "-" + errorMessage);
            });
        }
        else{

            createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                navigate("/browse");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                seterrorMessage(errorCode + "-" + errorMessage);
            });

        }

        

    }


    const handleSign = ()=>{
        UseSign(!signInform);
    }
    return(
       <div className=" relative"> 
        <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10">
            <img
                className="w-44"
                src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                alt="logo"
            />
        </div>
        <div className=" absolute ">  
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt="logo"></img>
        </div> 
        <form onSubmit={(e)=>e.preventDefault()} className=" bg-black text-white absolute w-3/12 my-36 mx-auto right-0 left-0 bg-opacity-75 p-12">
            <h1 className=" p-4 my-4 w-full font-bold text-2xl">{signInform ? "Sign In" : "Sign Up"}</h1>
            {
               (!signInform && <input  type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700 bg-opacity-65"></input>) 
            }
            <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-4 my-4 w-full bg-gray-700 bg-opacity-65"
            />
            <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-700 bg-opacity-65"
            />
            <p className="text-red-700">{errorMessage}</p>
            <button onClick={validation} className=" p-4 my-4 w-full bg-red-800 rounded-md">Sign In</button>
            <p className=" p-4 my-4 w-full" onClick={handleSign} >{signInform ? "New to Netflix? Sign Up now":"Already registered? Sign In Now." }</p>
        </form>
       </div>
    )
}

export default Login;