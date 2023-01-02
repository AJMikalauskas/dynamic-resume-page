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
  //  if (!dynamicResumeCol) 
    await init();
    const foundProjects = await db.collection("projects").find({}).toArray();
    // .map((project) => {
    //     delete project._id;
    //     return project;
    // });
    const foundOtherProjects = await db
      .collection("other-projects")
      .find({})
      .toArray()
    //   .map((otherProject) => {
    //     delete otherProject._id
    //     return otherProject;
    //   });
    const foundSkills = await db.collection("skills").find({}).toArray();
    // .map((skill) => {
    //     delete skill._id;
    //     return skill;
    // });
    const foundSingleFields = await db
      .collection("single-fields")
      .find({})
      .toArray();
    //   .map((singleField) => {
    //     delete singleField._id
    //     return singleField;
    //   });
    //res.json({ otherProjects:foundOtherProjects, projects:foundProjects,
    //       singleFields: foundSingleFields, skills: foundSkills});
    console.log({
        foundOtherProjects: foundOtherProjects.forEach((otherProject) => delete otherProject._id),
        foundProjects: foundProjects.forEach((project) => delete project._id),
        foundSingleFields: foundSingleFields.forEach((singleField) => delete singleField._id),
        foundSkills: foundSkills.forEach((skill) => delete skill._id)
    })
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
