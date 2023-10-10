const {v4: uuidv4} = require("uuid");
const UserEmail = require("../models/user.model");
const { setUser } = require("../service/auth");

const handleLogin = async (req,res) => {
    const {email,password,username} = req.body;
    const user = await UserEmail.findOne({username,email,password});
    if(!user)
        return res.redirect("login")
    // const sessionID = uuidv4();
    const token = setUser(user);
    res.cookie("uid",token);
    if(req.cookies?.uida)
        res.clearCookie("uida");
    return res.redirect("/dashboard");
};

module.exports = handleLogin;