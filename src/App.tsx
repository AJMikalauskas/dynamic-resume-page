import React, { Suspense } from "react";
import LoadingSpinner from "./components/UI/LoadingSpinner";
// import "./App.css";
// // import bgImg from "../src/img/microsoft-bg.png";
// import ethIcon from "../src/img/eth.png";
// import fmhsIcon from "../src/img/fmhsLogo.png";
// import {AiOutlineSearch, AiOutlineCaretDown, AiOutlineCaretUp, AiOutlineCaretRight, AiOutlinePoweroff}  from "react-icons/ai";
// import linkedinPicOfMe from "../src/img/linkedinprofile.png";
// import windows11Icon from "../src/img/windows-11-icon.png";
// import taskViewIcon from "../src/img/task-view.png";
// import fileExplorerIcon from "../src/img/file-explorer.png";
// import mailIcon from "../src/img/mail.png";
// import phoneIcon from "../src/img/mobile-phone.png";
// import linkedInIcon from "../src/img/linkedin.png";
// import githubIcon from "../src/img/github.png";
// import settingsIcon from "../src/img/settings.png"

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
//import NewsLetterSubscribe from "./components/NewsLetterSubscribe";

const MicrosoftTemplate = React.lazy(() => import("./components/MicrosoftResumeTemplate"));
const GoogleTemplate = React.lazy(() => import("./components/GoogleResumeTemplate"));
const FacebookTemplate = React.lazy(() => import("./components/FacebookTemplate"));

function App() {

  return (
    <div className="bg-gray-500">
    <Suspense
      fallback={
        <div className="">
          <LoadingSpinner />
        </div>
      }
    >
      <Routes>
        <Route path="/" element={
    <div className="h-screen p-9">
      <p>Test Intro</p>
      <div className="mt-[100px] mx-[5%] justify-evenly flex h-[400px]">
        <Link to="/microsoft" className="hover:scale-125 text-center text-white" style={{transition: "transform .5s"}}>
          <div>Microsoft</div>
          <img src={microsoftTemplateSmall} alt="microsoft-template-small" className=" w-[200px] items-center flex h-full" />
        </Link>
        <Link to="/google" className="hover:scale-125 text-center text-white" style={{transition: "transform .5s"}}>
          <div>Google</div>
          <img src={googleTemplateSmall} alt="google-template-small" className="items-center flex h-full" style={{transition: "transform .5s"}}/>
        </Link>
        <Link to="/facebook" className="hover:scale-125 text-center text-white" style={{transition: "transform .5s"}}>
          <div>Facebook</div>
          <img src={facebookTemplateSmall} alt="facebook-template-small" className="h-full items-center flex" style={{transition: "transform .5s"}}/>
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
        <Route path="google" element={<GoogleTemplate/>}/>
        <Route path="microsoft" element={<MicrosoftTemplate/>}/>
          <Route path="facebook" element={<FacebookTemplate/>}/>
    </Routes>
    </Suspense>
    </div>
  );
}

export default App;
