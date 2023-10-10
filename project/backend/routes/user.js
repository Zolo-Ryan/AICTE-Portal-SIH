const handleLogin = require("../controllers/handleLogin");
const handleSignup = require("../controllers/handleSignup");

const router = require("express").Router();

// router.route("/signup-response").post(handleSignup);

router.route("/login-response").post(handleLogin);;

module.exports = router;