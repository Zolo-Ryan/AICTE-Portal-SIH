const router = require("express").Router();
const handleAdminLogin = require("../controllers/handleAdminLogin")
const handleRegistration = require("../controllers/handleRegistration");
const restrictToLoggedInUserAdminOnly = require("../middleware/authadmin");

router.post("/loginadmin-response",handleAdminLogin);

router.post("/register-new-user-response",restrictToLoggedInUserAdminOnly,handleRegistration);

module.exports = router;