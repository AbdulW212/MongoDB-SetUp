require("dotenv").config();
// -----> allows .env
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const connectToDb = require("./config/connectToDb.js");
// This pulls our Mongoose connection into application

const Note = require("./models/note");
const notesController = require("./controllers/notesController.js");
const User = require("./models/user");
const usersController = require("./controllers/usersController.js");  
const Photo = require("./models/photo");  
const photosController = require("./controllers/photosController.js");
//Import the Models and their controller

const cors = require("cors");
// ---> Recieving reqs on cross-origins **
app.use(express.json());
// Express doesnt naturally convert our data to json
app.use(cors());
connectToDb();
// This initializes our connectToDB() function
// -------------------------------------------------reQ


app.get("/", (req, res) => {
  res.send("This is a Landing Page");
});

// Obj: We want to establish CRUD routes for our Notes Model
app.get("/notes", notesController.fetchAllNotes);
// -----------------> GET all Notes - [Read]
app.get("/notes/:id", notesController.fetchNote);
// -----------------> GET a Specific Note by ID - [Read]
app.post("/notes", notesController.createNote);
// -----------------> Create a Notes - [Create / POST]
app.put("/notes/:id", notesController.updateNote);
// -----------------> Update a Specific Note - [Update]
app.delete("/notes/:id", notesController.deleteNote);
// -----------------> Delete a Specific Note - [Delete]
//-----------------------------------------------Note routes

// Obj: We want to establish CRUD routes for our Notes Model
app.get("/photos", photosController.fetchAllPhotos);
// -----------------> GET all Photos - [Read]
app.get("/photos/:id", photosController.fetchPhoto);
// -----------------> GET a Specific Photo by ID - [Read]
app.post("/photos", photosController.createPhoto);
// -----------------> Create a Photos - [Create / POST]
app.put("/photos/:id", photosController.updatePhoto);
// -----------------> Update a Specific Photo - [Update]
app.delete("/photos/:id", photosController.deletePhoto);
// -----------------> Delete a Specific Photo - [Delete]
// -------------------------------------------------Photo routes

// Obj: We want to establish CRUD routes for our Notes Model
app.get("/users", usersController.fetchAllUsers);
// -----------------> GET all Users - [Read]
app.get("/users/:id", usersController.fetchUser);
// -----------------> GET a Specific User by ID - [Read]
app.post("/users", usersController.createUser);
// -----------------> Create a Users - [Create / POST]
app.put("/users/:id", usersController.updateUser);
// -----------------> Update a Specific User - [Update]
app.delete("/users/:id", usersController.deleteUser);
// -----------------> Delete a Specific User - [Delete]
// -------------------------------------------------User routes

// --------------------------------------------------------------Routing


app.listen(PORT, () => {
  console.log(`Express Server Listening on port num: ${PORT}`);
});
// --------------------------------------------------------------Servere