import {useState} from 'react';
import axios from 'axios';
import "./NewsLetterSub.css";

const NewsletterSubscribe = () => {
    // //const MAILCHIMP_URL = process.env.PUBLIC_MAILCHIMP_URL;
    // // Will Add Later
    const [email, setEmail] = useState("");
    const [state, setState] = useState("IDLE");
    const [status, setStatus] = useState("");
    const [errorMsg, setErrorMsg] = useState(null);

    const subscribe = async(e: any) => {
        e.preventDefault();
        setState("LOADING");
        setErrorMsg(null);

        try {
            const response = await axios.post("https://emailfunctionappdynamicresume.azurewebsites.net/api/PostHttpTrigger?code=Nc002lKofaiEagCMXFK3J_Ob4Uh7oUkeitlJ-O_WdAmnAzFuOSkC9g==", { email }, {
                headers: {
                    // "Access-Control-Allow-Headers": "Origin",
                    'Access-Control-Allow-Origin' : '*',
                    "Content-Type": "application/json"
                }
            });
            //const data = await response;
            console.log(response);
           setStatus(response.data);
           setState("SUCCESS");
        } catch(e: any) {
            console.log(e);
            setErrorMsg(e?.response?.data);
            setState("ERROR");
        }
    }

    return (
        <div className='max-h-[500px] flex flex-col items-center w-full p-6 border-white border-solid border rounded-sm mt-[5%] text-white z-10 relative fillScreen'>
            <div className='text-3xl font-bold text-center '>
                Subscribe To My Newsletter!
            </div>
            <p className='mt-2 font-light w-4/5 text-center leading-relaxed'> It will be sent out every week with my <u className='font-semibold'>most interesting tech articles and videos</u>, the <u className='font-bold'>top data structure/algorithm concept</u> I'm learning about, and the <u className='font-bold'>course I'm working on.</u></p>
            <form onSubmit={subscribe} className='flex w-1/2 justify-center mt-5 flex-col lg:flex-row'>
                <input
                    className='appearance-none mb-2 lg:mb-0 w-full lg:w-2/3 border border-gray-500 rounded py-2 px-4 text-md text-black'
                    type="text"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button
                    className={`lg:ml-2 w-full lg:w-1/3 shadow bg-cyan-500 focus:shadow-outline focus:outline-none text-center
                    ${state === "LOADING" && "button-gradient-loading"
                    }`}
                    type="button"
                    disabled={ state === "LOADING" }
                    onClick={subscribe}
                >
                    Subscribe
                </button>
            </form>
            {state === "ERROR" && (
                <div className='bg-red-600 mt-2 text-center w-[25%] p-2'>
                    <p className=' text-white'>{errorMsg}</p>
                </div>
            )}
            {state === "SUCCESS" && (
                <div className='bg-green-600 mt-2 text-center w-[25%] p-2'>
                    <p className=' text-white'>{status}</p>
                </div>
            )}
        </div>
    )
}

export default NewsletterSubscribe;