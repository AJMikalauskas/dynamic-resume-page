import { GetServerSideProps, GetStaticProps } from "next"
import GoogleResume from "../components/GoogleResume"
import FacebookResume from "../components/FacebookResume"
import { fields } from "../typings"
import getResumeData from "../lib/retrieveData";

interface Props {
  allData: string,
}

const facebook = ({allData}:Props) => {
  //console.log(allData);
  return (
     <FacebookResume data={allData} />
  )
}
// SSG - getStaticProps vs SSR - getServerSideProps?
//async function
export const getServerSideProps: GetServerSideProps = async(context) => {
  // Set states by passing in as props, no need for loading state?
  let allData = await getResumeData();
  if(!allData.otherProjects || !allData.projects || !allData.singleFields || !allData.skills) throw new Error('Failed to fetch Resume Data microsoft');
 // console.log({otherProjects, projects, singleFields, skills});

  return {
    props: { allData: JSON.stringify(allData) }
    //revalidate: 60, // after 60 seconds it will update the old cached version 
  }
}
export default facebook;