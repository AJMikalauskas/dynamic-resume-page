import clientPromise from "./mongodb";

let client;
let db;
let dynamicResumeCol;

async function init() {
  if (db) return;

  try {
    client = await clientPromise;
    db = await client.db("DynamicResumeDB");
    //dynamicResumeCol = await db.collection("DynamicResumeDB");
  } catch (error) {
    throw new Error("Failed to establish connection to database");
  }
}

async () => {
  await init();
};

export default async function getResumeData() {
  try {
    if (!dynamicResumeCol) await init();
    const foundProjects = await db.collection("projects").find({}).toArray();
    const foundOtherProjects = await db
      .collection("other-projects")
      .find({})
      .toArray();
    const foundSkills = await db.collection("skills").find({}).toArray();
    const foundSingleFields = await db
      .collection("single-fields")
      .find({})
      .toArray();
    //res.json({ otherProjects:foundOtherProjects, projects:foundProjects,
    //       singleFields: foundSingleFields, skills: foundSkills});
    //console.log({foundOtherProjects,foundProjects,foundSingleFields,foundSkills})
    return {
      otherProjects: foundOtherProjects,
      projects: foundProjects,
      singleFields: foundSingleFields,
      skills: foundSkills,
    };
  } catch (error) {
    return { error: "Failed To Fetch Dynamic Resume Data" };
  }
}
