//import { useState } from "react";
import "./GoogleResumeTemplate.css";
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
import dummyData from "./DummyData.json";
import smallLinkedinPhoto from "../img/linkedin-circular-photo.png";
// import defaultImageIcon from "../img/mountain-image-icon.png";
// import mapPinIcon from "../img/map-pin-icon.png";
// import newsIcon from "../img/news-icon.png";
// import globeIcon from "../img/globe.png";
// import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";


function FacebookResumeTemplate() {
  // const [proj1Showing, setProj1Showing] = useState(false);
  // const [proj2Showing, setProj2Showing] = useState(false);
  // const [frontendSkillsShowing, setFrontendSkillsShowing] = useState(true);
  // const [backendSkillsShowing, setBackendSkillsShowing] = useState(true);
  // OtherProjects
  const { name, Projects, Education, Skills } = dummyData;

  const project1BulletPoints = Projects[0].explanationBulletPoints.split(".");
  const project2BulletPoints = Projects[1].explanationBulletPoints.split(".");
  // const educationSplit = Education.split(".");
  // const otherProjSplit = OtherProjects.split(".");

  return (
    <div className="max-w-[1000px] mx-auto p-9 flex justify-center w-full h-full">
        {/* <div className="float-left w-[15%] h-[10%] mt-[40%]">
            <a className="hover:cursor-pointer">
                <BsFillArrowLeftCircleFill size="50px" className=" rounded-[50%] border-1 border-blue-500" />
            </a>
        </div> */}
      <div className="rounded-md mx-auto border-2 h-[93vh] w-[63%] text-black p-2 bg-[#f1f2f6]">
        <div className="w-full h-[7%] relative">
          <div className="">
            <img
              src={facebookLogo}
              alt="fb-logo"
              className="w-[10%] h-[30%] float-left"
            />
            <div className="rounded-md bg-[#f1f2f6] mt-4 text-black text-center shadow shadow-black/30 drop-shadow-xl inline-block mx-4 w-[60%] float-left">
              <span className="float-left">
                <AiOutlineSearch size="25px" />
              </span>
              <p className="absolute ml-7 mt-0.5">Junior Software Engineer</p>
            </div>
            <div className="">
              <img
                src={smallLinkedinPhoto}
                alt="linkedin-me"
                className="w-[50px] rounded-[50%] ml-3 border-2 border-blue-500 float-left mr-2"
              />
              {/* Create linkes to linkedin and github */}
              <a href="https://www.linkedin.com/in/alexander-mikalauskas/">
                <img
                    src={linkedInIcon}
                    alt="linked-circle-icon"
                    className="w-[25px] pt-3 mr-2 float-left"
                />
              </a>
              <a href="https://github.com/AJMikalauskas">
              <img
                src={githubIcon}
                alt="github-icon"
                className="w-[25px] pt-3 mr-2"
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
                        Frontend Skills
                    </p>
                    <div className="border-b-2 px-1">
                    <p className="text-gray-700 text-xs" style={{fontSize: "10px"}}>
                        <ul>
                        {Skills["Frontend Development"].map((skillName, idx) => (
                            <li key={idx} className="mb-1.5">{skillName}</li>
                        ))}
                        </ul>
                    </p>
                    </div>
                </div>
                <div className="px-3 py-1">
                    <p className="text-gray-900 text-md font-semibold pb-2">
                        Backend Skills
                    </p>
                    <div className="px-1">
                    <p className="text-gray-700 text-xs" style={{fontSize: "10px"}}>
                        <ul>
                        {Skills["Backend Development"].map((skillName, idx) => (
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
                        Soft Skills
                    </p>
                    <div className="px-1">
                    <p className="text-gray-700 text-xs" style={{fontSize: "10px"}}>
                        <ul>
                        {Skills["Soft Skills"].map((skillName, idx) => (
                            <li key={idx} className="mb-1.5">{skillName}</li>
                        ))}
                        </ul>
                    </p>
                    </div>
                </div>
              </div>
            </div>
            
          <div className="">
          <div className="flex justify-center mt-4">
              <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <div className="p-3 border-b-2">
                    <img src={smallLinkedinPhoto} alt="linkedin-icon" className="w-[15%] mr-2 rounded-[50%] inline-block" />
                    <div className="rounded-md bg-[#f1f2f6] text-black pl-2 py-0.5 shadow shadow-black/30 drop-shadow-xl w-[60%] inline-block">
                        {name}
                    </div>
                </div>
                <div className="p-2">
                    {/* Location */}
                    <div className="text-red-500 mb-1">
                        <FaMapMarkerAlt size="15px" className="float-left mr-1" />
                        <p className="text-black text-xs">Dallas Fort-Worth, TX, 75028</p>
                    </div> 
                    {/* Phone # */}
                    <div className="text-lime-500 mb-1">
                        <GiSmartphone size="15px" className="float-left mr-1"/>
                        <p className="text-black text-xs">(214) 970-4799</p>
                    </div>
                    {/* Email */}
                    <div className="text-teal-500">
                        <IoIosMail size="15px" className="float-left mr-1"/>
                        <p className="text-black text-xs">ajmikalauskas@hotmail.com</p>
                    </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <div className="px-3 pt-3 pb-1">
                    <img src={ethIcon} alt="eth-icon" className="w-[15%] float-left mr-1" />
                    <a href="https://dapp-exchange.surge.sh/">
                        <p className="text-sky-700 text-md font-semibold ">
                            <u>{Projects[0].name}</u>
                        </p>
                    </a>
                  <p className="text-gray-700 text-xs">
                    {Projects[0].timestamp}
                  </p>
                  <p className="text-gray-700 text-xs">
                    <div className="w-[60%] ml-1">
                        {/*  Link to Github For the Project */}
                        <a href="https://github.com/AJMikalauskas/Decentralized-Token-Exchange-App" className="">
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
                                project1BulletPoints.map((bp,idx) => (
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
                    <a href="https://crypto-app-demo.netlify.app/loggedOutHome">
                        <p className="text-sky-700 text-md font-semibold ">
                            <u>
                                {Projects[1].name}
                            </u>
                        </p>
                    </a>
                  <p className="text-gray-700 text-xs">
                    {Projects[1].timestamp}
                  </p>
                  <p className="text-gray-700 text-xs">
                    <div className="w-[60%] ml-1">
                        {/*  Link to Github For the Project */}
                        <a href="https://github.com/AJMikalauskas/full-stack-crypto-app/tree/near-final-version" className="">
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
                                project2BulletPoints.map((bp,idx) => (
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
                <div className="p-3">
                    <img src={fmhsIcon} alt="fmhs-icon" className="w-[15%] mb-4 float-left mr-1 rounded-[50%]" />
                    <p className="text-gray-900 text-md font-semibold ">
                        Education
                    </p>
                  <p className="text-gray-700 text-xs">
                    {Education}
                  </p>
                </div>
                <div className="border-t-2">
                    {/* <div className="p-3">
                        <ul className="text-xs" style={{fontSize: "9px"}}>
                            {
                                project2BulletPoints.map((bp,idx) => (
                                    <li key={idx} className="mt-1">{bp}</li>
                                ))
                            }
                        </ul>
                    </div> */}
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
          </div>
        </div>
      </div>
      {/* <div className="float-left w-[15%] h-[10%] mt-[40%] pl-24">
            <a className="hover:cursor-pointer">
                <BsFillArrowRightCircleFill size="50px" className=" rounded-[50%] border-1 border-blue-500" />
            </a>
        </div> */}
    </div>
  );
}

export default FacebookResumeTemplate;
