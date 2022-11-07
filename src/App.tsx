import React, { Suspense } from "react";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import microsoftTemplateSmall from "./img/microsoftTemplateSmall.png";
import googleTemplateSmall from "./img/googleTemplateSmall.png";
import facebookTemplateSmall from "./img/facebookTemplateSmall.png";

// import FacebookResumeTemplate from "./components/FacebookTemplate";
// import GoogleResumeTemplate from "./components/GoogleResumeTemplate";
// import MicrosoftResumeTemplate from "./components/MicrosoftResumeTemplate";

// const socialIcons: {icon: JSX.Element, url: string}[] = [
//   {
//     icon: <AiOutlineSearch/>,
//     url: "./"
//   }
// ]
import "./App.css";
//import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
//import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { Route, Routes, Link } from "react-router-dom";
import NewsletterSubscribe from "./components/NewsLetterSubscribe";
//import axios from 'axios';
//import NewsLetterSubscribe from "./components/NewsLetterSubscribe";

const MicrosoftTemplate = React.lazy(() => import("./components/MicrosoftResumeTemplate"));
const GoogleTemplate = React.lazy(() => import("./components/GoogleResumeTemplate"));
const FacebookTemplate = React.lazy(() => import("./components/FacebookTemplate"));


// Main Project Pages
const CryptoAppProj = React.lazy(() => import("./components/CryptoApp"));
//const DappProj = React.lazy(() => import("./components/FacebookTemplate"));

// Missing 404 Page
const Missing404 = React.lazy(() => import("./components/Missing404"));

function App() {
//   const [data,setData] = useState({});
//   const effectRan = useRef(false);

// const pushTestReq = async() => {
//   try {
//     const res = await axios.get("http://localhost:5000/retrieveAllData");
//     //console.log(res.data);
//     console.log("successful in adding to database");
//     // const { otherProjects, projects, singleFields, skills} = res.data;
//     console.log(typeof res.data)
//     setData(res.data);
//   }catch(err) {
//     console.log(err);
//   }
// } 

// useEffect(() => {
//   if(effectRan.current === false) {
//     pushTestReq();
  
//     return () =>  {
//       console.log('unmounted')
//       effectRan.current = true;
//     }
// }

// }, [])

  return (
    // bg bg-gradient-to-r from-[#159957] to-[#155799]
    // bg bg-gradient-to-r from-[#159957] to-[#155799]
    <div className="text-white bg bg-gradient-to-r from-[#159957] to-[#155799] h-screen">
        <div className="w-full">
        <ul className="box">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    <Suspense
      fallback={
        <div className="">
          <LoadingSpinner />
        </div>
      }
    >
      <Routes>
        <Route path="/" element={
          // h-screen p-9
    <div className="p-9">
      {/* <div className="w-full h-full">
        <ul className="box">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div> */}
      <div className="text-center z-10 relative">
        <div className="border border-white text-white p-4 justify-center item-center">
          <div className="text-center m-auto max-w-[800px]">
            <p className="text-4xl font-bold mb-2">Hi, I'm Alexander</p>
            <p className=""> Thanks for visiting My Dynamic Resume Page! Feel free to explore all 3 templates and subscribe to my newsletter while you're here!</p>
          </div>
            {/* 1 interesting fact about me is that I love to code and if there were 27 hours in a day, I would code the extra 3 hours! */}
        {/* I've been playing with computers since I was 11 when I learned Graphic Design with Photoshop and have since learned how to make
        mini movies with imovie, youtube videos with lightworks, and coding with html, css, javascript, and more. */}
        {/* What My Resume Templates don't show, is my knowledge in data structures and algorithms,<br/>
        my mentor which is my Dad, a 30 year senior software engineer, and the hundreds of stack overflow articles I searched while building this. */}
        </div>
      </div>
      <div className="mt-[50px] mx-[5%] justify-evenly flex xs:h-[250px] sm:h-[300px] md:h-[400px] font-semibold z-20 relative">
        {/* lg is laptop size screen */}
        <Link to="/microsoft" className="hover:scale-125 text-center xs:w-[100px] xs:h-[80%] sm:w-[135px]  md:w-[150px] lg:w-[225px]" style={{transition: "transform .5s"}}>
          <div>Microsoft</div>
          <img src={microsoftTemplateSmall} alt="microsoft-template-small" className="w-[100%] items-center h-full" />
        </Link>
        <Link to="/google" className="hover:scale-125 text-center xs:w-[100px] xs:h-[80%] sm:w-[135px] md:w-[150px]  lg:w-[225px]" style={{transition: "transform .5s"}}>
          <div>Google</div>
          <img src={googleTemplateSmall} alt="google-template-small" className="w-[100%] items-center h-full" style={{transition: "transform .5s"}}/>
        </Link>
        <Link to="/facebook" className="hover:scale-125 text-center xs:w-[100px] xs:h-[80%] sm:w-[135px]  md:w-[150px] lg:w-[225px]" style={{transition: "transform .5s"}}>
          <div>Facebook</div>
          <img src={facebookTemplateSmall} alt="facebook-template-small" className=" w-[100%] h-full items-center" style={{transition: "transform .5s"}}/>
        </Link>
      </div>
      <NewsletterSubscribe/>
      {/* <div className="bottom-0 absolute mb-10 mx-[35%] w-[300px] text-center">
        <p>Subscribe to my awesome newsletter</p>
        <NewsLetterSubscribe/>
        <button className="border-2 mt-2">Subscribe!</button>
      </div> */}
    </div>
        } >
        </Route>
        {/* data={data} */}
          <Route path="microsoft" element={<MicrosoftTemplate />}/>
          <Route path="google" element={<GoogleTemplate/>}/>
          <Route path="facebook" element={<FacebookTemplate/>}/>
          <Route path="crypto-app" element={<CryptoAppProj/>}/>
          <Route path="*" element={<Missing404/>}/>
    </Routes>
    </Suspense>
    </div>
  );
}

export default App;
