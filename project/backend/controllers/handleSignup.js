const UserEmail = require("../models/user.model");

const handleSignup = (req,res) => {
    const {username,password,email,cpassword} = req.body;
    if(password !== cpassword)
        return res.redirect("signup")
    const newUser = new UserEmail({username,password,email});
    newUser.save()
        .then(() => res.send("Data added!"))
        .catch(err => res.status(400).json("Error: "+err));
};

module.exports = handleSignup;