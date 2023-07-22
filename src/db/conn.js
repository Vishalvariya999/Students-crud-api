import mongoose from "mongoose";
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
