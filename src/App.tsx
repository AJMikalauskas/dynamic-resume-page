import { useState } from "react";
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

import FacebookResumeTemplate from "./components/FacebookTemplate";
import GoogleResumeTemplate from "./components/GoogleResumeTemplate";
import MicrosoftResumeTemplate from "./components/MicrosoftResumeTemplate";

// const socialIcons: {icon: JSX.Element, url: string}[] = [
//   {
//     icon: <AiOutlineSearch/>,
//     url: "./"
//   }
// ]
import "./App.css";

function App() {
  const [microsoftTemplateShowing, setMicrosoftTemplateShowing] =
    useState(true);
  const [googleTemplateShowing, setGoogleTemplateShowing] = useState(false);
  const [facebookTemplateShowing, setFacebookTemplateShowing] = useState(false);

  return (
    <>
      <div
        id="carouselExampleCrossfade"
        className="carousel slide carousel-fade relative"
        data-bs-ride="carousel"
      >
        {/* <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            type="button"
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div> */}
        <div className="carousel-inner relative w-full overflow-hidden">
          <div className="carousel-item active float-left w-full">
            <MicrosoftResumeTemplate/>
          </div>
          <div className="carousel-item float-left w-full">
            <GoogleResumeTemplate/>
          </div>
          <div className="carousel-item float-left w-full">
            <FacebookResumeTemplate/>
          </div>
        </div>
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleCrossfade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleCrossfade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* <h1 className="fade-in">Fade me in scotty</h1>
      <h1 className="fade-out">Fade me out scotty</h1> */}
      {/* <MicrosoftResumeTemplate/> */}
      {/* <GoogleResumeTemplate/> */}
      {/* <FacebookResumeTemplate /> */}
    </>
  );
}

export default App;
