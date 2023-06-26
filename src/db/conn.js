const mongoose = require("mongoose");
/* This code is establishing a connection to a MongoDB database using Mongoose, a popular Object Data
Modeling (ODM) library for MongoDB and Node.js. The `mongoose.connect()` method takes two arguments:
the first argument is the URL of the MongoDB database to connect to, and the second argument is an
options object that specifies options for the connection. */
mongoose
  .connect("mongodb://localhost:27017/Test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    // console.log("res", res);
    console.log("Connection successfully.");
  })
  .catch((err) => {
    console.log("err", err);
    console.log("Connection error");
  });
