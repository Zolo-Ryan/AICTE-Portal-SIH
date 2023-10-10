const express = require("express");
const app = express();
const path = require("path");
const userRouter = require("../routes/user");
const chatroomRouter = require("../routes/chatroom");
const userAdminRouter = require("../routes/useradmin");
const feedbackRouter = require("../routes/feedback");
const profileRouter = require("../routes/profile");
const cookieParser = require("cookie-parser");
const upload = require("express-fileupload");
const restrictToLoggedInUserOnly = require("../middleware/auth");
const {uploadFile} = require("../service/fileHandling");
const cors = require("cors");
const hbs = require("hbs");
const restrictToLoggedInUserAdminOnly = require("../middleware/authadmin");
const restrictToLoggedInOnly = require("../middleware/authall");
const {default: axios} = require("axios");

require("../db/conn");

const port = 5000;

const template_path = path.join(__dirname,"../template/views");
const partials_path = path.join(__dirname,"../template/partials");

app.set("view engine","hbs");
app.set("views",template_path);
app.use(express.static("public"));
app.use(cookieParser());
app.use(upload());
hbs.registerPartials(partials_path)

app.use(express.urlencoded({extended: false}));
app.use("/",userRouter);
app.use("/",userAdminRouter);
app.use("/",feedbackRouter);
app.use("/",profileRouter);
//for chat room
app.use("/",chatroomRouter);
app.use(cors({origin: true}));
app.use(express.json());

app.get("/",(req,res) =>{
    return res.render("index");
});
// app.get("/signup",(req,res) => {
//     return res.render("signup");
// })
app.get("/login",(req,res) => {
    return res.render("login");
});
app.get("/dashboard",restrictToLoggedInOnly,(req,res) => {
    if(req.cookies?.uid)
        return res.render("dashboard_user");
    else return res.render("dashboard_admin");
});
app.get("/analytics",restrictToLoggedInOnly,(req,res) => {
    return res.render("analytics");
});
app.get("/curriculum",restrictToLoggedInOnly,(req,res) => {
    return res.render("curriculum");
});
app.get("/repository",restrictToLoggedInOnly,(req,res) => {
    return res.render("repository");
})

app.get("/loginadmin",(req,res) => {
    return res.render("loginadmin");
})
app.get("/registered-users",restrictToLoggedInUserAdminOnly,(req,res) => {
    return res.render("registered_users");
})
app.get("/register-new-user",restrictToLoggedInUserAdminOnly,(req,res) => {
    return res.render("register_new_user");
});
app.get("/curriculum-tools",restrictToLoggedInUserOnly,(req,res) => {
    return res.render("ai-response.hbs");
});//remaining

app.get("/signout",(req,res) => {
    res.clearCookie("uid");
    res.clearCookie("uida");
    return res.redirect("/");
})

app.post("/fileupload",restrictToLoggedInOnly,async (req,res) => {
    if(req.files){
        console.log(req.files);
        //req.files contains all the files
        let file = req.files.file; // extracts the file
        let filename = file.name;
        console.log(filename);
        await file.mv('./uploads/'+filename,err => console.log(err));
        await uploadFile(file);
    }
    return res.send("File Uploaded Successfully!");
});


app.listen(port,() => console.log(`Server running on port: ${port}`))
