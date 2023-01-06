 import { GetServerSideProps, GetStaticProps } from "next"
import MicrosoftResume from "../components/MicrosoftResume"
import { fields } from "../typings"
import getResumeData from "../lib/retrieveData";
import {server} from "../config";
import { useSelector, useDispatch} from 'react-redux';
import { store } from "../store";
import { getAllResumeData } from "../slices/resumeDataSlice";

interface Props {
  allData: fields,
}

const fetchResumeData = async () => {
  // try {
    let resumeData = await fetch(`${server}/api/retrieveAllData`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return resumeData.json();
    //return res.status(200).json();
  // } catch (error) {
  //   throw new Error("Problem Fetching Resume Data Google");
  // }
};

const microsoft = ({allData}:Props) => {
 // const data = useSelector(getAllResumeData);
  //console.log("data...", data);
 // console.log(store.getState());
  //console.log(store.getState().resumeData);
  let propsPassedInViaRedux = store.getState().resumeData.data;
  // .resumeData.data
  //console.log(allData);
  return (
    // How to send data down via props, we get data back and data property set to correct data, but how do we send???
     <MicrosoftResume data={propsPassedInViaRedux} />
  )
}
// SSG - getStaticProps vs SSR - getServerSideProps?
//async function - serverside renders at runtime?

// export const getStaticProps: GetStaticProps = async(context) => {
//   // Set states by passing in as props, no need for loading state?
//   //setIsLoading(true);
//   //let data: fields;
//   //try {
//     // axios has some problems, most axios calls need the full URL 
//     // or to be running independently of the next js routing
//   //let exData: fields;
//   // let res = fetch("http://localhost:3000/api/retrieveAllData", {
//   //   method: "GET",
//   //   headers: {
//   //     "Content-Type": "application/json",
//   //   },
//   // }).then((response) => {
//   //   return response.json();
//   // }).then((data) => {
//   //   return data.data;
//   // });
//   // let returnData = await res;
//   let allData = await fetchResumeData();
//   //if(!allData.otherProjects || !allData.projects || !allData.singleFields || !allData.skills) throw new Error('Failed to fetch Resume Data microsoft');
//  // console.log({otherProjects, projects, singleFields, skills});

//   //allData = JSON.stringify(allData);
//   //console.log(allData);JSON.parse(JSON.stringify(
//     console.log(allData);
//   return {
//     props: { allData }
//     //revalidate: 60, // after 60 seconds it will update the old cached version 
//   }
// }
// microsoft.getInitialProps = async() => {
//   console.log(`${server}/api`);
//   let otherProjectsData = await fetch(`${server}/api/flutter`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ collection_name: "other-projects"})
//   });

//   let projectsData = await fetch(`${server}/api/flutter`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ collection_name: "projects"})
//   });

//   let singleFieldsData = await fetch(`${server}/api/flutter`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ collection_name: "single-fields"})
//   });

//   let skillsData = await fetch(`${server}/api/flutter`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ collection_name: "skills"})
//   });
//   //console.log(await otherProjectsData);
//   const json = { otherProjects: await otherProjectsData.json(), projects: await projectsData.json(),
//   singleFields: await singleFieldsData.json(), skills: await skillsData.json() };
//   //const projects = await otherProjectsData.json();
//   //console.log(projects);
//   //const json = "Test";
//   return {
//     allData: json
//   }
// }
export default microsoft;