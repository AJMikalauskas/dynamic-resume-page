import { useState, useRef, useEffect, useCallback  } from "react";
// import "./MicrosoftResumeTemplate.css";
// import bgImg from "../src/img/microsoft-bg.png";
// import ethIcon from "../../src/img/eth.png";
// import fmhsIcon from "../../src/img/fmhsLogo.png";
import {
  AiOutlineSearch,
  // AiOutlineCaretDown,
  // AiOutlineCaretUp,
  // AiOutlineCaretRight,
  // AiOutlinePoweroff,
} from "react-icons/ai";
//import linkedinPicOfMe from "../src/img/linkedinprofile.png";
// import windows11Icon from "../../src/img/windows-11-icon.png";
// import taskViewIcon from "../../src/img/task-view.png";
// import fileExplorerIcon from "../../src/img/file-explorer.png";
// import mailIcon from "../../src/img/mail.png";
// import phoneIcon from "../../src/img/mobile-phone.png";
// import linkedInIcon from "../../src/img/linkedin.png";
// import githubIcon from "../../src/img/github.png";
// import settingsIcon from "../../src/img/settings.png";

import googleLogo from "../img/google-logo.png";
import xIcon from "../img/x-icon.png";
import keyboardIcon from "../img/keyboard-icon.png";
import googleMicIcon from "../img/google-mic-icon.png";
//import searchIcon from "../img/search-icon.png";
import googleSearchIcon from "../img/google-search.png";
//import dummyData from "./DummyData.json";
import smallLinkedinPhoto from "../img/linkedin-circular-photo.png";
import defaultImageIcon from "../img/mountain-image-icon.png";
import mapPinIcon from "../img/map-pin-icon.png";
import newsIcon from "../img/news-icon.png";
import bibleIcon from "../img/bible-icon.png"
import googleMapsIcon from "../img/google-maps-icon.png";
import facebookLogo from "../img/facebook-logo-icon.png";
import homeIcon from "../img/home-icon.png"
import {useNavigate} from 'react-router-dom';
//import Modal from './Modal';
import axios from 'axios';
//import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";

// const socialIcons: {icon: JSX.Element, url: string}[] = [
//   {
//     icon: <AiOutlineSearch/>,
//     url: "./"
//   }
// ]
type skillsType = {
  id: string, 
  skillSetName: string,
  skills: Array<string>,
  _id: string
}

type otherProjectsType = {
  description: string,
  github: string,
  id: string,
  link: string,
  name: string,
  _id: string
}

type projectsType = {
  explanationBulletPoints: string,
  github: string,
  id: string,
  link: string,
  name: string,
  techStack: string,
  timestamp: string,
  _id: string
}

type singleFieldsType = {
  id: string,
  text: string,
  _id: string
}

type fields = {
  otherProjects: Array<otherProjectsType>, 
  projects: Array<projectsType>, 
  singleFields: Array<singleFieldsType>,
  skills: Array<skillsType> 
}
function GoogleResumeTemplate() {
  const [isLoading, setIsLoading] = useState(false);
  //const [personalInfo, setPersonalInfo] = useState<Array<string>>([])
  const [fillInData,setFillInData] = useState<fields>();
  const effectRan = useRef(false);

  async function pushTestReq() {
    setIsLoading(true);
    try {
      const res = await axios.get("http://localhost:5000/retrieveAllData");
      console.log(res.data);
      console.log("successful in adding to database");
      // const { otherProjects, projects, singleFields, skills} = res.data;
      console.log(typeof res.data)
      const data: fields = res?.data;
      console.log(fillInData);
     setFillInData(data);
     //setPersonalInfo(fillInData.singleFields[2].text.split("."));

     
    }catch(err) {
     console.log(err);
    }
    setIsLoading(false);
  } 

useEffect(() => {
  if(effectRan.current === false) {
    pushTestReq();
  
    return () =>  {
      console.log('unmounted')
      effectRan.current = true;
    }
}

})


//  const { name, Projects, Skills, OtherProjects } = dummyData;
//  const [isOpen,setIsOpen] = useState(true);

//  const project1BulletPoints = Projects[0].explanationBulletPoints.split(".");
//  const project2BulletPoints = Projects[1].explanationBulletPoints.split(".");
  let navigate = useNavigate();
  const handleNavToHome = useCallback((e:any, page: string | undefined) => {
    e.preventDefault();
    navigate(`/${page && page}`);
    // Navigate will never change but due to IDE, i'll add it even if unnecessary.
  }, [navigate]);

  // const googleMapsData = OtherProjects['Google Maps App'];
  // const bibleRatingData = OtherProjects['Rate App'];
        // {/* <div className="float-left w-[15%] h-[10%] mt-[40%]">
        //     <a className="hover:cursor-pointer">
        //         <BsFillArrowLeftCircleFill size="50px" className=" rounded-[50%] border-1 border-blue-500" />
        //     </a>
        // </div> */}
        // {/* <Modal open={isOpen} onClose={() => setIsOpen(false)} templateName="Google">
        //   <span className='float-left mr-[5px]'> Click </span>
        //     <img src={googleLogo} alt="google-logo" width="50px" className='float-left mt-1'/>
        //    <span className='ml-[5px]'> to go back</span>
        // </Modal> */}

  return (
    <>
    {!isLoading &&
    <div className="max-w-[1000px] m-auto p-9 justify-center w-full h-full relative z-10">
        <div className='float-left p-2 text-sm bg-white/40 rounded-lg mt-[40%] hover:cursor-pointer hover:bg-white/70' onClick={(event) => {handleNavToHome(event,"")}}>
          <img src={homeIcon} alt="home-icon" width="50px" className=''/>
        </div>
        <div className='float-right p-2 text-sm bg-white/40 rounded-lg mt-[40%] hover:cursor-pointer hover:bg-white/70' onClick={(event) => {handleNavToHome(event,"facebook")}}>
          <img src={facebookLogo} alt="facebook-logo-icon" width="50px" className=''/>
        </div>
      <div className="rounded-md mx-auto border-2 h-[92.25vh] w-[63%] text-black p-2 bg-white">
        <div className="w-full h-[17%] relative">
          <div className="">
            <img
              onClick={(event) => {handleNavToHome(event,"")}}
              src={googleLogo}
              alt="google-logo"
              className="w-[20%] h-[30%] inline-block hover:cursor-pointer"
            />
            <p className="rounded-md bg-[#fff] text-black shadow  shadow-black/30 drop-shadow-xl inline-block mx-4 pl-4 w-[60%]">
            {fillInData?.singleFields[1].text}
              <div className="w-[45%] float-right">
                {/*  Have this go to resume or portfolio? */}
                <AiOutlineSearch
                  size="20px"
                  className="text-sky-700 float-right pt-1 mr-1 hover:cursor-pointer"
                />
                {/* Hover and get cursor pointer, result is what though? */}
                <img
                  src={googleMicIcon}
                  alt="google-mic-icon"
                  className="max-w-[16%] float-right"
                />
                <img
                  src={keyboardIcon}
                  alt="keyboard-icon"
                  className="max-w-[16%] float-right"
                />
                <img
                  src={xIcon}
                  alt="cross-icon"
                  className="max-w-[17%] float-right border-r-2 mr-1"
                />
                {/* <img src={searchIcon} alt="search-icon" className='max-w-[15%] px-1'/> */}
                {/* <AiOutlineSearch size="25px" className='text-sky-700 float-right'/> */}
              </div>
            </p>
            <img
              src={smallLinkedinPhoto}
              alt="linkedin-me"
              className="w-[50px] rounded-[50%] inline-block ml-3 border-2 border-blue-500"
            />
            {/* <div className='inline-block h-'>
                    Test
                </div> */}
          </div>
          <div
            className="bottom-0 absolute w-full p-4 text-lg "
            style={{ fontSize: "10px", lineHeight: 0 }}
          >
            <ul>
              <li className="inline-block text-sky-700 font-semibold border-b-2 border-b-sky-700">
                <img
                  src={googleSearchIcon}
                  alt="google-search-icon"
                  width="15px"
                  className="inline-block"
                />
                {/* May change later */}
                <p className="inline-block">{fillInData?.singleFields[2].text.split(";")[0]}</p>
              </li>
              {/* Make into mail icon? */}
              <li className="inline-block mx-2">
                <img
                  src={defaultImageIcon}
                  alt="default-mountain-icon"
                  width="15px"
                  className="inline-block"
                />
                <p className="inline-block pl-1">{fillInData?.singleFields[2].text.split(";")[1]}</p>
              </li>
              <li className="inline-block">
                <img
                  src={mapPinIcon}
                  alt="map-icon"
                  width="10px"
                  className="inline-block"
                />
                <p className="inline-block pl-1">
                  {fillInData?.singleFields[2].text.split(";")[2]}
                </p>
              </li>
              {/* Make into phone icon? */}
              <li className="inline-block ml-2">
                <img
                  src={newsIcon}
                  alt="news-icon"
                  width="10px"
                  className="inline-block"
                />
                <p className="inline-block pl-1">{fillInData?.singleFields[2].text.split(";")[3]}</p>
              </li>
            </ul>
            <hr className="border-gray" />
          </div>
        </div>
        <div
          className="ml-4 grid mt-2"
          style={{ gridTemplateColumns: "3fr 1fr" }}
        >
          <div className="">
            {/* Create a */}
            <div className="">
                <a href={fillInData?.projects[0].link} target="_blank" rel="noreferrer" >
              <div className="flex">
                <p className="text-sm font-semibold">Project</p>
                <p
                  className="ml-2"
                  style={{ fontSize: "9px", lineHeight: "1.25rem", paddingTop: "1.5px"}}
                >
                  {fillInData?.projects[0].link}
                </p>
              </div>
              <p className="text-sky-700 font-semibold text-sm hover:underline">
                {fillInData?.projects[0].name} | {fillInData?.projects[0].timestamp}
              </p>
              </a>
              <p className="text-xs" style={{ fontSize: "10px" }}>
                <ul>
                  {fillInData?.projects[0].explanationBulletPoints.split(".").map((bp, idx) => (
                    <li key={idx}> {bp} </li>
                  ))}
                </ul>
              </p>
            </div>
            <div className="mt-6">
              {/* "https://dapp-exchange.surge.sh/" */}
            <a href={fillInData?.projects[1].link} target="_blank" rel="noreferrer">
              <div className="flex">
                <p className="text-sm font-semibold">Project 2</p>
                <p
                  className="ml-2 pt-0.25"
                  style={{ fontSize: "9px", lineHeight: "1.25rem", paddingTop: "1.5px" }}
                >
                  {fillInData?.projects[1].link}
                </p>
              </div>
              <p className="text-sky-700 font-semibold text-sm hover:underline">
                {fillInData?.projects[1].name} | {fillInData?.projects[1].timestamp}
              </p>
              </a>
              <p className="text-xs" style={{ fontSize: "10px" }}>
                <ul>
                  {fillInData?.projects[1].explanationBulletPoints.split(".").map((bp, idx) => (
                    <li key={idx}> {bp} </li>
                  ))}
                </ul>
              </p>
            </div>
            <div className="mt-6">
                {/* Link to what? Photo of My High School Degree? */}
              <div className="flex">
                <p className="text-sm font-semibold">Education</p>
              </div>
              <p className="text-sky-700 font-semibold text-sm">

              {fillInData?.singleFields[0].text.split(",")[1]} |   {fillInData?.singleFields[0].text.split(",")[0]}
              </p>
              <p className="text-xs" style={{ fontSize: "10px" }}>
                <ul>
                  <li>
                    A/B Honor Roll Through All Years of High School (2018 -
                    2021)
                  </li>
                  <li>3.76 GPA</li>
                </ul>
              </p>
            </div>
            <div className="mt-6 accordion" id="accordionExample">
              <div className="accordion-item bg-white border border-gray-200">
                <h2 className="accordion-header mb-0" id="headingOne">
                  <button
                    className="
                    accordion-button
                    relative
                    flex
                    items-center
                    w-full
                    py-2
                    px-2
                    text-base text-gray-800 text-left
                    bg-white
                    border-0
                    rounded-none
                    transition
                    focus:outline-none
                "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Other Projects
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body py-2 px-2 text-sm">
                    <ul>
                      <li className="pb-4">
                        <div className="flex">
                          <span className="float-left align-middle">
                            <img alt="googleMapsIcon" src={googleMapsIcon} width="30px" className='rounded-lg'/>
                          </span>
                          <p className="pt-1"><strong>{fillInData?.otherProjects[1].name}</strong></p>
                          <div className="text-xs pt-1.5 pl-2 ">
                            (<span className="text-sky-700 hover:underline cursor-pointer font-semibold"><a href={fillInData?.otherProjects[1].link}>Demo</a></span>) 
                             <span> - </span> 
                            (<span className="text-sky-700 hover:underline cursor-pointer font-semibold"><a href={fillInData?.otherProjects[1].github}>GitHub</a></span>)
                          </div>
                        </div>
                        <p className="text-xs">
                          {fillInData?.otherProjects[1].description}
                        </p>
                      </li>
                      <li>
                        <div className="flex">
                          <span className="float-left align-middle">
                            <img alt="googleMapsIcon" src={bibleIcon} width="30px" className='rounded-lg'/>
                          </span>
                          <p className="pt-1"><strong>{fillInData?.otherProjects[0].name}</strong> </p>
                          <div className="text-xs pt-1.5 pl-2 ">
                            (<span className="text-sky-700 hover:underline cursor-pointer font-semibold"><a href={fillInData?.otherProjects[0].link}>Demo</a></span>) 
                             <span> - </span> 
                            (<span className="text-sky-700 hover:underline cursor-pointer font-semibold"><a href={fillInData?.otherProjects[0].github}>GitHub</a></span>)
                          </div>
                        </div>
                        <p className="text-xs">
                          {fillInData?.otherProjects[0].description}
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-2">
            <div className="border border-gray-300 rounded-md">
              <p className="mx-2 my-1 text-sm font-semibold">Skills:</p>
              <div
                className="accordion accordion-flush"
                id="accordionExample5"
              >
                <div className="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                  <h2 className="accordion-header mb-0 border-t-2" id="headingOne5">
                    <button
                      className="accordion-button relative flex px-2 py-1 items-center w-full font-semibold text-sky-700 text-base text-left bg-white border-0 rounded-none transition focus:outline-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne5"
                      aria-expanded="true"
                      aria-controls="collapseOne5"
                      style={{fontSize: "10px", lineHeight: "1rem"}}
                    >
                      {fillInData?.skills[0].skillSetName}
                    </button>
                  </h2>
                  <div
                    id="collapseOne5"
                    className="accordion-collapse border-0 collapse show py-2 px-2"
                    aria-labelledby="headingOne5"
                  >
                    <div className="accordion-body text-xs">
                        <ul>
                          {fillInData?.skills[0].skills.map((skillName, idx) => (
                                <li key={idx} className="mb-1.5">{skillName}</li>
                            ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                  <h2 className="accordion-header mb-0 border-t-2" id="headingTwo5">
                    <button
                      className="accordion-button relative flex px-2 py-1 items-center w-full font-semibold text-sky-700 text-base text-left bg-white border-0 rounded-none transition focus:outline-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo5"
                      aria-expanded="false"
                      aria-controls="collapseTwo5"
                      style={{fontSize: "10px", lineHeight: "1rem"}}
                    >
                      {fillInData?.skills[1].skillSetName}
                    </button>
                  </h2>
                  <div
                    id="collapseTwo5"
                    className="accordion-collapse border-0 collapse show py-2 px-2"
                    aria-labelledby="headingTwo5"
                  >
                    <div className="accordion-body text-xs">
                        <ul>
                            {fillInData?.skills[1].skills.map((skillName, idx) => (
                                <li key={idx} className="mb-1.5">{skillName}</li>
                            ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                  <h2 className="accordion-header mb-0 border-t-2" id="headingThree5">
                    <button
                      className="accordion-button relative flex px-2 py-1 items-center w-full font-semibold text-sky-700 text-base text-left bg-white border-0 rounded-none transition focus:outline-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree5"
                      aria-expanded="false"
                      aria-controls="collapseThree5"
                      style={{fontSize: "10px", lineHeight: "1rem"}}
                    >
                      {fillInData?.skills[2].skillSetName}
                    </button>
                  </h2>
                  <div
                    id="collapseThree5"
                    className="accordion-collapse border-0 collapse show py-2 px-2"
                    aria-labelledby="headingThree5"
                  >
                    <div className="accordion-body text-xs">
                        <ul>
                            {fillInData?.skills[2].skills.map((skillName, idx) => (
                                <li key={idx} className="mb-1.5">{skillName}</li>
                            ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        {/* <div className="w-[15%] h-[10%] mt-[40%] pl-24">
            <a className="hover:cursor-pointer">
                <BsFillArrowRightCircleFill size="50px" className=" rounded-[50%] border-1 border-blue-500" />
            </a>
        </div> */}
    </div>
    }
    </>
  );
}

export default GoogleResumeTemplate;
