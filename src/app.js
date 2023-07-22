import express from "express";
import "../src/db/conn.js";
import http from "http";
import cors from "cors";
import router from "./routers/studentsDetais.js";
const app = express();
const server = http.createServer(app);

app.use(cors("*"));
app.use(express.json());
app.use(router);

const port = process.env.PORT || 8080;

// app.get("/", async (req, res) => {
//   res.send();
// });

server.listen(port, (err) => {
  if (!err) {
    console.log(`server running on http://localhost:${port}`);
  }
});
