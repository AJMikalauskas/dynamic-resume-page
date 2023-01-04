export default async function handler(req, res) {
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Request-Headers": "*",
        "api-key": 'P5EZNL0l6d8Jmy8pN854HhV2U9noOGQbT6xPzPMoUCxDEOn64dTrEQXsCgQOsaVC',
      },
    };
    const fetchBody = {
        dataSource: 'Cluster0',
        database: 'DynamicResumeDB',
        collection: "other-projects"
        //req.body.collection_name --> for later
    };
  //  const baseUrl = `${process.env.MONGODB_DATA_API_URL}/action`;
  //Connection-String-Via-Mongo-Compass: mongodb+srv://Xander_Mik:Isaiah558@cluster0.8stfsj5.mongodb.net/test
    try {
     // switch (req.method) {
        // All I do ever is pull data no post case but will be helpful in the future.
        // I use POSt so I can send in data of the collection_name via the body
      //  case "GET":
            //console.log(req.body.collection_name);
            console.log("Checkpoint 1");
            //console.log(...fetchBody);
            //console.log(baseUrl);
            console.log(fetchOptions);
          const readData = await fetch('https://data.mongodb-api.com/app/data-xmjnw/endpoint/data/v1/action/find', {
            ...fetchOptions,
            body: JSON.stringify({...fetchBody}),
            });
            console.log("Checkpoint 2");
            console.log(readData);
          const readDataJson = await readData.json();
          console.log("Checkpoint 3");
          console.log(readDataJson);
          readDataJson.documents.forEach((data) => delete data._id);
          console.log(readDataJson.documents);
          res.status(200).json(readDataJson.documents);
          console.log("Checkpoint 4");
          console.log(readDataJson.documents);
         // break;
       // default:
        //  res.status(405).end();
         // break;
      }
   // }
     catch (error) {
      console.error(error);
      res.status(500).json({ error });
    }
  }