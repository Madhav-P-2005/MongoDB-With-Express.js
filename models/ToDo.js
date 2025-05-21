// Import mongoose to define the schema and model
import mongoose from "mongoose";


// Define a schema for the ToDo collection in MongoDB
const ToDoSchema = new mongoose.Schema({
  title: {
    type: String,      // Title must be a string
    required: true,    // Title is mandatory
    default: "Key",    // Default title if none is provided
  },
  desc: String,     // Description of the ToDo (optional)
  isDone: Boolean,  // Status of completion (true/false)
  days: Number,     // Number of days (can be used for due date or tracking)
});


// Export the model so it can be used in other files
export const ToDo = mongoose.model("ToDo", ToDoSchema);