const Hobby = require("../models/hobby");

const fetchAllHobbys = async (req, res) => {
  const hobbies = await Hobby.find();
  res.json({ hobbies: hobbies });
};

const fetchHobby = async (req, res) => {
  const hobbyId = req.params.id;
  const hobby = await Hobby.findById(hobbyId);
  res.json({ hobby: hobby });
};

const createHobby = async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const hobby = await Hobby.create({
    title: title,
    description: description,
  });
  res.json({ hobby: hobby });
};

const updateHobby = async (req, res) => {
  const hobbyId = req.params.id;
  const { title, description } = req.body;
  await Hobby.findByIdAndUpdate(hobbyId, {
    title: title,
    description: description,
  });
  const updatedHobby = await Hobby.findById(hobbyId);
  res.json({ hobby: updatedHobby });
};

const deleteHobby = async (req, res) => {
  const hobbyId = req.params.id;
  await Hobby.deleteOne({
    _id: hobbyId 
  });
  res.json({ success: "Hobby has been deleted successfully" });
};

module.exports = {
  fetchAllHobbys,
  fetchHobby,
  createHobby,
  updateHobby,
  deleteHobby
};