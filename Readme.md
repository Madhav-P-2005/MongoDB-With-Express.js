Here’s your updated `README.md` file, now including:

* A clear section on **Mongoose** and its usage
* Updated instructions for your `Mongoose-With-Express.js` setup
* Mention of your own project files (`ToDo.js`, `Mongoose-With-Express.js`)
* Maintained the structure and included proper credits

---

````markdown
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

## 🛠️ Project Setup: MongoDB with Express.js + Mongoose

### 📁 Files

* `Mongoose-With-Express.js` → Main server file using Express
* `models/ToDo.js` → Mongoose schema/model for ToDo items

### 🚀 Running the Project

```bash
npm install
node Mongoose-With-Express.js
```

Make sure MongoDB is running locally on default port `27017`.

### 📄 Example Endpoints

#### ➕ Create a ToDo

`GET /`
Creates a new ToDo document with random `days` and default values.

#### 📄 Read a ToDo

`GET /a`
Fetches one ToDo document and returns its `title` and `desc`.
Returns a `404` if no document is found.

---

## 📦 What is Mongoose?

**Mongoose** is an advanced MongoDB object modeling tool for Node.js.

### 🛠 Why Use Mongoose?

* Schema-based structure and validation
* Model-based interactions
* Middleware and hooks
* Built-in query builders

### 📌 Key Benefits

| Feature            | Mongoose               | MongoDB Native Driver |
| ------------------ | ---------------------- | --------------------- |
| Schema Support     | ✅ Yes                  | ❌ No                  |
| Middleware         | ✅ Yes                  | ❌ No                  |
| Easy Relationships | ✅ Populate, References | ❌ Manual              |
| Validation         | ✅ Built-in             | ❌ Manual              |

### 📦 Install Mongoose

```bash
npm install mongoose
```

## 🔄 CRUD Operations Summary

| Operation | Mongoose Method                      | Description                          |
| --------- | ------------------------------------ | ------------------------------------ |
| Create    | `save()`, `create()`                 | Add new document to a collection     |
| Read      | `find()`, `findOne()`                | Retrieve document(s) from collection |
| Update    | `updateOne()`, `findByIdAndUpdate()` | Modify existing document(s)          |
| Delete    | `deleteOne()`, `findByIdAndDelete()` | Remove document(s)                   |

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

## 🙌 Credits

Tutorial followed from **CodeWithHarry** — Haris Ali Khan
📺 [Sigma Web Development Course - MongoDB + Mongoose](https://www.youtube.com/watch?v=oMrKVEedpHg&list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w&index=94)

---

## 🔗 Resources

* 🧾 [Official MongoDB Manual](https://www.mongodb.com/docs/manual/)
* 📘 [Mongoose Docs](https://mongoosejs.com/docs/)
* 🛠️ [MongoDB Playground on MongoDB Atlas](https://www.mongodb.com/products/playground)
* 🖥️ [MongoDB Compass Download](https://www.mongodb.com/try/download/compass)