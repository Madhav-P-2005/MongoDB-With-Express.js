import mongoose from "mongoose";

import express from "express";

import {ToDo} from "./models/ToDo.js"

const conn = await mongoose.connect("mongodb://localhost:27017/");

// const express = require('express')

const app = express()

const port =3000

app.get('/' ,(req,res) =>{

   const todo = new ToDo({desc : "Description of this ToDo" , isDone : false , days : Math.floor(Math.random() * 45 + 5 * Math.random())})

   
   todo.save()
    res.end('Hello World !')
})


app.get('/a'  , async (req,res) =>{

   let todo =  await ToDo.findOne({})
   console.log(todo);

   if(!todo){
    return res.status(404).json({ error : "No ToDo found here "})
   }
   res.json({title : todo.title,desc : todo.desc})
})


app.listen(port , () =>[
    console.log(`Example app listening on port ${port}`)
])