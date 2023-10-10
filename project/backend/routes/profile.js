const restrictToLoggedInOnly = require("../middleware/authall");
const UserEmail = require("../models/user.model");
const router = require("express").Router();

router.get("/profile",restrictToLoggedInOnly, async (req,res) => {
    if(req.cookies?.uid){
        const _id = req.user._id;
        const user = await UserEmail.findOne({_id});
        console.log(user);
        //now user contains all the data from the database
        return res.render("profile");
    }
    else
        return res.render("profile_admin")
});

module.exports = router;