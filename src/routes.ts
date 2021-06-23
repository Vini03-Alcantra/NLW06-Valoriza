import {Router} from "express";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";

const router = Router();

const createTagController = new CreateTagController();
const createUserController = new CreateUserController();

router.post("/users", createUserController.handle)
router.post("/tags", createTagController.handle)

export {router}
