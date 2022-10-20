const express = require('express');
//const request = require('request');
//const bodyParser = require('body-parser');
//const path = require('path');
const cors = require('cors');
const axios = require('axios');
const corsOptions = require('./config/corsOptions');
//const mailchimp = require("mailchimp-marketing");
const mongoose = require('mongoose');
const Projects = require('./models/Project.model');
const OtherProjects = require('./models/OtherProjects.model');
const Skills = require('./models/Skills.model');
const SingleFields = require('./models/SingleFields.model');


require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors(corsOptions));

// Use env.PORT  if not on a local server, if on local server, use port 5000
// process.env.PORT
const PORT = 5000;

// Static folder
// app.use(express.static(path.join(__dirname, 'public')))
// mailchimp.setConfig({
//     apiKey: "ff16a84ee287677a6eebe3bf2c347da1-us14",
//     server: "us14",
// })
app.get('/retrieveAllData', async(req,res) => {
  //  const foundProjects = await Projects.find().exec();

    try {
        const foundProjects = await Projects.find().exec();
        const foundOtherProjects = await OtherProjects.find().exec();
        const foundSkills = await Skills.find().exec();
        const foundSingleFields = await SingleFields.find().exec();
        res.status(200).json({projects: foundProjects, otherProjects: foundOtherProjects, skills: foundSkills, singleFields: foundSingleFields});
    } catch(err) {
        res.status(500).json(err);
    }
})

app.post('/addSubscriber', async(req,res) => {
    // function getReqParams(email) {
    //     const API_KEY = process.env.MAILCHIMP_API_KEY;
    //     const LIST_ID = process.env.MAILCHIMP_LIST_ID;
    
    //     const DATACENTER = process.env.MAILCHIMP_API_KEY.split("-")[1];
    //     console.log(API_KEY);
    //     console.log(LIST_ID);
    //     console.log(DATACENTER);
    
    //     const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;
    
    //     const data = {
    //         email_address: email,
    //         status: "pending",
    //     }
    
    //     const base64ApiKey = Buffer.from(`anystring:${API_KEY}`).toString("base64");
    //     const headers = {
    //         "Content-Type": "application/json",
    //         Authorization: `Basic ${base64ApiKey}`,
    //     };
    
    //     return {
    //         url,
    //         data,
    //         headers,
    //     };
    // };
    // return res.status(200).json({
    //     message: "Hello World!",
    // })
    const { email } = req.body;
    if(!email || !email.length) {
        return res.status(400).json({
            error: "Forgot to add your email?",
        });
    }

    try {
       // const {url,data,headers} = getReqParams(email);
        console.log(email);
        // const response = await mailchimp.lists.addListMember("5e5ffaae31", JSON.stringify({
        //     email_address: "test@gmail.com",
        //     status: "pending"
        // })
        //);
        //console.log(response);
        const payload = {
            email_address : email,
            status: 'subscribed'
        }
        // Need to put these in .env file
        const listId = process.env.MAILCHIMP_LIST_ID;
        const apiKey = process.env.MAILCHIMP_API_KEY;
        const response = await axios.post(`https://us14.api.mailchimp.com/3.0/lists/${listId}/members`, payload,
        {
            headers: {
                Authorization: `Basic ${apiKey}`,
            }
        });
        console.log(response);
        // Success
        return res.status(200).json({ msg: "You have successfully signed up for the newsletter!"});
        //json({response});
    } catch(err) {
        //console.log(err.response.data);
        //console.log(err.data.detail);
        return res.status(400).json({
            error: `${err?.response?.data?.detail}`,
        });
    }
})


mongoose.connect("mongodb://dynamicresumescosmosdb:w8xqN2W25pR83rfW4KyrEetHMyG3TAZVR57fEpFe6qUiBI7J6KU68B6YszgFyAHeXroRLv5D9EhZprM0S6fFRw==@dynamicresumescosmosdb.mongo.cosmos.azure.com:10255/ResumeData?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@dynamicresumescosmosdb@", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("connection successful"))
.catch((err) => console.log(err));

app.listen(PORT, console.log(`Server is listening on port ${PORT}`));