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

const PORT = process.env.PORT || 8080;
// const PORT =
//   process.env.STATUS === "production"
//     ? process.env.PRO_PORT
//     : process.env.TEST_PORT;

// app.get("/", async (req, res) => {
//   res.send();
// });

server.listen(PORT, (err) => {
  if (!err) {
    console.log(`server running on http://localhost:${PORT}`);
  }
});
