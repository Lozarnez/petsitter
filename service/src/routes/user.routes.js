import { Router } from "express";
import { createUser, getUsers, updateUser, userLogin } from "../controllers/user.controller.js";

const router = Router();

router.post("/", createUser);
router.get("/", getUsers);
router.put("/:id", updateUser);
router.post("/login", userLogin);

export default router;
