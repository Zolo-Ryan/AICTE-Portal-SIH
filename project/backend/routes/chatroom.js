const {default: axios} = require("axios");

const router = require("express").Router();

router.post("/chats/authenticate",async(req,res) => {
    const {username,secret,first_name} = req.body;
    try {
        const r = await axios.put("https://api.chatengine.io/users/",
        {
            username:username,
            secret: secret,
            first_name: first_name,
        },{
            headers:{"private-key": "14518b21-4b19-4538-b0fd-5cc43ebb3a07"}
        })
        return res.status(r.status).json(r.data);
    } catch (error) {
        return res.send("Error");
    }
    return res.json({username: username,secret: "hi"});
});

module.exports = router;