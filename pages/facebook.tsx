import { GetStaticProps } from "next"
import GoogleResume from "../components/GoogleResume"
import FacebookResume from "../components/FacebookResume"
import { fields } from "../typings"

interface Props {
  allData: fields,
}
const facebook = ({allData}:Props) => {
  //console.log(allData);
  return (
     <FacebookResume data={allData} />
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
export default facebook;