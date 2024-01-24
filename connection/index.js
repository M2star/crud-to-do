const Task = require("../module/schema");

const allTask = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json({ tasks });
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ tasks: task?.title });
  } catch (error) {
    if (error.name === "ValidationError") {
      res.status(400).json({ error: error.message });
    } else {
      console.error("Error creating task:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
};

const removeTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      res.status(400).json({ error: "user not found" });
      return;
    }
    res.status(200).json({ massage: "remove successfuly" });
  } catch (error) {
    if (error.name === "ValidationError") {
      res.status(400).json({ error: error.message });
    } else {
      console.error("Error creating task:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
};
const fineOneTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;

    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      res.status(400).json({ error: "user not found" });
      return;
    }
    res.status(201).json({ tasks: task });
  } catch (error) {
    if (error.name === "ValidationError") {
      res.status(400).json({ error: error.message });
    } else {
      console.error("Error creating task:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
};
const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      res.status(400).json({ error: "user not found" });
      return;
    }
    res.status(201).json({ tasks: task });
  } catch (error) {
    if (error.name === "ValidationError") {
      res.status(400).json({ error: error.message });
    } else {
      console.error("Error creating task:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
};

module.exports = { allTask, createTask, removeTask, updateTask, fineOneTask };
