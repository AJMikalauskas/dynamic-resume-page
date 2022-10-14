import React from 'react';
import { useNavigate } from 'react-router-dom';


const Missing404 = () => {
    let navigate = useNavigate();
    function handleNavToHome(e: any) {
      e.preventDefault();
      navigate(-1);
    }

  return (
    <div className='h-screen w-full text-center py-[20%]' >
        <p className='font-bold'>This Page Doesn't Exist, Press the Button Below To Go Back To The Previous Page!</p>
        <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mt-4 rounded' onClick={handleNavToHome}>
                Go Back
        </button>
    </div>
  )
}

export default Missing404;