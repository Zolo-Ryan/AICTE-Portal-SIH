const router = require("express").Router();
const Feedback = require("../models/homeFeedback.model");

router.post("/feedback-response",(req,res) => {
    const {username,email,subject,message} = req.body;
    const newFeedback = new Feedback({username,email,subject,message});

    newFeedback.save()
        .then(() => {
            res.redirect("/");
        })
        .catch(e => {
            console.log(e);
            return res.redirect("/");
        });
});

module.exports = router;