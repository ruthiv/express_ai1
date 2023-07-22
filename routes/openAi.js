const express = require("express");
const {openai} = require("../config/openai")
const router = express.Router();


router.get("/", async (req, res) => {
    const query = req.query.q;
    if(! query){
        return req.status(400).json({err:"You need to send query string of q, domain/api/openai?q=Ask something"})
    }
    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: query,
            max_tokens: 1000,
            temperature: 1,
        });
        res.json(response.data.choices[0]);
    } catch (error) {
        console.log(error);
        res.status(502).json({ error })
    }
})

module.exports = router;