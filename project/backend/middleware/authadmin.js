const { getUser } = require("../service/auth");

async function restrictToLoggedInUserAdminOnly(req,res,next){
    const userUid = req.cookies?.uida;

    if(!userUid) return res.redirect("/loginadmin");

    const user = getUser(userUid);
    if(!user) return res.redirect("/loginadmin");

    req.user = user;
    // console.log(req.user);
    next();
}

module.exports = restrictToLoggedInUserAdminOnly;