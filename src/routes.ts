import {Router} from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ensureAdmin } from "./middlewares.ts/ensureAdmin";

const router = Router();

const createTagController = new CreateTagController();
const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();

router.post("/users", createUserController.handle)
router.post("/tags", ensureAdmin, createTagController.handle)
router.post("/login", authenticateUserController.handle)

export {router}
