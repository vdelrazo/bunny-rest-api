import {Router} from "express"
import * as userController from "../controllers/user.controller"

const routerU = Router()

routerU.get("/", userController.findAllUsers);

routerU.post("/", userController.createUser);

export default routerU;