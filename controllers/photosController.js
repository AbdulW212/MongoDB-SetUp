const Photo = require("../models/photo");

const fetchAllPhotos = async (req, res) => {
  // 1. Get all Notes from DB
  // 2. Send the notes back as a response
  const notes = await Photo.find();
  // --------------------------------(1)
  res.json({ photos: photos });
  // --------------------------------(2)
};

const fetchPhoto = async (req, res) => {
  // 1. Get id off the url
  // 2. Find the note assoc. w/ ID
  // 3.Send response with that note as the payload

  const photoId = req.params.id;
  // --------------------------------(1)
  const photo = await Photo.findById(photoId);
  // --------------------------------(2)
  res.json({ photo: photo });
  // --------------------------------(3)
};

const createPhoto = async (req, res) => {
  // 1. Get data from req.body
  // 2.Create note
  // 3. Respond with new copy of Note
  console.log(`BODY: ${req.body}`);
  const title = req.body.title;
  const body = req.body.body;
  // const {title,body} = req.body
  // --------------------------------(1)
  const photo = await Photo.create({
    title: title,
    body: body,
  });
  // --------------------------------(2)
  res.json({ photo: photo });
  // --------------------------------(3)
};

const updatePhoto = async (req, res) => {
  // 1. Get id off the url
  // 2. Get the data off the id
  // 3. Find and Update Note
  // 4. Retrieve updatedNote and send it as a response
  const photoId = req.params.id;
  // --------------------------------(1)
  const { title, body } = req.body;
  // --------------------------------(2)
  const photo = await Photo.findByIdAndUpdate(photoId, {
    title: title,
    body: body,
  });
  // --------------------------------(2)
  const updatedPhoto = await Photo.findById(photoId);
  res.json({ photo: updatedPhoto });
};

const deletePhoto = async(req, res) => {
    // 1. Get the id off the url
    // 2. Delete the record
    // 3. Send Response
    const photoId = req.params.id
  // --------------------------------(1)
   await Photo.deleteOne({
     _id: photoId 
    });
  // --------------------------------(2)
  res.json({success: "Record has been deleted successfully"})
}

module.exports = {
    fetchAllPhotos,
    fetchPhoto,
    createPhoto,
    updatePhoto,
    deletePhoto
}