import { useState, useEffect, useRef, useCallback } from 'react'; 
import axios from 'axios';
import Image from "next/image";
import Link from 'next/link';

import ethIcon from "../public/images/eth.png";
import {AiOutlineSearch, AiOutlineCaretDown, AiOutlineCaretUp, AiOutlineCaretRight}  from "react-icons/ai";
import windows11Icon from "../public/images/windows-11-icon.png";
import taskViewIcon from "../public/images/task-view.png";
import fileExplorerIcon from "../public/images/file-explorer.png";
import mailIcon from "../public/images/mail.png";
import phoneIcon from "../public/images/mobile-phone.png";
import linkedInIcon from "../public/images/linkedin.png";
import githubIcon from "../public/images/github.png";
import bibleIcon from "../public/images/bible-icon.png"
import googleMapsIcon from "../public/images/google-maps-icon.png";
import homeIcon from "../public/images/home-icon.png"
import googleLogo from "../public/images/google-logo.png";
import { fields } from "../typings";
import Animation from './Animation';
import Head from 'next/head';


interface Props {
    data: fields;
}
// { data } : Props
function MicrosoftResume({ data }: Props) {
  // Not really needed for a state to fillInData can just set to a const or use the props passed in
  // Should I have an isLoading state w/NextJS features?
  const [isLoading, setIsLoading] = useState(false);
  const [fillInData,setFillInData] = useState<fields>(data);
  const [proj1Showing, setProj1Showing] = useState(false);
  const [proj2Showing, setProj2Showing] = useState(false);
  const [frontendSkillsShowing, setFrontendSkillsShowing] = useState(true);
  const [backendSkillsShowing, setBackendSkillsShowing] = useState(true);
  // Navigation to Any Page TS
//   let navigate = useNavigate();
//   const handleNavToHome = useCallback((e:any, page: string | undefined) => {
//     e.preventDefault();
//     navigate(`/${page && page}`);
//   }, [navigate]);
// onClick={(event) => {handleNavToHome(event,"")}}
// onClick={(event) => {handleNavToHome(event,"google")}}

  return (
    <div className="text-white bg bg-gradient-to-r from-[#159957] to-[#155799] w-full h-full">
        <Animation/>
    {!isLoading &&
    
  <div className="max-w-[1000px] m-auto p-9 justify-center w-full h-full relative z-10"> 
        <div className='float-left p-2 text-sm bg-white/40 rounded-lg mt-[40%] hover:cursor-pointer hover:bg-white/70'>
            <Link href='/'>
                <Image src={homeIcon} width={50} alt="home-icon" />
            </Link>
        </div>
        <div className='float-right p-2 text-sm bg-white/40 rounded-lg mt-[41%] hover:cursor-pointer hover:bg-white/70'>
            <Link href='/google'>
                <Image src={googleLogo} width={100} alt="google-logo-icon" />
            </Link>
        </div>
      <div className="rounded-md justify-center mx-auto bg-no-repeat bg-cover bg-center custom-img relative h-[92.25vh] w-[63%]">
        <div className="rounded-md bg-[#000]/50 p-4 text-white relative max-h-[85vh] overflow-y-scroll hide-scrollbar">
          <div className="rounded-md bg-[#fff]/50 h-8 text-center">
            <span className="float-left align-middle mt-1 pl-1">
            <AiOutlineSearch size="25px"/>
            </span>
            {/* <div className="float-right"> */}
            <p className="pt-1.5">
            {fillInData?.singleFields[2].text}
            </p>
          </div>

          {/* 1st Project */}
          <div className="mt-4 ">
            <p className="text-2xl font-semibold">Projects</p>
            <div className="mt-2 ">
              <Image src={ethIcon} height={50} width={50} alt="ethIcon" className="float-left mr-2"/>
              {/*  To Be Dynamic Later */}
                {/* Mini Arrow Icon to the right of this? */}
                <span className="font-medium">
                  {fillInData?.projects[0].name}
                </span>
                <span className="font-extralight text-sm ml-4">
                  {fillInData?.projects[0].timestamp}
                </span>

                <div>
                <span className="font-extralight text-sm">
                  {/* Link a tag to new page using target and rel properties/attributes */}
                  {/* "https://crypto-app-demo.netlify.app/loggedOutHome" */}
                    (<a href={fillInData?.projects[0].link} className='text-sky-300 hover:underline' target="_blank" rel="noreferrer">
                        Demo
                    </a>)
                  - 
                  (<a href={fillInData?.projects[0].github} className='text-sky-300 hover:underline' target="_blank" rel="noreferrer">GitHub</a>)
                </span>
                <span className='float-right mr-10'>
                  {/* How to create an accordion animation? */}
                  { proj1Showing ?
                  <AiOutlineCaretUp size="25px" className='hover:cursor-pointer' onClick={() => setProj1Showing(!proj1Showing)}/>
                  :
                  <AiOutlineCaretDown size="25px" className='hover:cursor-pointer' onClick={() => setProj1Showing(!proj1Showing)}/>
                  }
                </span>
                </div>
            </div>
            <div className={`${proj1Showing ? '' : 'hidden'}`} >
            <ul style={{ listStyle: 'disc', fontSize: '12px'}} className="float-right pl-20 text-sm pb-4">
            {
                fillInData?.projects[0].explanationBulletPoints.split(".").map((bp,idx) => (
                    <li key={idx}>{bp}</li>
                ))
            }
            </ul>
            <p className="text-sm mx-4 "><b><u>Tech Stack:</u></b> {fillInData?.projects[0].techStack}</p>
            </div>
          </div>
          {/* 2nd Project */}
          <div className="mt-4">
            <div className="">
              <Image src={ethIcon} height={50} width={50} alt="ethIcon"  className="float-left mr-2"/>
              {/*  To Be Dynamic Later */}
                {/* Mini Arrow Icon to the right of this? */}
                <span className="font-medium">
                  {fillInData?.projects[1].name}
                </span>
                <span className="font-extralight text-sm ml-4">
                  {fillInData?.projects[1].timestamp}
                </span>

                <div>

                  <span className="font-extralight text-sm">
                    {/* https://dapp-exchange.surge.sh/ */}
                    (<a href={fillInData?.projects[1].link} className='text-sky-300 hover:underline' target="_blank" rel="noreferrer">Demo</a>)
                    - 
                    (<a href={fillInData?.projects[1].github} className="text-sky-300 hover:underline" target="_blank" rel="noreferrer">GitHub</a>)
                    {/* - (<Link to="/crypto-app" className='text-sky-300 hover:underline'>Description</Link>) */}
                  </span>

                  <span className='float-right mr-10'>
                  {/* How to create an accordion animation? */}
                  { proj2Showing ?
                  <AiOutlineCaretUp size="25px" className='hover:cursor-pointer' onClick={() => setProj2Showing(!proj2Showing)}/>
                  :
                  <AiOutlineCaretDown size="25px" className='hover:cursor-pointer' onClick={() => setProj2Showing(!proj2Showing)}/>
                  }
                </span>
                </div>
            </div>
          <div className={`${proj2Showing ? '' : 'hidden'}`} >
            <ul style={{ listStyle: 'disc', fontSize: '12px'}} className="float-right pl-20 text-sm pb-4">
              {/*  Should I leave a link to ropsten eth faucet? And Metamask? */}
            {
                fillInData?.projects[1].explanationBulletPoints.split(".").map((bp,idx) => (
                    <li key={idx}>{bp}</li>
                ))
            }

            </ul>
            {/*  Remove duplicates in lists? */}
            <p className="text-sm mx-4 "><b><u>Tech Stack:</u></b> {fillInData?.projects[0].techStack}</p>
          </div>
          </div>
        <div className='mt-6'>
          <p className=" text-2xl font-semibold">Skills</p>
        <div className="mt-2 grid grid-cols-2 gap-4">
          <div>
            <div className='mb-2'>
              <span className="font-semibold">{fillInData?.skills[1].skillSetName}</span>
              <span className='float-right'>
                  {/* How to create an accordion animation? */}
                  { frontendSkillsShowing ?
                  <AiOutlineCaretUp size="20px" className='hover:cursor-pointer' onClick={() => setFrontendSkillsShowing(!frontendSkillsShowing)}/>
                  :
                  <AiOutlineCaretDown size="20px" className='hover:cursor-pointer' onClick={() => setFrontendSkillsShowing(!frontendSkillsShowing)}/>
                  }
                </span>
            </div>
            <div className={`rounded-sm text-center ${!frontendSkillsShowing && 'hidden'}`}>
                <ul className='text-left dropdown-menu-1 '>
                    {fillInData?.skills[1].skills.map((skill: string, idx: number) => (
                        <li key={idx} className={`list-item-${idx} bg-[#fff]/30 px-2`}>{skill}</li>
                    ))}
                </ul>
            </div>
          </div>

          <div>
          <div className='mb-2'>
              <span className="font-semibold">{fillInData?.skills[2].skillSetName}</span>
              <span className='float-right'>
                  {/* How to create an accordion animation? */}
                  { backendSkillsShowing ?
                  <AiOutlineCaretUp size="20px" className='hover:cursor-pointer' onClick={() => setBackendSkillsShowing(!backendSkillsShowing)}/>
                  :
                  <AiOutlineCaretDown size="20px" className='hover:cursor-pointer' onClick={() => setBackendSkillsShowing(!backendSkillsShowing)}/>
                  }
                </span>
            </div>
            <div className={`rounded-sm ${!backendSkillsShowing && 'hidden'}`}>
            <ul className='text-left dropdown-menu-2'>
                {fillInData?.skills[2].skills.map((skill: string, idx: number) => (
                        <li key={idx} className="bg-[#fff]/30 px-2">{skill}</li>
                ))}
                </ul>
            </div>  
          </div>
        </div>
        </div>
        <div className="mt-6">
          <p className="text-2xl font-semibold mb-2">Other Projects</p>
          {/*  Link to flowermound or something with group property? */}
          <div>
          <div className="rounded-sm bg-[#fff]/30 text-left font-bold h-[60px]">
            <span className="float-left align-middle mt-1 ml-1">
            {/* <AiOutlineSearch size="25px"/> */}
            <Image alt="googleMapsIcon" src={googleMapsIcon} width={50} className='rounded-lg'/>
            </span>
            <div className='pt-2'>
              <span className="">
                {fillInData?.otherProjects[1].name}
              </span>

              <span className='float-right mr-2 mt-3'>
              <a href={fillInData?.otherProjects[1].link} target="_blank" rel="noreferrer">
                <AiOutlineCaretRight size="25px"/>
                </a>
              </span>

              <div className='text-xs'>
                (<a href={fillInData?.otherProjects[1].link} className='hover:underline text-sky-300' target="_blank" rel="noreferrer">Demo</a>) 
                - 
                (<a href={fillInData?.otherProjects[1].github} className='hover:underline text-sky-300' target="_blank" rel="noreferrer">GitHub</a>)  
              </div>
            </div>
          </div>
          </div>
          <div className="rounded-sm bg-[#fff]/30 text-left font-bold h-[60px] mt-4">
            <span className="float-left align-middle mt-1 ml-1">
            {/* <AiOutlineSearch size="25px"/>   */}
            <Image alt="bibleIcon" src={bibleIcon} width={50} className='rounded-lg'/>
            </span>
            <div className='pt-2'>
              <span className="">
                  {fillInData?.otherProjects[0].name}
              </span>
              <span className='float-right mr-2 mt-3'>
                <a href={fillInData?.otherProjects[0].link} target="_blank" rel="noreferrer">
                <AiOutlineCaretRight size="25px"/>
                </a>
              </span>
              <div className='text-xs'>
                (<a href={fillInData?.otherProjects[0].link} className='hover:underline text-sky-300' target="_blank" rel="noreferrer">Demo</a>) 
                - 
                (<a href={fillInData?.otherProjects[0].github} className='hover:underline text-sky-300' target="_blank" rel="noreferrer">GitHub</a>)  
              </div>

            </div>
          </div>
        </div>
      </div>     
        <div className='absolute bottom-0 bg-[#000]/60 w-full overflow-hidden h-[5%] flex py-1 justify-evenly'>
          <div className="hover:cursor-pointer">
            {/* onClick={(event) => {handleNavToHome(event,"")}}   */}
            <Link href="/">
                <Image src={windows11Icon} alt="windows-11-icon" width={35} className='items-center flex hover:bg-white/40 rounded-md'/>
            </Link>
          </div>

          <AiOutlineSearch size="35px" className='text-white items-center flex hover:bg-white/40 rounded-md'/>
          {/* Make it to where it looks like zoom out of all 3 resumes?  width="35px" */}
          <Image src={taskViewIcon} alt="task-view-icon" width={35}  className='items-center flex hover:bg-white/40 rounded-md'/> 

          {/* Link To Resume?  */}
          <Image src={fileExplorerIcon} width={35} alt="file-explorer-icon" className='items-center flex hover:bg-white/40 rounded-md'/> 

          {/* Link To Way To Mail Me? */}
          <Image src={mailIcon} alt="mail-icon" width={35}  className='items-center flex hover:bg-white/40 rounded-md'/>
          {/* Call/Phone how to do? */}
          <Image src={phoneIcon} alt="phone-icon" width={35}  className='items-center flex hover:bg-white/40 rounded-md'/>  
            <a href='https://www.linkedin.com/in/alexander-mikalauskas/' target="_blank" rel="noreferrer">
                <Image src={linkedInIcon} alt="linked-in-icon" width={35}  className='items-center flex hover:bg-white/40 rounded-md'/>  
            </a>
            <a href='https://github.com/AJMikalauskas' target="_blank" rel="noreferrer">
                <Image src={githubIcon} alt="github-icon" width={35}  className='items-center flex hover:bg-white/40 rounded-md'/>  
            </a>
            {/* Link To Something like a links page?*/}
          {/* <img src={settingsIcon} alt="settings-icon" width="35px" className='items-center flex hover:bg-white/40 rounded-md'/>   */}
        </div>
    </div>
  </div>
  }
  </div>
);
}

export default MicrosoftResume;
