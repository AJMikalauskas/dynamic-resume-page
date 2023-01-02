// import { NextApiRequest, NextApiResponse } from "next"; --> With Typescript
//import { fields } from "../../typings"; --> Use when convertign to TS file

import clientPromise from "../../lib/mongodb";

export default async function handler(
    req,
    res
) {
    // Assumes or Gets information that its a GET request from axios? Or Fetch?
    // If in TS, will have to return correct values in data too, keep like this for now
    const client = await clientPromise;
    const db = await client.db("DynamicResumeDB");
//    if(req.method == "GET") {
        const foundProjects = await db.collection("projects").find({}).toArray();
        const foundOtherProjects = await db.collection("other-projects").find({}).toArray();
        const foundSkills = await db.collection("skills").find({}).toArray();
        const foundSingleFields = await db.collection("single-fields").find({}).toArray();
        // {status: 200, data: 
    res.json({ otherProjects:foundOtherProjects, projects:foundProjects, 
            singleFields: foundSingleFields, skills: foundSkills});
    // } else {
    //     res.json({status:404, data: {message: "Test Message In retrieveAllData"}})
    // }
    // import type { NextPage } from 'next'
    // import Head from 'next/head'
    // import Image from 'next/image'
    
    // const Home: NextPage = () => {
    //   return (
    //     <div className="flex min-h-screen flex-col items-center justify-center py-2">
    //       <Head>
    //         <title>Create Next App</title>
    //         <link rel="icon" href="/favicon.ico" />
    //       </Head>
}
