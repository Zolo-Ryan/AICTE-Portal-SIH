const {v4: uuidv4} = require("uuid");
const UserAdmin = require("../models/userAdmin.model");
const { setUser } = require("../service/auth");

const handleLogin = async (req,res) => {
    const {email,password,username} = req.body;
    const admin = await UserAdmin.findOne({username,email,password});
    if(!admin)
        return res.redirect("loginadmin")
    // const sessionID = uuidv4();
    const token = setUser(admin);
    res.cookie("uida",token,{maxAge: 24*60*60*1000});//oneday maxage
    if(req.cookies?.uid)
        res.clearCookie('uid');
    return res.redirect("/dashboard");
};

module.exports = handleLogin;