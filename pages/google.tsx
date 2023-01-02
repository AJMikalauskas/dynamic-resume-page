import { GetStaticProps } from "next"
import GoogleResume from "../components/GoogleResume"
import MicrosoftResume from "../components/MicrosoftResume"
import { fields } from "../typings"

interface Props {
  allData: fields,
}
const google = ({allData}:Props) => {
  //console.log(allData);
  return (
     <GoogleResume data={allData} />
  )
}
// SSG - getStaticProps vs SSR - getServerSideProps?
//async function
export const getStaticProps: GetStaticProps = async(context) => {
  // Set states by passing in as props, no need for loading state?
  let res = await fetch("http://localhost:3000/api/retrieveAllData", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
  let allData = await res.json();

  return {
    props: { allData }
    //revalidate: 60, // after 60 seconds it will update the old cached version 
  }
}
export default google;