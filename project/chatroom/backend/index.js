const express = require('express');
const app = express();
const cors = require("cors");
const port = 8000;
const path = require("path");
const { default: axios } = require('axios');

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors({origin:true}));
// app.set("view engine","hbs");
app.use(express.static("public"));
app.set("views",path.join(__dirname,"views"));

app.post("/authenticate",async(req,res) => {
    const {username,secret,fname} = req.body;
    console.log(username,secret,fname)
    try {
        const r = await axios.put("https://api.chatengine.io/users/",
        {
            username:username,
            secret: username,
            first_name: username,
        },{
            headers:{"private-key": "14518b21-4b19-4538-b0fd-5cc43ebb3a07"}
        })
        return res.status(r.status).json(r.data);
    } catch (error) {
        return res.status(error.status).json(error.response.data);
    }
    return res.json({username: username,secret: "hi"});
});
// app.get("/",(req,res) => {
//     return res.render("index");
// })
app.listen(port, () => console.log(`Example app listening on port ${port}!`))