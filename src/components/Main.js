import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from  "../utils.js/firebase";
import { useEffect } from "react";
import {useDispatch} from "react-redux";
import {addUser,removeUser} from "../utils.js/userSlice";
import Browse from "./Browse";
import GptSearch from "./GptSearch";


const Main = ()=>{

    const dispatch = useDispatch();

    const appRouter = createBrowserRouter([
        {
            path:'/',
            element:<Login/>
        },
        {
            path:'/browse',
            element:<Browse/>
        },
        {
          path:'/GptSearch',
          element:<GptSearch/>
        }
    ]);

    useEffect(()=>{onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid, displayName , email, photoURL} = user;
          dispatch(addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }))
        } else {
          // User is signed out
          dispatch(removeUser());
        }
      });
    },[])
    return(
        <div>
           <RouterProvider router={appRouter}/>
        </div>
    )
};

export default Main;