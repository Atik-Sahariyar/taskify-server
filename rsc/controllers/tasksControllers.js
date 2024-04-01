const Tasks = require("../models/TasksModel");


// get my tasks by email 
exports.getMyTasks = async (req, res) => {
  try {
    const email = req?.params?.email;
    const allTasks = await Tasks.find({aouthorEemail: email});

    const todoTasks = allTasks?.filter((item) => item?.status === "todo");
    const ongoingTasks = allTasks?.filter((item) => item?.status === "ongoing");
    const completedTasks = allTasks?.filter((item) => item?.status === "completed");
    
    res.send({allTasks, todoTasks, ongoingTasks, completedTasks})
  } catch (error) {
    console.error("Error getting my tasks data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


// get one task by id
exports.getOneTask = async (req, res) => {
  try {
    const result = await Tasks.findById(req?.params?.id);
    res.send(result)
  } catch (error) {
    console.error("Error getting task data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


// create a new task
exports.postNewTask = async (req, res) => {
  try {
    const task = req?.body;
    const existingTask = await Tasks.findOne({ title: task?.title});
    if (existingTask) {
      return res.send({ message: "task already exists", insertedId: null });
    }
    const newTask = new Tasks(req?.body);
    const result = await newTask.save();
    res.send(result)
  } catch (error) {
    console.error("Error post task data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// update axisting task by id
exports.updateTask = async (req, res) => {
  try {
    const result = await Tasks.findByIdAndUpdate(req?.params?.id, req?.body, { new: true});
    res.send(result)
  } catch (error) {
    console.error("Error update data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// delete a taks by id
exports.deleteTask = async (req, res) => {
  try {
    const result = await Tasks.findByIdAndDelete(req?.params?.id);
    res.send(result)
  } catch (error) {
    console.error("Error delete task data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
