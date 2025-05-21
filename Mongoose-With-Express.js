// Importing required modules
import mongoose from "mongoose";  1 // Mongoose is used to interact with MongoDB
import express from "express";    // Express is a web framework for Node.js

import { ToDo } from "./models/ToDo.js"; // Importing the ToDo model from the models folder

// Connecting to the local MongoDB server
const conn = await mongoose.connect("mongodb://localhost:27017/");

// Initializing the express application
const app = express();

// Defining the port number
const port = 3000;


// Route :-  Root endpoint

// Creates and saves a new ToDo item to the database
app.get("/", (req, res) => {
  const todo = new ToDo({
    desc: "Description of this ToDo",    // Description of the task
    isDone: false,                 // Marked as not done initially
    days: Math.floor(Math.random() * 45 + 5 * Math.random()),      // Random number of days (somewhat randomized)
  });

  todo.save();           // Save the new ToDo to the MongoDB collection
  res.end("Hello World !");      // Send a simple response
});



// Route: /a endpoint
// Fetches a ToDo item from the database and returns it
app.get("/a", async (req, res) => {
  let todo = await ToDo.findOne({}); // Find any one ToDo item from the collection
  console.log(todo);        // Log it to the console for debugging

  // If no ToDo is found, return a 404 error response
  if (!todo) {
    return res.status(404).json({ error: "No ToDo found here " });
  }


  // If found, return selected fields as JSON
  res.json({ title: todo.title, desc: todo.desc });
});


// Start the Express server and listen on the defined port
app.listen(port, () => [console.log(`Example app listening on port ${port}`)]);