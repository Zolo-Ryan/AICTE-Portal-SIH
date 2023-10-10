const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const newFeedback = new Schema({
    username: {type: String},
    email: {type: String},
    subject: {type: String,required: true},
    message: {type: String,required: true},
},{timestamps: true});

const Feedback = mongoose.model("Feedback",newFeedback);

module.exports = Feedback;