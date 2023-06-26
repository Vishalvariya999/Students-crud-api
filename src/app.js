const express = require("express");
require("../src/db/conn");
const StudentDetails = require("../src/models/students");
const router = require("./routers/studentsDetais");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(router); 
// app.get("/", async (req, res) => {
//   res.send();
// });

app.listen(port, () => {
  console.log("port :>>", `${port}`);
});
