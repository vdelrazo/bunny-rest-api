import Task from "../models/Task";
import { getPagination } from "../libs/getPagination";

export const findAllTasks = async (req, res) => {
  try {
    const { size, page } = req.query;
    const { limit, offset } = getPagination(page, size);

    const tasks = await Task.paginate({}, { offset, limit });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({
      message:
        error.message || "Something went wrong while retrieving the tasks",
    });
  }
};

export const findTasksByUser = async (req, res) => {
  try {
    const tasksByUser = await Task.find({ user_id: req.params.user });
    res.json(tasksByUser);
  } catch (error) {
    res.status(500).json({
      message:
        error.message ||
        "Something went wrong while retrieving the tasks by user",
    });
  }
};

export const createTask = async (req, res) => {
  if (!req.body.description) {
    return res
      .status(400)
      .send({ message: "Cannot create a task without a description" });
  }
  try {
    const newTask = new Task({
      description: req.body.description,
      state: req.body.state,
      user_id: req.body.user_id,
    });
    const taskSaved = await newTask.save();
    res.json(taskSaved);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something went wrong while creating a task",
    });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const deletedData = await Task.findByIdAndDelete(req.params.id);
    res.json({ message: `${deletedData.description} was succesfully deleted` });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something went wrong while deleting the task",
    });
  }
};

export const updateTask = async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: `${updatedTask.description} was succesfully updated` });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something went wrong while updating the task",
    });
  }
};
