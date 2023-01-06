import { GetServerSideProps, GetStaticProps } from "next"
import GoogleResume from "../components/GoogleResume"
import FacebookResume from "../components/FacebookResume"
import { fields } from "../typings"
import getResumeData from "../lib/retrieveData";
import {server} from "../config";
import { store } from "../store";

interface Props {
  allData: fields,
}

// const fetchResumeData = async () => {
//   // try {
//     let resumeData = await fetch(`${server}/api/retrieveAllData`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     return resumeData.json();
//     //return res.status(200).json();
//   // } catch (error) {
//   //   throw new Error("Problem Fetching Resume Data Google");
//   // }
// };

const facebook = ({allData}:Props) => {
  //console.log(allData);
  //console.log(store.getState());
  //console.log(store.getState().resumeData);
  let propsPassedInViaRedux = store.getState().resumeData.data;
  return (
     <FacebookResume data={propsPassedInViaRedux} />
  )
}
// SSG - getStaticProps vs SSR - getServerSideProps?
//async function
// export const getStaticProps: GetStaticProps = async(context) => {
//   // Set states by passing in as props, no need for loading state?
//   let allData = await fetchResumeData();
//  // if(!allData.otherProjects || !allData.projects || !allData.singleFields || !allData.skills) throw new Error('Failed to fetch Resume Data facebook');
//  // console.log({otherProjects, projects, singleFields, skills});

//   return {
//     props: { allData }
//     //revalidate: 60, // after 60 seconds it will update the old cached version 
//   }
// }
// facebook.getInitialProps = async() => {
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
//   const json = { otherProjects: await otherProjectsData.json(), projects: await projectsData.json(),
//   singleFields: await singleFieldsData.json(), skills: await skillsData.json() };
//   return {
//     allData: json
//   }
// }
export default facebook;