import {useState} from 'react';
import axios from "axios";
//import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
//import Label from "./Label";
//Schema creation and usage using yup package.
// import * as Yup from 'yup';

// interface FormValues {
//     email: string;
// }

// const SignupSchema = Yup.object().shape({
//     email: Yup.string().email("Invalid email!").required("Required!")
// })

const NewsletterSubscribe = () => {

    // const submitForm =  async (values: FormValues) => {
    //     console.log(values);
    //     const {email} = values;
    //     try {
    //         const payload = {
    //             email_address: email
    //         };

    //         await axios.post('./functions/add-email-subscriber', payload);
    //         alert('Contact Details added successfully!');
    //     } catch(err: any) {
    //         alert(err.message);
    //     }
    // }

    // return(
    //     <>
    //     <Formik  initialValues={{email: '' }} validationSchema={SignupSchema} onSubmit={submitForm}>
    //         {(formik) => (
    //         <Form className='mt-40 ml-[33%] bg-cyan-600 w-80 p-4 flex flex-col text-center'>
    //             <h2 className='text-2xl font-bold'>Sign Up for my newsletter!</h2>
    //             <div className='my-2 flex flex-col'>
    //                 {/* <Label htmlFor='email' text="email" required={true}/> */}
    //                 <Field name="email" className="p-2 border-2 border-white" placeholder="Email"></Field>
    //                 <ErrorMessage className='text-red-700' component="div" name="email"/>
    //             </div>
    //             <button disabled={!formik.isValid || !formik.dirty} type='submit' className='my-2 px-4 py-2 text-white bg-green-800 disabled:opacity-50 transition-all duration-300'>Subscribe</button>
    //         </Form>
    //         )}
    //     </Formik>
    //     </>
    // )
    // //const MAILCHIMP_URL = process.env.PUBLIC_MAILCHIMP_URL;
    // // Will Add Later
    const [email, setEmail] = useState("");
    const [state, setState] = useState("IDLE");
    const [status, setStatus] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);

    const subscribe = async(e: any) => {
        e.preventDefault();
        setState("LOADING");
        setErrorMsg(null);

        try {
            const response = await axios.post("https://dynamic-resume-backend.herokuapp.com/addSubscriber", { email });
            const data = await response.data;
            setStatus(response.status);
            setState(data.msg)
        } catch(e: any) {
            setErrorMsg(e.response.data.error);
            setState("ERROR");
        }
    }

    return (
        <div className='max-h-[500px] flex flex-col items-center w-full p-6 border-white border-solid border rounded-sm mt-[5%] text-white z-10 relative'>
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
            {status === 200 && (
                <div className='bg-green-600 mt-2 text-center w-[25%] p-2'>
                    <p className=' text-white'>{state}</p>
                </div>
            )}
        </div>
    )
}

export default NewsletterSubscribe;