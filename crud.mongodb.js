// 📘 MongoDB CRUD Playground

// Step 1 :-  Create/Select a Database
use("CrudDb");

// Step 2 :-  Check if `db` object is working
console.log(db); // Prints the current DB context

// Step 3 :-  Create a Collection (like a table in SQL)
db.createCollection("courses");

/*

 Output :- 

{
  "ok": 1
}

*/


// Step 4 :-  Insert a Single Document (record)
db.courses.insertOne({
  name: "Madhav P",
  age: 19,
  college: "K.L.E P.C Jabins College",
  course: "BCA",
});


//  Step 5 :-  Insert Multiple Documents
db.courses.insertMany([
  {
    name: "Madhav P",
    age: 19,
    college: "K.L.E P.C Jabins College",
    course: "BCA",
  },
  {
    name: "Amruth Badi",
    age: 20,
    college: "Gogte College of Commerce",
    course: "BBA",
  },
  {
    name: "Sneha R",
    age: 21,
    college: "RPD College Belgaum",
    course: "BSc CS",
  },
  {
    name: "Kiran Joshi",
    age: 22,
    college: "KLS GIT Belgaum",
    course: "BE CSE",
  },
  {
    name: "Shreya Patil",
    age: 20,
    college: "BV Bhoomaraddi College Hubli",
    course: "BSc Mathematics",
  },
  {
    name: "Rohan Kulkarni",
    age: 23,
    college: "Christ University Bangalore",
    course: "BCom",
  },
  {
    name: "Anjali Hegde",
    age: 21,
    college: "Jain University Bangalore",
    course: "BCA",
  },
  {
    name: "Tejas Desai",
    age: 20,
    college: "MSRIT Bangalore",
    course: "BE ECE",
  },
  {
    name: "Pooja Nayak",
    age: 19,
    college: "SDM College Dharwad",
    course: "BSc IT",
  },
  {
    name: "Abhishek R",
    age: 22,
    college: "PES University Bangalore",
    course: "BTech AI",
  },
]);


//  Step 6 :-  Find Matching Documents (READ operation)
let a = db.courses.find({
  name: "Madhav P",
});


//  Count how many documents matched
console.log(a.count()); // ➤ Output: 1

//  Print matched documents as array
console.log(a.toArray()); // ➤ Shows full document(s) in array

//  Step 7 :-  Find a Single Document (Returns first match only)
let b = db.courses.findOne({
  name: "Madhav P",
});

console.log(b); // Correct usage — no need to call findOne() again

// Step 8 :-  Update One Document
db.courses.updateOne(
  { age: 19 }, //  Find document with age 19
  { $set: { age: 20 } } //  Set new value of age to 20
);

/*

 Output:
{
  "acknowledged": true,
  "insertedId": null,
  "matchedCount": 1,
  "modifiedCount": 1,
  "upsertedCount": 0
}

*/

// Step 9 :-  Update Many Documents (if needed)
db.courses.updateMany(
  {},    // Match all documents
  { $set: { active: true } } // ➕ Add new field `active: true` to all
);

// Step 10 :-  Delete One Document
db.courses.deleteOne({
  name: "Sneha R", // Delete document where name is Sneha R
});

// Step 11 :-  Delete Many Documents (e.g., delete all with course = "BCA")
db.courses.deleteMany({
  course: "BCA",
});

// 🔗 Reference Docs :-
// https://www.mongodb.com/docs/manual/reference/operator/query/