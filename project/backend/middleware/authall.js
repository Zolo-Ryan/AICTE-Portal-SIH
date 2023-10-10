const { getUser } = require("../service/auth");

async function restrictToLoggedInOnly(req,res,next){
    const userUid = req.cookies?.uida || req.cookies?.uid;

    if(!userUid) return res.redirect("/login");

    const user = getUser(userUid);
    if(!user) return res.redirect("/login");

    req.user = user;
    next();
}

module.exports = restrictToLoggedInOnly;