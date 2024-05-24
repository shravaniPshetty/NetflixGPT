import { SUPPORTED_LANGUAGES } from "../utils.js/constants";
import lang from "../utils.js/languageConsts";
import {useDispatch,useSelector} from "react-redux";
import { setLanguage } from "../utils.js/gptSlice";
import { Link } from "react-router-dom";

const GptSearch = ()=>{
    const dispatch = useDispatch();
    const langKey = useSelector((store) => store.gpt.language);

    const handleLanguage = (e)=>{
       dispatch(setLanguage(e.target.value));
    }
    return(
        <div className=" bg-black h-screen relative">
            <Link to="/browse">
            <img className=' w-20 ' src="https://images.ctfassets.net/4cd45et68cgf/4nBnsuPq03diC5eHXnQYx/d48a4664cdc48b6065b0be2d0c7bc388/Netflix-Logo.jpg"></img>
            </Link>
            <div className="top-0 right-0 absolute" >
            <select className=" m-3 p-3 bg-slate-200 rounded-md" onChange={handleLanguage}>
                {SUPPORTED_LANGUAGES.map((lang)=>{
                    return <option key={lang.identifier}value={lang.identifier}>{lang.name}</option>
                })}
            </select>
            </div>
            <div className="pt-[10%] flex justify-center">
                <form className=" w-1/2 bg-black grid grid-cols-12">
                    <input
                    type="text"
                    className=" p-4 m-4 col-span-9 text-black"
                    placeholder={lang[langKey].gptSearchPlaceholder}
                    />
                    <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-black rounded-lg">
                    {lang[langKey].search}
                    </button>
                </form>
        </div>
    </div>
    );
};

export default GptSearch;