import { useState, useEffect, useRef, useCallback } from "react";
import "./FacebookResumeTemplate.css";
// import bgImg from "../src/img/microsoft-bg.png";
import ethIcon from "../../src/img/eth.png";
import fmhsIcon from "../../src/img/fmhsLogo.png";
import {
  AiOutlineSearch,
  // AiOutlineCaretDown,
  // AiOutlineCaretUp,
  // AiOutlineCaretRight,
  // AiOutlinePoweroff,
} from "react-icons/ai";

import { GiSmartphone } from "react-icons/gi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io"

//import linkedinPicOfMe from "../src/img/linkedinprofile.png";
// import windows11Icon from "../../src/img/windows-11-icon.png";
// import taskViewIcon from "../../src/img/task-view.png";
// import fileExplorerIcon from "../../src/img/file-explorer.png";
// import mailIcon from "../../src/img/mail.png";
// import phoneIcon from "../../src/img/mobile-phone.png";
import linkedInIcon from "../../src/img/linkedin-circled-black.png";
import githubIcon from "../../src/img/github-black-icon.png";
//import settingsIcon from "../../src/img/settings.png";

import facebookLogo from "../img/facebook-logo-icon.png";
// import xIcon from "../img/x-icon.png";
// import keyboardIcon from "../img/keyboard-icon.png";
// import googleMicIcon from "../img/google-mic-icon.png";
// import searchIcon from "../img/search-icon.png";
// import googleSearchIcon from "../img/google-search.png";
//import dummyData from "./DummyData.json";
import smallLinkedinPhoto from "../img/linkedin-circular-photo.png";
import bibleIcon from "../img/bible-icon.png"
import googleMapsIcon from "../img/google-maps-icon.png";
import homeIcon from "../img/home-icon.png"
import windows11Icon from "../img/windows-11-icon.png";
import {useNavigate} from 'react-router-dom';
//import Modal from "./Modal";
import axios from './api/axios';
// import defaultImageIcon from "../img/mountain-image-icon.png";
// import mapPinIcon from "../img/map-pin-icon.png";
// import newsIcon from "../img/news-icon.png";
// import globeIcon from "../img/globe.png";
// import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";

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
function FacebookResumeTemplate() {
  const [isLoading, setIsLoading] = useState(false);
  async function pushTestReq() {
    setIsLoading(true);
    try {
      const res = await axios.get("/retrieveAllData");      
      console.log(res.data);
      console.log("successful in adding to database");
      // const { otherProjects, projects, singleFields, skills} = res.data;
      console.log(typeof res.data)
      const data: fields = res?.data;
      console.log(fillInData);
     setFillInData(data);
    }catch(err) {
     console.log(err);
    }
    setIsLoading(false);
  } 

  const [fillInData,setFillInData] = useState<fields>();
  const effectRan = useRef(false);

useEffect(() => {
  if(effectRan.current === false) {
    pushTestReq();
  
    return () =>  {
      console.log('unmounted')
      effectRan.current = true;
    }
}

})

  // OtherProjects
  //const { name, Projects, Education, Skills, OtherProjects } = dummyData;
 // const [isOpen, setIsOpen] = useState(true);

  //const project1BulletPoints = Projects[0].explanationBulletPoints.split(".");
  //const project2BulletPoints = Projects[1].explanationBulletPoints.split(".");
  //const educationSplit = Education.split(".");

  let navigate = useNavigate();
  const handleNavToHome = useCallback((e:any, page: string | undefined) => {
    e.preventDefault();
    navigate(`/${page && page}`);
  }, [navigate]);

 // const googleMapsData = OtherProjects['Google Maps App'];
 // const bibleRatingData = OtherProjects['Rate App'];

  return (
    <>
    {!isLoading &&
    <div className="max-w-[1000px] m-auto p-9 justify-center w-full h-screen relative z-10">
        {/* <div className="float-left w-[15%] h-[10%] mt-[40%]">
            <a className="hover:cursor-pointer">
                <BsFillArrowLeftCircleFill size="50px" className=" rounded-[50%] border-1 border-blue-500" />
            </a>
  </div> */}
          {/* <Modal open={isOpen} onClose={() => setIsOpen(false)} templateName="Facebook">
          <span className='float-left mr-[5px]'> Click </span>
            <img src={facebookLogo} alt="facebook-logo" width="25px" className='float-left'/>
           <span className='ml-[5px]'> to go back</span>
        </Modal> */}
        <div className='float-left p-2 text-sm bg-white/40 rounded-lg mt-[40%] hover:cursor-pointer hover:bg-white/70' onClick={(event) => {handleNavToHome(event,"")}}>
          <img src={homeIcon} alt="home-icon" width="50px" className=''/>
        </div>
        <div className='float-right p-2 text-sm bg-white/40 rounded-lg mt-[40%] hover:cursor-pointer hover:bg-white/70' onClick={(event) => {handleNavToHome(event,"microsoft")}}>
          <img src={windows11Icon} alt="windows-11-icon" width="50px" className=''/>
        </div>
      <div className="rounded-md mx-auto border-2 h-[92.25vh] w-[63%] text-black p-2 bg-[#f1f2f6]">
        <div className="w-full h-[7%] relative">
          <div className="">
            <div className="hover:cursor-pointer" onClick={(event) => {handleNavToHome(event,"")}}>
            <img
              src={facebookLogo}
              alt="fb-logo"
              className="w-[10%] h-[30%] float-left"
            />
            </div>
            <div className="rounded-md bg-[#f1f2f6] mt-4 text-black text-center shadow shadow-black/30 drop-shadow-xl inline-block mx-4 w-[60%] float-left">
              <span className="float-left">
                <AiOutlineSearch size="25px" />
              </span>
              <p className="absolute ml-7 mt-0.5">{fillInData?.singleFields[2].text.split(";")[0]}</p>
            </div>
            <div className="">
              <img
                src={smallLinkedinPhoto}
                alt="linkedin-me"
                className="w-[50px] rounded-[50%] ml-3 border-2 border-blue-500 float-left mr-2"
              />
              {/* Create linkes to linkedin and github */}
              <a href="https://www.linkedin.com/in/alexander-mikalauskas/" target="_blank" rel="noreferrer">
                <img
                    src={linkedInIcon}
                    alt="linked-circle-icon"
                    className="w-[25px] pt-3 mr-2 float-left"
                />
              </a>
              <a href="https://github.com/AJMikalauskas" target="_blank" rel="noreferrer">
              <img
                src={githubIcon}
                alt="github-icon"
                className="w-[25px] pt-3 mr-2 float-left"
              />
              </a>
            </div>
          </div>
        </div>
        <div
          className="ml-4 grid mt-2 pt-2"
          style={{ gridTemplateColumns: "1fr 3fr" }}
        >
            <div className="justify-center mt-4">
              <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <div className="p-3">
                    <p className="text-gray-900 text-md font-semibold pb-2">
                    {fillInData?.skills[0].skillSetName.split(" ")[0]} Skills
                    </p>
                    <div className="border-b-2 px-1">
                    <p className="text-gray-700 text-xs" style={{fontSize: "10px"}}>
                        <ul>
                        {fillInData?.skills[0].skills.map((skillName, idx) => (
                            <li key={idx} className="mb-1.5">{skillName}</li>
                        ))}
                        </ul>
                    </p>
                    </div>
                </div>
                <div className="px-3 py-1">
                    <p className="text-gray-900 text-md font-semibold pb-2">
                    {fillInData?.skills[1].skillSetName.split(" ")[0]} Skills
                    </p>
                    <div className="px-1">
                    <p className="text-gray-700 text-xs" style={{fontSize: "10px"}}>
                        <ul>
                        {fillInData?.skills[1].skills.map((skillName, idx) => (
                            <li key={idx} className="mb-1.5">{skillName}</li>
                        ))}
                        </ul>
                    </p>
                    </div>
                </div>
              </div>

              <div className="rounded-lg shadow-lg bg-white max-w-sm mt-4">
                <div className="p-3">
                    <p className="text-gray-900 text-md font-semibold pb-2">
                      {fillInData?.skills[2].skillSetName} 
                    </p>
                    <div className="px-1">
                    <p className="text-gray-700 text-xs" style={{fontSize: "10px"}}>
                        <ul>
                        {fillInData?.skills[2].skills.map((skillName, idx) => (
                            <li key={idx} className="mb-1.5">{skillName}</li>
                        ))}
                        </ul>
                    </p>
                    </div>
                </div>
              </div>
            </div>
            
          <div className="max-h-[82vh] overflow-y-scroll hide-scrollbar">
          <div className="flex justify-center mt-4">
              <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <div className="p-3 border-b-2">
                    <img src={smallLinkedinPhoto} alt="linkedin-icon" className="w-[15%] mr-2 rounded-[50%] inline-block" />
                    <div className="rounded-md bg-[#f1f2f6] text-black pl-2 py-0.5 shadow shadow-black/30 drop-shadow-xl w-[60%] inline-block">
                        {fillInData?.singleFields[1].text}
                    </div>
                </div>
                <div className="p-2">
                    {/* Location */}
                    <div className="text-red-500 mb-1">
                        <FaMapMarkerAlt size="15px" className="float-left mr-1" />
                        <p className="text-black text-xs">{fillInData?.singleFields[2].text.split(";")[2]}</p>
                    </div> 
                    {/* Phone # */}
                    <div className="text-lime-500 mb-1">
                        <GiSmartphone size="15px" className="float-left mr-1"/>
                        <p className="text-black text-xs">{fillInData?.singleFields[2].text.split(";")[3]}</p>
                    </div>
                    {/* Email */}
                    <div className="text-teal-500">
                        <IoIosMail size="15px" className="float-left mr-1"/>
                        <p className="text-black text-xs">{fillInData?.singleFields[2].text.split(";")[1]}</p>
                    </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <div className="px-3 pt-3 pb-1">
                    <img src={ethIcon} alt="eth-icon" className="w-[15%] float-left mr-1" />
                    {/* https://crypto-app-demo.netlify.app/loggedOutHome */}
                    <a href={fillInData?.projects[0].link} target="_blank" rel="noreferrer">
                        <p className="text-sky-700 text-md font-semibold hover:underline">
                        {fillInData?.projects[0].name}
                        </p>
                    </a>
                  <p className="text-gray-700 text-xs">
                    {fillInData?.projects[0].timestamp}
                  </p>
                  <p className="text-gray-700 text-xs">
                    <div className="w-[60%] ml-1">
                        {/*  Link to Github For the Project */}
                        {/* href="https://github.com/AJMikalauskas/full-stack-crypto-app/tree/near-final-version" */}
                        <a href={fillInData?.projects[0].github} className="" target="_blank" rel="noreferrer">
                            <img src={githubIcon} alt="github" className="w-[10%] float-left mr-1" />    
                            <p className="pt-1">Github</p>
                        </a> 
                    </div>
                  </p>
                </div>
                <div className="border-t-2">
                    <div className="p-3">
                        <ul className="text-xs" style={{fontSize: "9px"}}>
                            {
                                fillInData?.projects[0].explanationBulletPoints.split(".").map((bp,idx) => (
                                    <li key={idx} className="mt-1">{bp}</li>
                                ))
                            }
                        </ul>
                    </div>
                    {/* <a
                    href="#!"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    >
                    <img
                        className="rounded-t-lg"
                        src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
                        alt=""
                    />
                    </a> */}
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <div className="px-3 pt-3 pb-1">
                    <img src={ethIcon} alt="eth-icon" className="w-[15%] float-left mr-1" />
                    <a href={fillInData?.projects[1].link} target="_blank" rel="noreferrer">
                        <p className="text-sky-700 text-md font-semibold hover:underline">
                            {fillInData?.projects[1].name}
                        </p>
                    </a>
                  <p className="text-gray-700 text-xs">
                    {fillInData?.projects[1].timestamp}
                  </p>
                  <p className="text-gray-700 text-xs">
                    <div className="w-[60%] ml-1">
                        {/*  Link to Github For the Project */}
                        <a href={fillInData?.projects[1].github} className="" target="_blank" rel="noreferrer">
                            <img src={githubIcon} alt="github" className="w-[10%] float-left mr-1" />    
                            <p className="pt-1">Github</p>
                        </a> 
                    </div>
                  </p>
                </div>
                <div className="border-t-2">
                    <div className="p-3">
                        <ul className="text-xs" style={{fontSize: "9px"}}>
                            {
                                fillInData?.projects[1].explanationBulletPoints.split(".").map((bp,idx) => (
                                    <li key={idx} className="mt-1">{bp}</li>
                                ))
                            }
                        </ul>
                    </div>
                    {/* <a
                    href="#!"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    >
                    <img
                        className="rounded-t-lg"
                        src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" 
                        alt=""
                    />
                    </a> */}
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <div className="px-3 pt-3 pb-1">
                    <img src={googleMapsIcon} alt="google-maps-icon" className="w-[15%] float-left mr-1" />
                    <a href={fillInData?.otherProjects[1].link} target="_blank" rel="noreferrer">
                        <p className="text-sky-700 text-md font-semibold hover:underline">
                          {fillInData?.otherProjects[1].name}
                        </p>
                    </a>
                  <p className="text-gray-700 text-xs pb-3">
                    <div className="w-[60%] ml-1">
                        {/*  Link to Github For the Project */}
                        <a href={fillInData?.otherProjects[1].github} className="" target="_blank" rel="noreferrer">
                            <img src={githubIcon} alt="github" className="w-[10%] float-left mr-1" />    
                            <p className="pt-1">Github</p>
                        </a> 
                    </div>
                  </p>
                </div>
                <div className="border-t-2">
                    <div className="p-3">
                    <p className="text-xs" style={{ fontSize: "9px"}}>
                      {fillInData?.otherProjects[1].description}
                    </p>
                    </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <div className="px-3 pt-3 pb-1">
                    <img src={bibleIcon} alt="bible-icon" className="w-[15%] float-left mr-1" />
                    <a href={fillInData?.otherProjects[0].link} target="_blank" rel="noreferrer">
                        <p className="text-sky-700 text-md font-semibold hover:underline">
                          {fillInData?.otherProjects[0].name}
                        </p>
                    </a>
                  <p className="text-gray-700 text-xs pb-3">
                    <div className="w-[60%] ml-1">
                        {/*  Link to Github For the Project */}
                        <a href={fillInData?.otherProjects[0].github} className="" target="_blank" rel="noreferrer">
                            <img src={githubIcon} alt="github" className="w-[10%] float-left mr-1" />    
                            <p className="pt-1">Github</p>
                        </a> 
                    </div>
                  </p>
                </div>
                <div className="border-t-2">
                    <div className="p-3">
                    <p className="text-xs" style={{ fontSize: "9px"}}>
                      {fillInData?.otherProjects[0].description}
                    </p>
                    </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <div className="p-3">
                    <img src={fmhsIcon} alt="fmhs-icon" className="w-[15%] mb-4 float-left mr-1 rounded-[50%] pt-1" />
                    <div>
                      <p className="text-gray-900 text-md font-semibold ">
                        Education
                      </p>
                      <p className="text-gray-700 text-xs">
                        {fillInData?.singleFields[0].text}
                      </p>
                    </div>
                </div>
                <div className="border-t-2">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
}
    </>
  );
}

export default FacebookResumeTemplate;
