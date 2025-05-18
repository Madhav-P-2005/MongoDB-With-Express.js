# 📘 MongoDB & Express.js — A Complete Guide

## 🔍 What is MongoDB?

MongoDB is a **NoSQL database** that stores data in the form of **documents** (similar to JSON objects).  
It uses a **JavaScript-like syntax** and is ideal for handling large volumes of unstructured or semi-structured data.

---

## 🖥️ MongoDB Compass

A **GUI tool** to visually manage your MongoDB databases and collections.  
Use it to:
- Create databases and collections
- Insert, view, update, delete documents
- Run queries without using the shell

---

## 📂 Key Concepts

| Term              | Description                                                                 |
|-------------------|-----------------------------------------------------------------------------|
| **Database**      | Logical container for collections. Example: `Sigma`                         |
| **Collection**    | Like a table in SQL. Contains multiple documents. Example: `Courses`        |
| **Document**      | A single record in JSON-like format inside a collection.                    |
| **MongoDB Shell** | CLI tool to interact with MongoDB directly using commands.                  |

---

## 🧪 Basic MongoDB Shell Commands

```js
// List all databases
show databases;

// Switch to or create a database
use CrudDb;

// List all collections in current database
show collections;

// View all documents inside 'courses' collection
db.courses.find();

// Insert a single document into 'courses'
db.courses.insertOne({ name: "JavaScript" });
````

---

## 🛠️ Creating a Playground for Practice

Refer to `crud.mongodb.js` for practical examples.

You will learn how to:

* Create a database and collection
* Insert one or many documents
* Find specific records
* Update fields in documents
* Delete one or many documents

---

## 🔄 CRUD Operations Summary

| Operation | MongoDB Method                | Description                            |
| --------- | ----------------------------- | -------------------------------------- |
| Create    | `insertOne()`, `insertMany()` | Add new document(s) to a collection    |
| Read      | `find()`, `findOne()`         | Retrieve document(s) from a collection |
| Update    | `updateOne()`, `updateMany()` | Modify existing document(s)            |
| Delete    | `deleteOne()`, `deleteMany()` | Remove document(s) from collection     |

---

## 📚 Useful MongoDB Operators

| Operator      | Use Case                          |
| ------------- | --------------------------------- |
| `$set`        | Update a field’s value            |
| `$gt`, `$lt`  | Greater than, Less than filtering |
| `$and`, `$or` | Combine multiple query conditions |
| `$in`, `$nin` | Match values in / not in an array |

🧠 Learn more: [MongoDB Query Operators](https://www.mongodb.com/docs/manual/reference/operator/query/)

---

## 🔗 Resources

* 🧾 [Official MongoDB Manual](https://www.mongodb.com/docs/manual/)
* 🛠️ [MongoDB Playground on MongoDB Atlas](https://www.mongodb.com/products/playground)
* 🖥️ [MongoDB Compass Download](https://www.mongodb.com/try/download/compass)

---

## 🙌 Credits

Tutorial followed from **CodeWithHarry** — Haris Ali Khan
📺 [Sigma Web Development Course](https://www.youtube.com/watch?v=oMrKVEedpHg&list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w&index=94)