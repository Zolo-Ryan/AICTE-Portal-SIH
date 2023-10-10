const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {type: String, required: true,minlength: 3},
    email: {type: String, required: true},
    password: {type: String, required: true},
    phone: {type: Number, required: true},
    textbox: {type: String},
    regisid: {type: Number, required: true,unique: true},
    instname: {type: String, required: true},
    instid: {type: Number, required: true},
    deptt: {type: String, required: true},
    position: {type: String, required: true},
    createdBy: {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: "admin",
    }
},{timestamps: true});

const UserEmail = mongoose.model("AICTEUsers",userSchema);
module.exports = UserEmail;
