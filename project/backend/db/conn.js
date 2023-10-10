const mongoose = require("mongoose");

require("dotenv").config();

const mongoString = "mongodb+srv://root:rg7wurBTKJ1Yvt7n@atlascluster.xj0ldr5.mongodb.net/"
mongoose.connect(mongoString);

const connection = mongoose.connection;
connection.once("open",() => console.log("Database connected Successfully"));
// database not getting connected