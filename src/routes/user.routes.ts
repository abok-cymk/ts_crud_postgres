import express from "express";
import * as UserController from "../controllers/user.controller";


const router = express.Router();

router.post("/", UserController.create);
router.get("/", UserController.getAll);
// router.get("/:id", UserController.getOne);
router.put("/:id", UserController.update);
router.delete("/:id", UserController.remove);

export default router;
