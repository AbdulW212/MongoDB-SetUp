// Schema: we create a blueprint for the model so we can export that format to our express server and eventually link it to our routes {CRUD operations}

const mongoose = require("mongoose")
const photoSchema =  new mongoose.Schema({
    title: String,
    body:  String
})

const Photo = mongoose.model("Photo", photoSchema)

module.exports = Photo

