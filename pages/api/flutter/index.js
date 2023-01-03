export default async function handler(req, res) {
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Request-Headers": "*",
        "api-key": process.env.MONGODB_DATA_API_KEY,
      },
    };
    const fetchBody = {
        dataSource: process.env.MONGODB_DATA_SOURCE,
        database: 'DynamicResumeDB',
        collection: req.body.collection_name
        //req.body.collection_name --> for later
    };
    const baseUrl = `${process.env.MONGODB_DATA_API_URL}/action`;
  //Connection-String-Via-Mongo-Compass: mongodb+srv://Xander_Mik:Isaiah558@cluster0.8stfsj5.mongodb.net/test
    try {
      switch (req.method) {
        // All I do ever is pull data no post case but will be helpful in the future.
        // I use POSt so I can send in data of the collection_name via the body
        case "POST":
          const readData = await fetch(`${baseUrl}/find`, {
            ...fetchOptions,
        body: JSON.stringify({...fetchBody, }),
        });
          const readDataJson = await readData.json();
          res.status(200).json(readDataJson.documents);
          break;
        default:
          res.status(405).end();
          break;
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error });
    }
  }