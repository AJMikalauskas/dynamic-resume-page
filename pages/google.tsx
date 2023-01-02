import { GetServerSideProps, GetStaticProps } from "next"
import GoogleResume from "../components/GoogleResume"
import MicrosoftResume from "../components/MicrosoftResume"
import { fields } from "../typings"
import getResumeData from "../lib/retrieveData";

interface Props {
  allData: string,
}

const google = ({allData}:Props) => {
  //console.log(allData);
  return (
     <GoogleResume data={allData} />
  )
}
// SSG - getStaticProps vs SSR - getServerSideProps?
//async function
export const getServerSideProps: GetServerSideProps = async(context) => {
  // Set states by passing in as props, no need for loading state?
  // Test
  let allData = await getResumeData();
 // if(!allData.otherProjects || !allData.projects || !allData.singleFields || !allData.skills) throw new Error('Failed to fetch Resume Data google');
 // console.log({otherProjects, projects, singleFields, skills});


  return {
    props: { allData: JSON.stringify(allData) }
    //revalidate: 60, // after 60 seconds it will update the old cached version 
  }
}
export default google;