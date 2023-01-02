import React, { Suspense, useRef, useState, useEffect } from "react";
import axios from "axios";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import microsoftTemplateSmall from "../public/images/microsoftTemplateSmall.png";
import googleTemplateSmall from "../public/images/googleTemplateSmall.png";
import facebookTemplateSmall from "../public/images/facebookTemplateSmall.png";


import dynamic from "next/dynamic";
import Link from "next/link";
import { NextPage } from "next";
import Image from "next/image";
import Animation from "../components/Animation";
import Head from "next/head";
const NewsletterSubscribe = dynamic(
  () => import("../components/NewsletterSubscribe"),
  {
    loading: LoadingSpinner,
  }
);

  // Main Project Pages
//const CryptoAppProj = React.lazy(() => import("./components/CryptoApp"));
//const DappProj = React.lazy(() => import("./components/FacebookTemplate"));

  // Missing 404 Page
//const Missing404 = React.lazy(() => import("./components/Missing404"));

const Home: NextPage = () => {
  // const [data,setData] = useState({});
  // const effectRan = useRef(false);

  // const pushTestReq = async() => {
  //   try {
  //     const res = await axios.get("http://localhost:5000/retrieveAllData");
  //     //console.log(res.data);
  //     console.log("successful in adding to database");
  //     // const { otherProjects, projects, singleFields, skills} = res.data;
  //     console.log(typeof res.data)
  //     setData(res.data);
  //   }catch(err) {
  //     console.log(err);
  //   }
  // }

  // useEffect(() => {
  //   if(effectRan.current === false) {
  //     pushTestReq();

  //     return () =>  {
  //       console.log('unmounted')
  //       effectRan.current = true;
  //     }
  // }

  // }, [])

  const retrieveData = async() => {
    let dataTst;
    let res = await fetch("http://localhost:3000/api/retrieveAllData", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    return response.json();
  }).then((data) =>{
    //console.log(data);
    //console.log(data.data);
    //return JSON.parse(data);
    return data;
  }).catch((err) => {
    console.log(err);
    //setSubmitted(false);
  });
  dataTst = await res;

  console.log(dataTst);
 // let allData = await res.json();
 // console.log(allData);
  // console.log(await res.json());
  }


  return (
    <div className="text-white bg bg-gradient-to-r from-[#159957] to-[#155799] w-full h-full">
        {/* <Head>
        <title>Xander's Dynamic Resume</title>
        <link
          href="'https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800;900&display=swap'"
          rel="stylesheet"
        />
      </Head> */}
      <Animation/>
      <Suspense
        fallback={
          <div className="">
            <LoadingSpinner />
          </div>
        }
      >
        <div className="p-14">
          <div className="text-center z-10 relative">
            <div className="border border-white text-white p-4 justify-center item-center">
              <div className="text-center m-auto max-w-[800px]">
                <p className="text-4xl font-bold mb-2">Hi, I'm Alexander</p>
                <p className="">
                  {" "}
                  Thanks for visiting My Dynamic Resume Page! Feel free to
                  explore all 3 templates and subscribe to my newsletter while
                  you're here!
                </p>
                {/* <button onClick={retrieveData}>Test Return</button> */}
              </div>
            </div>
          </div>
          <div className="mt-[50px] mx-[5%] justify-evenly flex h-[400px] font-semibold z-20 relative">
            {/* lg is laptop size screen */}
            <Link
              href="/microsoft"
              className="hover:scale-125 text-center w-[275px] md:w-[225px]"
              style={{ transition: "transform .5s" }}
            >
              <div>Microsoft</div>
              <Image
                src={microsoftTemplateSmall}
                alt="microsoft-template-small"
                className=" w-[100%] items-center h-full"
              />
            </Link>
            <Link
              href="/google"
              className="hover:scale-125 text-center w-[275px] md:w-[225px]"
              style={{ transition: "transform .5s" }}
            >
              <div>Google</div>
              <Image
                src={googleTemplateSmall}
                alt="google-template-small"
                className="w-[100%] items-center h-full"
                style={{ transition: "transform .5s" }}
              />
            </Link>
            <Link
              href="/facebook"
              className="hover:scale-125 text-center w-[275px] md:w-[225px]"
              style={{ transition: "transform .5s" }}
            >
              <div>Facebook</div>
              <Image
                src={facebookTemplateSmall}
                alt="facebook-template-small"
                className=" w-[100%] h-full items-center"
                style={{ transition: "transform .5s" }}
              />
            </Link>
          </div>
          <NewsletterSubscribe />
        </div>
      </Suspense>
    </div>
  );
};

export default Home;
