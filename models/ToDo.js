import mongoose from "mongoose"


// Creation of a Database 
const ToDoSchema = new mongoose.Schema({
    title : {type : String , required : true , default : "Key"},
    desc : String,
    isDone : Boolean,
    days : Number


});

export const ToDo = mongoose.model('ToDo' , ToDoSchema)