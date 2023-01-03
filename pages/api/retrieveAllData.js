import getResumeData from "../../lib/retrieveData";
// import { fields } from "../../typings";

export default async function handler(
    req,
    res
) {
    // Assumes or Gets information that its a GET request from axios? Or Fetch?
    // If in TS, will have to return correct values in data too, keep like this for now
    if(req.method == "GET") {
        try {
            const { otherProjects, projects, singleFields, skills, error } = await getResumeData();
            if(error) throw new Error(error);

            return res.status(200).json({otherProjects, projects, singleFields, skills});
        } catch(error) {
            return res.status(500).json({error: "This is a test error"})
        }
    }
    res.setHeader('Allow', ['GET']);
    res.status(425).end(`Method ${req.method} is not allowed`);         
}
