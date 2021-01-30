import { Router } from "express";
import * as taskController from "../controllers/task.controller";

const routerT = Router();

routerT.get("/", taskController.findAllTasks);

routerT.get("/:user", taskController.findTasksByUser);

routerT.post("/", taskController.createTask);

routerT.delete("/:id", taskController.deleteTask);

routerT.put("/:id", taskController.updateTask);

export default routerT;
