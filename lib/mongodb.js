// mongodb.js
import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI
const options = {}

let client = new MongoClient(uri,options);
let clientPromise;

if (!uri) {
  throw new Error('Add Mongo URI to .env.local')
}

if (process.env.NODE_ENV !== 'production') {
//Replacement).
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  clientPromise = client.connect();
}

export default clientPromise;
//Step 6: Access MongoDB