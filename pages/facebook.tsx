import { GetServerSideProps, GetStaticProps } from "next"
import GoogleResume from "../components/GoogleResume"
import FacebookResume from "../components/FacebookResume"
import { fields } from "../typings"
import getResumeData from "../lib/retrieveData";
import {server} from "../config";

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
  return (
     <FacebookResume data={allData} />
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
facebook.getInitialProps = async() => {
  let resumeData = await fetch(`${server}/api/retrieveAllData`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await resumeData.json();
  return {
    allData: json
  }
}
export default facebook;