import React from 'react'
import cryptoAppPreview from "../img/cryptoappsmall.png";
import dummydata from "./DummyData.json";
import { useNavigate } from 'react-router-dom';

const CryptoApp = () => {
    const { Projects } = dummydata;

    let navigate = useNavigate();
    function handleNavToHome(e: any) {
      e.preventDefault();
      navigate(-1);
    }

  return (
    <div className='max-w-[1000px] m-auto p-9 justify-center w-full h-full'>
        <div className='justify-center mx-auto h-[92vh] pt-[25%]'>
            <p className='font-bold text-5xl text-center pt-2'>Crypto Login Authentication App</p>
            <div className="ml-4 grid mt-8" style={{ gridTemplateColumns: "2fr 2fr" }}>
                <div className='p-2'>
                    <img src={cryptoAppPreview} alt='crypto-app-preview'/>
                </div>
                <div className=''>
                    <p className='mt-4' style={{ lineHeight: "2"}}>
                        This Web App attempts to mock robinhood but for crypto investing. Some cool features include the typewriter animation on the main page,
                        the JSON Web Token(JWT) Authentication for logging users in and keeping persistent login, and the Create Account Regex Verification 
                        for the first name, last name, email, and password fields.
                    </p>
                </div>
            </div>
            <div className='text-center mt-8'>
                <button className='bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded' >
                    <a href={Projects[1].link} target="_blank" rel="noreferrer">Demo</a> 
                </button>
            </div>
            <div className='text-center mt-4'>
            <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={handleNavToHome}>
                Go Back
            </button>
            </div>
        </div>
    </div>
  )
}

export default CryptoApp