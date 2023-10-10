const jwt = require("jsonwebtoken");
const secret = "zerk";

const setUser = (user) => {
    return jwt.sign({
        _id: user._id,
        email: user.email,
    },secret);
}

const getUser = (token) => {
    if(!token) return null;

    try{return jwt.verify(token,secret)}
    catch(e){return null};
}

module.exports = {
    setUser,
    getUser
}