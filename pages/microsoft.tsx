 import { GetServerSideProps, GetStaticProps } from "next"
import MicrosoftResume from "../components/MicrosoftResume"
import { fields } from "../typings"
import getResumeData from "../lib/retrieveData";

interface Props {
  allData: fields,
}

const microsoft = ({allData}:Props) => {
  //console.log(allData);
  return (
     <MicrosoftResume data={allData} />
  )
}
// SSG - getStaticProps vs SSR - getServerSideProps?
//async function - serverside renders at runtime?

export const getStaticProps: GetStaticProps = async(context) => {
  // Set states by passing in as props, no need for loading state?
  //setIsLoading(true);
  //let data: fields;
  //try {
    // axios has some problems, most axios calls need the full URL 
    // or to be running independently of the next js routing
  //let exData: fields;
  // let res = fetch("http://localhost:3000/api/retrieveAllData", {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // }).then((response) => {
  //   return response.json();
  // }).then((data) => {
  //   return data.data;
  // });
  // let returnData = await res;
  let allData = await getResumeData();
  //if(!allData.otherProjects || !allData.projects || !allData.singleFields || !allData.skills) throw new Error('Failed to fetch Resume Data microsoft');
 // console.log({otherProjects, projects, singleFields, skills});

  //allData = JSON.stringify(allData);
  //console.log(allData);JSON.parse(JSON.stringify(
    console.log(allData);
  return {
    props: { allData }
    //revalidate: 60, // after 60 seconds it will update the old cached version 
  }
}
export default microsoft;