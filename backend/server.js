const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const { getData } = require("./controllers/getData");
const { createData } = require("./controllers/createData");
const { getSingleData } = require("./controllers/getSingleData");
const { updateData } = require("./controllers/updateData");
const { deleteData } = require("./controllers/deleteData");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.get("/tasks", getData);
app.post("/tasks", createData);
app.get("/tasks/:id", getSingleData);
app.put("/tasks/:id", updateData);
app.delete("/tasks/:id", deleteData);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});