const Task = require("../models/schema")
const createData = async (req, res) => {
  try {
    console.log("Body:", req.body);
    const task = await Task.create(req.body);

    res.status(201).json(task);
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: err.message,
      error: err,
    });
  }
};
module.exports = {createData}