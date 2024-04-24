const mongoose = require("mongoose")
const hobbySchema =  new mongoose.Schema({
    title: String,
    description:  String
})

const Hobby = mongoose.model("Hobby", hobbySchema)

module.exports = Hobby
