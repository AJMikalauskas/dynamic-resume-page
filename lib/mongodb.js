// // mongodb.js
// import { MongoClient } from 'mongodb'

// const uri = process.env.MONGODB_URI
// const options = {}
// // console.log(" There is an error here 1");

// if (!uri) {
//   throw new Error('Add Mongo URI to .env.local')
// }
// // console.log(" There is an error here 2");
// let client = new MongoClient(uri,options);
// let clientPromise;

// if (process.env.NODE_ENV !== 'production') {
// //Replacement).
//   if (!global._mongoClientPromise) {
//     global._mongoClientPromise = client.connect();
//   }
//   clientPromise = global._mongoClientPromise;
// } else {
//   clientPromise = client.connect();
// }

// // console.log(" There is an error here 3");


// export default clientPromise;
// //Step 6: Access MongoDB
// MONGODB_URI=mongodb+srv://Xander_Mik:Isaiah558@cluster0.8stfsj5.mongodb.net/?retryWrites=true&w=majority
// NODE_ENV=development
