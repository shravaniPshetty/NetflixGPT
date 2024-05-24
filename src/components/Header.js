import { signOut } from "firebase/auth";
import {auth} from "../utils.js/firebase";
import {Link, useNavigate} from "react-router-dom";
import { SUPPORTED_LANGUAGES } from "../utils.js/constants";
import { useEffect } from "react";

const Header = ()=>{

  const navigate = useNavigate();

  const handlesignOut = ()=>{
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
    });
    
  };

    return (
        <div>
         <div className='flex justify-between text-white bg-black'>
           <div className=' flex '>
             <img className=' w-20 ' src="https://images.ctfassets.net/4cd45et68cgf/4nBnsuPq03diC5eHXnQYx/d48a4664cdc48b6065b0be2d0c7bc388/Netflix-Logo.jpg"></img>
             <ul className='flex '>
               <li className=' m-2 p-2 text-xs'>Home</li>
               <li className=' m-2 p-2 text-xs'>TV Shows</li>
               <li className=' m-2 p-2 text-xs'>Movies</li>
               <li className=' m-2 p-2 text-xs'>New & Popular</li>
               <li className=' m-2 p-2 text-xs'>My list</li>
               <li className=' m-2 p-2 text-xs'>Browse by languages</li>
             </ul>
           </div>
           <div className=' flex'>
            <ul className=" flex ">
                <button className=' m-2 p-2 bg-orange-700 rounded-md'><Link to="/GptSearch">GptSearch</Link></button>
                <button className=" m-2 p-2" onClick={handlesignOut}>Sign Out</button>
             </ul>
           </div>
         </div>
        </div>
    );
}

export default Header;