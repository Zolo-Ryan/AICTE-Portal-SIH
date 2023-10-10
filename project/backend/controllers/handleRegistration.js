const UserEmail = require("../models/user.model");

function verify(a,b,c,d){
    if(a !== b) return false;
    if(c !== d) return false;
    return true;
}
async function handleRegistration(req,res){
    const {username,regisid,instname,instid,phone,email,password,cpassword,cemail,textbox,deptt,position} = req.body;
    // console.log(req.user);
    const createdBy = req.user._id;
    const correct = verify(email,cemail,password,cpassword);
    if(!correct) return res.redirect("/register-new-user");
    // make verification checks on recieving data
    const newUserEmail = new UserEmail({username,regisid,instname,instid,phone,email,password,textbox,deptt,position,createdBy});
    // console.log(newUserEmail);
    await newUserEmail.save()
        .then(() => res.send("Data added Successfully!"))
        .catch(e => console.log(e));
}

module.exports = handleRegistration;