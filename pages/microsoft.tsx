 import { GetServerSideProps, GetStaticProps } from "next"
import MicrosoftResume from "../components/MicrosoftResume"
import { fields } from "../typings"
import getResumeData from "../lib/retrieveData";
import {server} from "../config";

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
  //console.log(allData);
  return (
     <MicrosoftResume data={allData} />
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
microsoft.getInitialProps = async() => {
  console.log(`${server}/api`);
  let otherProjectsData = await fetch(`${server}/api/flutter`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ collection_name: "other-projects"})
  });

  let projectsData = await fetch(`${server}/api/flutter`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ collection_name: "projects"})
  });

  let singleFieldsData = await fetch(`${server}/api/flutter`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ collection_name: "single-fields"})
  });

  let skillsData = await fetch(`${server}/api/flutter`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ collection_name: "skills"})
  });
  const json = { otherProjects: await otherProjectsData.json(), projects: await projectsData.json(),
  singleFields: await singleFieldsData.json(), skills: await skillsData.json() };
  return {
    allData: json
  }
}
export default microsoft;