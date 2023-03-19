const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const notes = require("./data/notes");
const dotenv = require("dotenv");
var cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
dotenv.config();

app.use(cors());
connectDB();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("api is running");
});

app.get("/api/notes", (req, res) => {
  // console.log(req);
  // console.log(res);
  res.json(notes);
});

app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
