const express = require("express");
const router = new express.Router();
const StudentDetails = require("../models/students");

//Post data
router.post("/students", async (req, res) => {
  try {
    const Stud_Data = new StudentDetails(req.body);
    console.log("Stud_Data", req.body);
    const insertStudent_Data = await Stud_Data.save();
    res.status(201).send(insertStudent_Data);
  } catch (err) {
    res.status(400).send(err);
  }
});

//Get data
router.get("/students", async (req, res) => {
  try {
    const getStudentData = await StudentDetails.find({});
    res.send(getStudentData);
  } catch (err) {
    res.status(400).send(err);
  }
});

//Get data rno wise
router.get("/students/:rno", async (req, res) => {
  try {
    const rno = req.params.rno;
    const getStudent = await StudentDetails.find({ rno: rno });
    res.send(getStudent);
  } catch (err) {
    res.status(400).send(err);
  }
});

//Update data rno wise
router.patch("/students/:rno", async (req, res) => {
  try {
    const rno = req.params.rno;
    const getStudent = await StudentDetails.findOneAndUpdate(
      { rno: rno },
      req.body,
      { new: true }
    );
    res.send(getStudent);
  } catch (err) {
    res.status(500).send(err);
  }
});

//Delete data rno wise
router.delete("/students/:rno", async (req, res) => {
  try {
    const rno = req.params.rno;
    const getStudent = await StudentDetails.findOneAndDelete({ rno: rno });
    res.send(getStudent);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
