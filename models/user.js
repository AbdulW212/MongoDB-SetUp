// Schema: we create a blueprint for the model so we can export that format to our express server and eventually link it to our routes {CRUD operations}

const mongoose = require("mongoose")
const userSchema =  new mongoose.Schema({
    title: String,
    body:  String
})

const User = mongoose.model("User", userSchema)

module.exports = User

