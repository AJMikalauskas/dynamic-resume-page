import { useState } from 'react'; 
import "./App.css";
// import bgImg from "../src/img/microsoft-bg.png";
import ethIcon from "../src/img/eth.png";
import fmhsIcon from "../src/img/fmhsLogo.png";
import {AiOutlineSearch, AiOutlineCaretDown, AiOutlineCaretUp, AiOutlineCaretRight, AiOutlinePoweroff}  from "react-icons/ai";
import linkedinPicOfMe from "../src/img/linkedinprofile.png";
import windows11Icon from "../src/img/windows-11-icon.png";
import taskViewIcon from "../src/img/task-view.png";
import fileExplorerIcon from "../src/img/file-explorer.png";
import mailIcon from "../src/img/mail.png";
import phoneIcon from "../src/img/mobile-phone.png";
import linkedInIcon from "../src/img/linkedin.png";
import githubIcon from "../src/img/github.png";
import settingsIcon from "../src/img/settings.png"

// const socialIcons: {icon: JSX.Element, url: string}[] = [
//   {
//     icon: <AiOutlineSearch/>,
//     url: "./"
//   }
// ]


function App() {
  const [proj1Showing, setProj1Showing] = useState(false);
  const [proj2Showing, setProj2Showing] = useState(false);
  const [frontendSkillsShowing, setFrontendSkillsShowing] = useState(true);
  const [backendSkillsShowing, setBackendSkillsShowing] = useState(true);

  return (
  <div className="max-w-[1000px] mx-auto p-8 flex flex-col justify-center w-full h-full"> 
    {/* bg-no-repeat bg-contain bg-center custom-img */}
    {/* className="rounded-md flex justify-center mx-auto bg-no-repeat bg-contain bg-center custom-img" */}
      <div className="rounded-md flex justify-center mx-auto bg-no-repeat bg-contain bg-center custom-img relative h-[90vh] w-full">
        <div className="rounded-md bg-[#000]/50 mb-12 mt-4 w-[60%] p-4 text-white">
          <div className="rounded-md bg-[#fff]/50 h-8 text-center text-black">
            <span className="float-left align-middle mt-1">
            <AiOutlineSearch size="25px"/>
            </span>
            {/* <div className="float-right"> */}
            <p className="pt-1.5">
              {/* Preset withn mongodb data later */}
            Alexander Mikalauskas
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
                  Decentralized Token Exchange App
                </span>
                <span className="font-extralight text-sm ml-4">
                  (Apr 2022 - Jul 2022)
                </span>

                <div>
                <span className="font-extralight text-sm">
                  (<a href="/">Demo</a>)
                  - 
                  (<a href="/">GitHub</a>)
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
              {/*  Should I leave a link to ropsten eth faucet? And Metamask? */}
                  <li>Web application that enables users to buy or sell a custom ERC-20 token in exchange of Ethereum; Requires Ropsten ETH and a Metamask Account</li>
                  {/* <li>Displays Exchange Screens including a token price chart, trades made on the exchange, all active orders waiting to be filled,unfilled orders by the user, and trades made by the user</li> */}
                  <li>Allows users to deposit tokens or Ethereum from their wallet onto the Exchange; Can also withdraw from the Exchange back to the wallet</li>
                  {/* Link to Solidity */}
                  <li>Created Token and Exchange Smart Contracts using <b><u>Solidity</u></b></li>
                  <li>Implemented <b><u>TDD</u></b> to assure correct functionality among smart contract methods</li>
                  <li> Deployed Smart Contracts to the Ropsten Test Network using <b><u>Truffle</u></b></li>
            </ul>
            <p className="text-sm mx-4 "><b><u>Tech Stack:</u></b> React.js, Redux, Solidity, TDD, Truffle, Ganache, CSS modules, HTML</p>
            </div>
          </div>
          {/* 2nd Project */}
          <div className="mt-4">
            <div className="">
              <img src={ethIcon} alt="ethIcon" height="50px" width="50px"  className="float-left mr-2"/>
              {/*  To Be Dynamic Later */}
                {/* Mini Arrow Icon to the right of this? */}
                <span className="font-medium">
                  Crypto Login Authentication App
                </span>
                <span className="font-extralight text-sm ml-4">
                  (Jul 2021 - Present)
                </span>

                <div>

                  <span className="font-extralight text-sm">
                    (<a href="/">Demo</a>)
                    - 
                    (<a href="/">GitHub</a>)
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
                  <li> Web application that enables users to add crypto coins from a table to their watchlist with a fully functioning login system verified using <b><u>JWTs</u></b></li>
                  <li> Implemented the entire login system to allow <b><u>CRUD</u></b> Operations on the user list and user validation</li>
                  <li> Designed and created a fully responsive home page with a table, chart, and a search system using the Coin Gecko API & deployed using Netlify</li>
                  <li>Designed API Controllers on the Backend & deployed using Heroku</li>
            </ul>
            {/*  Remove duplicates in lists? */}
            <p className="text-sm mx-4 "><b><u>Tech Stack:</u></b> React.js, Asynchronous API(async/await), Hooks(State/Effect), MongoDB, Express, Axios, Custom Hooks & REST API</p>
          </div>
          </div>
          {/* Education Section */}
        <div className="mt-6">
          <p className="text-2xl font-semibold mb-0">Education</p>
          {/*  Link to flowermound or something with group property? */}
          <div className="rounded-sm bg-[#fff]/30 text-center font-bold py-2">
            <span className="float-left align-middle mt-1 ml-1">
            {/* <AiOutlineSearch size="25px"/> */}
            <img alt="fmhsLogo" src={fmhsIcon} height="75px" width="75px" className='rounded-lg'/>
            </span>
            <div className=''>
              <a href="/">
              <span className="">
                High School Degree, Flower Mound High School
                <br/>
                Graduated December 2021
              </span>

              <span className='float-right mr-2'>
                <AiOutlineCaretRight size="25px"/>
              </span>
              </a>
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
                  <AiOutlineCaretUp size="25px" className='hover:cursor-pointer' onClick={() => setFrontendSkillsShowing(!frontendSkillsShowing)}/>
                  :
                  <AiOutlineCaretDown size="25px" className='hover:cursor-pointer' onClick={() => setFrontendSkillsShowing(!frontendSkillsShowing)}/>
                  }
                </span>
            </div>
            <div className={`rounded-sm bg-[#fff]/30 text-center p-3 ${frontendSkillsShowing ? '' : 'hidden'}`}>
                <ul className='text-left'>
                  <li>React.js</li>
                  <li>Angular</li>
                  <li>JavaScript & TypeScript</li>
                  <li>HTML & CSS</li>
                  <li>Tailwind & Bootstrap</li>
                </ul>
            </div>
          </div>

          <div>
          <div className='mb-2'>
              <span className="font-semibold">Backend Development</span>
              <span className='float-right'>
                  {/* How to create an accordion animation? */}
                  { backendSkillsShowing ?
                  <AiOutlineCaretUp size="25px" className='hover:cursor-pointer' onClick={() => setBackendSkillsShowing(!backendSkillsShowing)}/>
                  :
                  <AiOutlineCaretDown size="25px" className='hover:cursor-pointer' onClick={() => setBackendSkillsShowing(!backendSkillsShowing)}/>
                  }
                </span>
            </div>
            <div className={`rounded-sm bg-[#fff]/30 text-center p-3 ${backendSkillsShowing ? '' : 'hidden'}`}>
            <ul className='text-left'>
                  <li>C#</li>
                  <li>ASP.NET</li>
                  <li>MongoDB</li>
                  <li>Node & Express</li>
                  <li>SQL & LINQ</li>
                </ul>
            </div>  
          </div>
        </div>
        </div>
        <div className="mt-6">
          <p className="text-2xl font-semibold mb-0">Other Projects</p>
          {/*  Link to flowermound or something with group property? */}
          <div className="rounded-sm bg-[#fff]/30 text-center font-bold py-2">
            <span className="float-left align-middle mt-1 ml-1">
            {/* <AiOutlineSearch size="25px"/> */}
            <img alt="fmhsLogo" src={fmhsIcon} height="75px" width="75px" className='rounded-lg'/>
            </span>
            <div className=''>
              <a href="/">
              <span className="">
                High School Degree, Flower Mound High School
                <br/>
                Graduated December 2021
              </span>

              <span className='float-right mr-2'>
                <AiOutlineCaretRight size="25px"/>
              </span>
              </a>
            </div>
          </div>
        </div>
        <div className='rounded-md bg-[#000]/60 mt-8 px-4 -mx-4 text-center justify-center m-auto' style={{}}>
            {/* <img alt='linkedin-of-me' src={linkedinPicOfMe} className='rounded-full w-[4%] float-left'/> */}
          <div className='pt-2 pb-1'>
            <span className=''>
              Alexander Mikalauskas
            </span>
            <span className='float-right'>
              <AiOutlinePoweroff size="25px" />
            </span>
          </div>
        </div>
      </div>     
        <div className='absolute bottom-0 bg-[#000]/60 w-[65%] max-w-[585px] overflow-hidden h-[5%] flex py-1 justify-evenly'>
          <img src={windows11Icon} alt="windows-11-icon" width="35px" className='items-center flex'/>
          <AiOutlineSearch size="35px" className='text-white items-center flex'/>
          <img src={taskViewIcon} alt="task-view-icon" width="35px" className='items-center flex'/> 
          <img src={fileExplorerIcon} alt="file-explorer-icon" width="35px" className='items-center flex'/> 
          <img src={mailIcon} alt="mail-icon" width="35px" className='items-center flex'/>
          <img src={phoneIcon} alt="phone-icon" width="35px" className='items-center flex'/>  
          <img src={linkedInIcon} alt="linked-in-icon" width="35px" className='items-center flex'/>  
          <img src={githubIcon} alt="github-icon" width="35px" className='items-center flex'/>  
          <img src={settingsIcon} alt="settings-icon" width="35px" className='items-center flex'/>  
        </div>
    </div>
  </div>
);
}

export default App;
