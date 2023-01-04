import axios from "axios";
export default async function handler(
    req,
    res
) {
    // Assumes or Gets information that its a GET request from axios? Or Fetch?
    const { email } = req.body;
    if(!email || !email.length) {
        return res.status(400).json({
            error: "Forgot to add your email?",
        });
    }

    try {
        console.log(email);
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
        console.log(err);
        console.log(err.response.data);
        if(err.response.data.detail.includes("is already a list member")) {
            const errorSplit = err?.response?.data?.detail.split('. ');

            return res.status(400).json({
                error: `${errorSplit[0]}.`,
            })
        }
        //console.log(err.data.detail);
        return res.status(400).json({
            error: `${err?.response?.data?.detail}`,
        });
    }
}
