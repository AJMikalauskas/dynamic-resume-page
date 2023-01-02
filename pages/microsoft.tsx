 import { GetStaticProps } from "next"
import MicrosoftResume from "../components/MicrosoftResume"
import { fields } from "../typings"
// import axios from "axios";
// import { GetStaticProps } from "next";
// import { fields } from "../typings";
// import { GetServerSideProps, GetStaticProps } from "next";

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
//async function
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
export default microsoft;