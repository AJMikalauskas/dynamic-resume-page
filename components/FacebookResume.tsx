import { useState, } from "react";
import ethIcon from "../public/images/eth.png";
import fmhsIcon from "../public/images/fmhsLogo.png";
import linkedInIcon from "../public/images/linkedin-circled-black.png";
import githubIcon from "../public/images/github-black-icon.png";
import facebookLogo from "../public/images/facebook-logo-icon.png";
import smallLinkedinPhoto from "../public/images/linkedin-circular-photo.png";
import bibleIcon from "../public/images/bible-icon.png"
import googleMapsIcon from "../public/images/google-maps-icon.png";
import homeIcon from "../public/images/home-icon.png"
import windows11Icon from "../public/images/windows-11-icon.png";

import { AiOutlineSearch, } from "react-icons/ai";
import { GiSmartphone } from "react-icons/gi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io"
import { fields } from "../typings";
import Image from "next/image";
import Link from "next/link";
import Animation from './Animation';
import Head from "next/head";


interface Props {
    data: fields;
}
function FacebookResume({data}:Props) {
  const [isLoading, setIsLoading] = useState(false);

  const [fillInData,setFillInData] = useState<fields>(data);

  // Navigate to any page w/Typescript
//   let navigate = useNavigate();
//   const handleNavToHome = useCallback((e:any, page: string | undefined) => {
//     e.preventDefault();
//     navigate(`/${page && page}`);
//   }, [navigate]);
  return (
    <div className="text-white bg bg-gradient-to-r from-[#159957] to-[#155799] w-full h-full">
    <Animation/>
    {!isLoading &&
    <div className="max-w-[1000px] m-auto p-9 justify-center w-full h-full relative z-10">
        <div className='float-left p-2 text-sm bg-white/40 rounded-lg mt-[40%] hover:cursor-pointer hover:bg-white/70' >
          <Link href='/'>
            <Image src={homeIcon} alt="home-icon" width={50} />
          </Link>
        </div>
        <div className='float-right p-2 text-sm bg-white/40 rounded-lg mt-[40%] hover:cursor-pointer hover:bg-white/70'>
          <Link href='/microsoft'>
            <Image src={windows11Icon} alt="windows-11-icon" width={50}/>
          </Link>  
        </div>
      <div className="rounded-md mx-auto border-2 h-[92.25vh] w-[63%] text-black p-2 bg-[#f1f2f6]">
        <div className="w-full h-[7%] relative">
          <div className="">
            <div className="hover:cursor-pointer">
                <Link href='/'>
                    <Image
                    src={facebookLogo}
                    alt="fb-logo"
                    className="w-[10%] h-[30%] float-left"
                    />
                </Link>
            </div>
            <div className="rounded-md bg-[#f1f2f6] mt-4 text-black text-center shadow shadow-black/30 drop-shadow-xl inline-block mx-4 w-[60%] float-left">
              <span className="float-left">
                <AiOutlineSearch size="25px" />
              </span>
              <p className="absolute ml-7 mt-0.5">{fillInData?.singleFields[2].text.split(";")[0]}</p>
            </div>
            <div className="">
              <Image
                src={smallLinkedinPhoto}
                alt="linkedin-me"
                className="w-[50px] rounded-[50%] ml-3 border-2 border-blue-500 float-left mr-2"
              />
              {/* Create linkes to linkedin and github */}
              <a href="https://www.linkedin.com/in/alexander-mikalauskas/" target="_blank" rel="noreferrer">
                <Image
                    src={linkedInIcon}
                    alt="linked-circle-icon"
                    className="w-[25px] pt-3 mr-2 float-left"
                />
              </a>
              <a href="https://github.com/AJMikalauskas" target="_blank" rel="noreferrer">
              <Image
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
                    {fillInData?.skills[1].skillSetName.split(" ")[0]} Skills
                    </p>
                    <div className="border-b-2 px-1">
                    <div className="text-gray-700 text-xs" style={{fontSize: "10px"}}>
                        <ul>
                        {fillInData?.skills[1].skills.map((skillName, idx) => (
                            <li key={idx} className="mb-1.5">{skillName}</li>
                        ))}
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="px-3 py-1">
                    <p className="text-gray-900 text-md font-semibold pb-2">
                    {fillInData?.skills[2].skillSetName.split(" ")[0]} Skills
                    </p>
                    <div className="px-1">
                    <div className="text-gray-700 text-xs" style={{fontSize: "10px"}}>
                        <ul>
                        {fillInData?.skills[2].skills.map((skillName, idx) => (
                            <li key={idx} className="mb-1.5">{skillName}</li>
                        ))}
                        </ul>
                    </div>
                    </div>
                </div>
              </div>

              <div className="rounded-lg shadow-lg bg-white max-w-sm mt-4">
                <div className="p-3">
                    <p className="text-gray-900 text-md font-semibold pb-2">
                      {fillInData?.skills[0].skillSetName} 
                    </p>
                    <div className="px-1">
                    <div className="text-gray-700 text-xs" style={{fontSize: "10px"}}>
                        <ul>
                        {fillInData?.skills[0].skills.map((skillName, idx) => (
                            <li key={idx} className="mb-1.5">{skillName}</li>
                        ))}
                        </ul>
                    </div>
                    </div>
                </div>
              </div>
            </div>
            
          <div className="max-h-[82vh] overflow-y-scroll hide-scrollbar">
          <div className="flex justify-center mt-4">
              <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <div className="p-3 border-b-2">
                    <Image src={smallLinkedinPhoto} alt="linkedin-icon" className="w-[15%] mr-2 rounded-[50%] inline-block" />
                    <div className="rounded-md bg-[#f1f2f6] text-black pl-2 py-0.5 shadow shadow-black/30 drop-shadow-xl w-[60%] inline-block">
                        {fillInData?.singleFields[2].text}
                    </div>
                </div>
                <div className="p-2">
                    {/* Location */}
                    <div className="text-red-500 mb-1">
                        <FaMapMarkerAlt size="15px" className="float-left mr-1" />
                        <p className="text-black text-xs">{fillInData?.singleFields[1].text.split(";")[2]}</p>
                    </div> 
                    {/* Phone # */}
                    <div className="text-lime-500 mb-1">
                        <GiSmartphone size="15px" className="float-left mr-1"/>
                        <p className="text-black text-xs">{fillInData?.singleFields[1].text.split(";")[3]}</p>
                    </div>
                    {/* Email */}
                    <div className="text-teal-500">
                        <IoIosMail size="15px" className="float-left mr-1"/>
                        <p className="text-black text-xs">{fillInData?.singleFields[1].text.split(";")[1]}</p>
                    </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <div className="px-3 pt-3 pb-1">
                    <Image src={ethIcon} alt="eth-icon" className="w-[15%] float-left mr-1" />
                    {/* https://crypto-app-demo.netlify.app/loggedOutHome */}
                    <a href={fillInData?.projects[0].link} target="_blank" rel="noreferrer">
                        <p className="text-sky-700 text-md font-semibold hover:underline">
                        {fillInData?.projects[0].name}
                        </p>
                    </a>
                  <p className="text-gray-700 text-xs">
                    {fillInData?.projects[0].timestamp}
                  </p>
                  <div className="text-gray-700 text-xs">
                    <div className="w-[60%] ml-1">
                        {/*  Link to Github For the Project */}
                        {/* href="https://github.com/AJMikalauskas/full-stack-crypto-app/tree/near-final-version" */}
                        <a href={fillInData?.projects[0].github} className="" target="_blank" rel="noreferrer">
                            <Image src={githubIcon} alt="github" className="w-[10%] float-left mr-1" />    
                            <p className="pt-1">Github</p>
                        </a> 
                    </div>
                  </div>
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
                    <Image src={ethIcon} alt="eth-icon" className="w-[15%] float-left mr-1" />
                    <a href={fillInData?.projects[1].link} target="_blank" rel="noreferrer">
                        <p className="text-sky-700 text-md font-semibold hover:underline">
                            {fillInData?.projects[1].name}
                        </p>
                    </a>
                  <p className="text-gray-700 text-xs">
                    {fillInData?.projects[1].timestamp}
                  </p>
                  <div className="text-gray-700 text-xs">
                    <div className="w-[60%] ml-1">
                        {/*  Link to Github For the Project */}
                        <a href={fillInData?.projects[1].github} className="" target="_blank" rel="noreferrer">
                            <Image src={githubIcon} alt="github" className="w-[10%] float-left mr-1" />    
                            <p className="pt-1">Github</p>
                        </a> 
                    </div>
                  </div>
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
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <div className="px-3 pt-3 pb-1">
                    <Image src={googleMapsIcon} alt="google-maps-icon" className="w-[15%] float-left mr-1" />
                    <a href={fillInData?.otherProjects[1].link} target="_blank" rel="noreferrer">
                        <p className="text-sky-700 text-md font-semibold hover:underline">
                          {fillInData?.otherProjects[1].name}
                        </p>
                    </a>
                  <div className="text-gray-700 text-xs pb-3">
                    <div className="w-[60%] ml-1">
                        {/*  Link to Github For the Project */}
                        <a href={fillInData?.otherProjects[1].github} className="" target="_blank" rel="noreferrer">
                            <Image src={githubIcon} alt="github" className="w-[10%] float-left mr-1" />    
                            <p className="pt-1">Github</p>
                        </a> 
                    </div>
                  </div>
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
                    <Image src={bibleIcon} alt="bible-icon" className="w-[15%] float-left mr-1" />
                    <a href={fillInData?.otherProjects[0].link} target="_blank" rel="noreferrer">
                        <p className="text-sky-700 text-md font-semibold hover:underline">
                          {fillInData?.otherProjects[0].name}
                        </p>
                    </a>
                  <div className="text-gray-700 text-xs pb-3">
                    <div className="w-[60%] ml-1">
                        {/*  Link to Github For the Project */}
                        <a href={fillInData?.otherProjects[0].github} className="" target="_blank" rel="noreferrer">
                            <Image src={githubIcon} alt="github" className="w-[10%] float-left mr-1" />    
                            <p className="pt-1">Github</p>
                        </a> 
                    </div>
                  </div>
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
          </div>
        </div>
      </div>
    </div>
}
    </div>
  );
}

export default FacebookResume;
