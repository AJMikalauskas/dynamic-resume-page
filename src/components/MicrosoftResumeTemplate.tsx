import { useState } from 'react'; 
import "./MicrosoftResumeTemplate.css";
// import bgImg from "../src/img/microsoft-bg.png";
import ethIcon from "../img/eth.png";
import fmhsIcon from "../img/fmhsLogo.png";
import {AiOutlineSearch, AiOutlineCaretDown, AiOutlineCaretUp, AiOutlineCaretRight, AiOutlinePoweroff}  from "react-icons/ai";
//import linkedinPicOfMe from "../src/img/linkedinprofile.png";
import windows11Icon from "../img/windows-11-icon.png";
import taskViewIcon from "../img/task-view.png";
import fileExplorerIcon from "../img/file-explorer.png";
import mailIcon from "../img/mail.png";
import phoneIcon from "../img/mobile-phone.png";
import linkedInIcon from "../img/linkedin.png";
import githubIcon from "../img/github.png";
import settingsIcon from "../img/settings.png"
import bibleIcon from "../img/bible-icon.png"
import googleMapsIcon from "../img/google-maps-icon.png";
import dummydata from "./DummyData.json";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";

// const socialIcons: {icon: JSX.Element, url: string}[] = [
//   {
//     icon: <AiOutlineSearch/>,
//     url: "./"
//   }
// ]


function MicrosoftResumeTemplate() {
  const [proj1Showing, setProj1Showing] = useState(false);
  const [proj2Showing, setProj2Showing] = useState(false);
  const [frontendSkillsShowing, setFrontendSkillsShowing] = useState(true);
  const [backendSkillsShowing, setBackendSkillsShowing] = useState(true);
  const { name, Projects, Education, Skills, OtherProjects } = dummydata;
    // Arrays of Bullet Points
  const project1BulletPoints = Projects[0].explanationBulletPoints.split(".");
  const project2BulletPoints = Projects[1].explanationBulletPoints.split(".");
  const educationSplit = Education.split(".");
  const otherProjSplit = OtherProjects.split(".");
  
// project1BulletPoints.map((bp) => {
//     return console.log(bp);  
// })

  return (
  <div className="max-w-[1000px] m-auto p-9 justify-center w-full h-full"> 
    {/* bg-no-repeat bg-contain bg-center custom-img */}
    {/* className="rounded-md flex justify-center mx-auto bg-no-repeat bg-contain bg-center custom-img" */}
    {/* <div className="float-left w-[15%] h-[10%] mt-[40%]">
            <a className="hover:cursor-pointer">
                <BsFillArrowLeftCircleFill size="50px" className=" rounded-[50%] border-1 border-blue-500" />
            </a>
        </div> */}
      <div className="rounded-md flex justify-center mx-auto bg-no-repeat bg-cover bg-center custom-img relative h-[93vh] w-[50%]">
        <div className="rounded-md bg-[#000]/50 mb-[12.5%] p-4 text-white relative max-h-[85vh] overflow-y-auto">
          <div className="rounded-md bg-[#fff]/50 h-8 text-center">
            <span className="float-left align-middle mt-1 pl-1">
            <AiOutlineSearch size="25px"/>
            </span>
            {/* <div className="float-right"> */}
            <p className="pt-1.5">
              {/* Preset withn mongodb data later */}
            {name}
            </p>
            {/* </div> */}
          </div>

          {/* 1st Project */}
          <div className="mt-4 ">
            <p className="text-2xl font-semibold">Projects</p>
            <div className="mt-2 ">
              <img src={ethIcon} alt="ethIcon" height="50px" width="50px"  className="float-left mr-2"/>
              {/*  To Be Dynamic Later */}
                {/* Mini Arrow Icon to the right of this? */}
                <span className="font-medium">
                  {Projects[0].name}
                </span>
                <span className="font-extralight text-sm ml-4">
                  {Projects[0].timestamp}
                </span>

                <div>
                <span className="font-extralight text-sm">
                    (<a href="https://dapp-exchange.surge.sh/" className='text-sky-300'>
                        <u>Demo</u>
                    </a>)
                  - 
                  (<a href="https://github.com/AJMikalauskas/Decentralized-Token-Exchange-App/tree/completed-deployContracts-section" className='text-sky-300'><u>GitHub</u></a>)
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
                project1BulletPoints.map((bp,idx) => (
                    <li key={idx}>{bp}</li>
                ))
            }
              {/*  Should I leave a link to ropsten eth faucet? And Metamask? 
                  <li>Web application that enables users to buy or sell a custom ERC-20 token in exchange of Ethereum; Requires Ropsten ETH and a Metamask Account</li>
                  {/* <li>Displays Exchange Screens including a token price chart, trades made on the exchange, all active orders waiting to be filled,unfilled orders by the user, and trades made by the user</li> 
                  <li>Allows users to deposit tokens or Ethereum from their wallet onto the Exchange; Can also withdraw from the Exchange back to the wallet</li>
                  {/* Link to Solidity *
                  <li>Created Token and Exchange Smart Contracts using <b><u>Solidity</u></b></li>
                  <li>Implemented <b><u>TDD</u></b> to assure correct functionality among smart contract methods</li>
        <li> Deployed Smart Contracts to the Ropsten Test Network using <b><u>Truffle</u></b></li>*/}
            </ul>
            <p className="text-sm mx-4 "><b><u>Tech Stack:</u></b> {Projects[0].techStack}</p>
            </div>
          </div>
          {/* 2nd Project */}
          <div className="mt-4">
            <div className="">
              <img src={ethIcon} alt="ethIcon" height="50px" width="50px"  className="float-left mr-2"/>
              {/*  To Be Dynamic Later */}
                {/* Mini Arrow Icon to the right of this? */}
                <span className="font-medium">
                  {Projects[1].name}
                </span>
                <span className="font-extralight text-sm ml-4">
                  {Projects[1].timestamp}
                </span>

                <div>

                  <span className="font-extralight text-sm">
                    (<a href="https://crypto-app-demo.netlify.app/loggedOutHome" className='text-sky-300'><u>Demo</u></a>)
                    - 
                    (<a href="https://github.com/AJMikalauskas/full-stack-crypto-app/tree/near-final-version" className="text-sky-300"><u>GitHub</u></a>)
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
                  {/* <li> Web application that enables users to add crypto coins from a table to their watchlist with a fully functioning login system verified using <b><u>JWTs</u></b></li>
                  <li> Implemented the entire login system to allow <b><u>CRUD</u></b> Operations on the user list and user validation</li>
                  <li> Designed and created a fully responsive home page with a table, chart, and a search system using the Coin Gecko API & deployed using Netlify</li>
                  <li>Designed API Controllers on the Backend & deployed using Heroku</li> */}
            {
                project2BulletPoints.map((bp,idx) => (
                    <li key={idx}>{bp}</li>
                ))
            }

            </ul>
            {/*  Remove duplicates in lists? */}
            <p className="text-sm mx-4 "><b><u>Tech Stack:</u></b> {Projects[1].techStack}</p>
          </div>
          </div>
          {/* Education Section */}
        <div className="mt-6">
          <p className="text-2xl font-semibold mb-0">Education</p>
          {/*  Link to flowermound or something with group property? */}
          <div className="rounded-sm bg-[#fff]/30 text-center font-bold h-[50px]">
            <span className="float-left align-middle mt-1 ml-1">
            {/* <AiOutlineSearch size="25px"/> */}
            <img alt="fmhsLogo" src={fmhsIcon} width="75px" className='rounded-lg'/>
            </span>
            <div className='text-sm pt-1'>
              <span className="">
                {educationSplit[0]}
                <br/>
                {educationSplit[1]}
              </span>

              {/* <span className='float-right mr-2'>
                <AiOutlineCaretRight size="25px"/>
              </span> */}
            </div>
          </div>
        </div>
        <div className='mt-6'>
          <p className=" text-2xl font-semibold">Skills</p>
        <div className="mt-2 grid grid-cols-2 gap-4">
          <div>
            <div className='mb-2'>
              <span className="font-semibold">Frontend Development</span>
              <span className='float-right'>
                  {/* How to create an accordion animation? */}
                  { frontendSkillsShowing ?
                  <AiOutlineCaretUp size="20px" className='hover:cursor-pointer' onClick={() => setFrontendSkillsShowing(!frontendSkillsShowing)}/>
                  :
                  <AiOutlineCaretDown size="20px" className='hover:cursor-pointer' onClick={() => setFrontendSkillsShowing(!frontendSkillsShowing)}/>
                  }
                </span>
            </div>
            <div className={`rounded-sm bg-[#fff]/30 text-center p-3 ${frontendSkillsShowing ? '' : 'hidden'}`}>
                <ul className='text-left'>
                    {Skills['Frontend Development'].map((skill, idx) => (
                        <li key={idx}>{skill}</li>
                    ))}
                  {/* <li>React.js</li>
                  <li>Angular</li>
                  <li>JavaScript & TypeScript</li>
                  <li>HTML & CSS</li>
                  <li>Tailwind & Bootstrap</li> */}
                </ul>
            </div>
          </div>

          <div>
          <div className='mb-2'>
              <span className="font-semibold">Backend Development</span>
              <span className='float-right'>
                  {/* How to create an accordion animation? */}
                  { backendSkillsShowing ?
                  <AiOutlineCaretUp size="20px" className='hover:cursor-pointer' onClick={() => setBackendSkillsShowing(!backendSkillsShowing)}/>
                  :
                  <AiOutlineCaretDown size="20px" className='hover:cursor-pointer' onClick={() => setBackendSkillsShowing(!backendSkillsShowing)}/>
                  }
                </span>
            </div>
            <div className={`rounded-sm bg-[#fff]/30 text-center p-3 ${backendSkillsShowing ? '' : 'hidden'}`}>
            <ul className='text-left'>
                {Skills['Backend Development'].map((skill, idx) => (
                        <li key={idx}>{skill}</li>
                ))}
                  {/* <li>C#</li>
                  <li>ASP.NET</li>
                  <li>MongoDB</li>
                  <li>Node & Express</li>
                  <li>SQL & LINQ</li> */}
                </ul>
            </div>  
          </div>
        </div>
        </div>
        <div className="mt-6">
          <p className="text-2xl font-semibold mb-2">Other Projects</p>
          {/*  Link to flowermound or something with group property? */}
          <a href="https://google-maps-filter.surge.sh/" className=''>
          <div className="rounded-sm bg-[#fff]/30 text-left font-bold h-[60px]">
            <span className="float-left align-middle mt-1 ml-1">
            {/* <AiOutlineSearch size="25px"/> */}
            <img alt="googleMapsIcon" src={googleMapsIcon} width="50px" className='rounded-lg'/>
            </span>
            <div className='pt-2'>
              <span className="">
                {/* {otherProjSplit[0]} */}
                {/* <br/> */}
                Google Maps Filtering App
              </span>

              <span className='float-right mr-2 mt-3'>
                <AiOutlineCaretRight size="25px"/>
              </span>

              <div className='text-xs'>
                (<a href='https://google-maps-filter.surge.sh/' className='underline text-sky-300'>Demo</a>) 
                - 
                (<a href='https://github.com/AJMikalauskas/google-maps-travel-advisor' className='underline text-sky-300'>GitHub</a>)  
              </div>
            </div>
          </div>
          </a>
          <div className="rounded-sm bg-[#fff]/30 text-left font-bold h-[60px] mt-4">
            <span className="float-left align-middle mt-1 ml-1">
            {/* <AiOutlineSearch size="25px"/> */}
            <img alt="bibleIcon" src={bibleIcon} width="50px" className='rounded-lg'/>
            </span>
            <div className='pt-2'>
              <span className="">
                {/* {otherProjSplit[0]} */}
                {/* <br/> */}
                Bible Book Rating App
              </span>
              <span className='float-right mr-2 mt-3'>
                <AiOutlineCaretRight size="25px"/>
              </span>
              <div className='text-xs'>
                (<a href='https://bible-book-rating-app.surge.sh/' className='underline text-sky-300'>Demo</a>) 
                - 
                (<a href='https://github.com/AJMikalauskas/rate-anything-app' className='underline text-sky-300'>GitHub</a>)  
              </div>

            </div>
          </div>
        </div>
        {/* <div className={`rounded-md bg-[#000]/60 px-4 w-full text-center -mx-4 absolute ${proj1Showing || proj2Showing ? "mt-[9.4%]": "bottom-0"}`} style={{}}>
            {/* <img alt='linkedin-of-me' src={linkedinPicOfMe} className='rounded-full w-[4%] float-left'/> 
          <div className='pt-2 pb-1'>
            <span className=''>
              {name}
            </span>
            <span className='float-right'>
                {/* Show Other Resume If Pressed? Transition Animation?
              <AiOutlinePoweroff size="25px" />
            </span>
          </div>
        </div> */}
      </div>     
        <div className='absolute bottom-0 bg-[#000]/60 w-full overflow-hidden h-[5%] flex py-1 justify-evenly'>
          <img src={windows11Icon} alt="windows-11-icon" width="35px" className='items-center flex hover:bg-white/40 rounded-md'/>
          <AiOutlineSearch size="35px" className='text-white items-center flex'/>
          {/* Make it to where it looks like zoom out of all 3 resumes? */}
          {/* <img src={taskViewIcon} alt="task-view-icon" width="35px" className='items-center flex hover:bg-white/40 rounded-md'/>  */}
          {/* Link To Resume? */}
          <img src={fileExplorerIcon} alt="file-explorer-icon" width="35px" className='items-center flex hover:bg-white/40 rounded-md'/> 
          {/* Link To Way To Mail Me? */}
          <img src={mailIcon} alt="mail-icon" width="35px" className='items-center flex hover:bg-white/40 rounded-md'/>
          {/* Call/Phone how to do? */}
          <img src={phoneIcon} alt="phone-icon" width="35px" className='items-center flex hover:bg-white/40 rounded-md'/>  
            <a href='https://www.linkedin.com/in/alexander-mikalauskas/'>
                <img src={linkedInIcon} alt="linked-in-icon" width="35px" className='items-center flex hover:bg-white/40 rounded-md'/>  
            </a>
            <a href='https://github.com/AJMikalauskas'>
                <img src={githubIcon} alt="github-icon" width="35px" className='items-center flex hover:bg-white/40 rounded-md'/>  
            </a>
            {/* Link To Something like a links page?*/}
          <img src={settingsIcon} alt="settings-icon" width="35px" className='items-center flex hover:bg-white/40 rounded-md'/>  
        </div>
    </div>
    {/* <div className="w-[15%] h-[10%] mt-[40%] pl-24">
            <a className="hover:cursor-pointer">
                <BsFillArrowRightCircleFill size="50px" className=" rounded-[50%] border-1 border-blue-500" />
            </a>
        </div> */}
  </div>
);
}

export default MicrosoftResumeTemplate;