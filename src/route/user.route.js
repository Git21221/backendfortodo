import { Router } from "express";
import cors from "cors";
import {
  addTodo,
  alltodos,
  deleteProfile,
  editProfile,
  getCurrentUser,
  loginUser,
  logout,
  registerUser,
} from "../controller/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router.route("/register").post(cors(), registerUser);
router.route("/login").post(cors(), loginUser);
router.route("/getCurrentuser").get(cors(), verifyJWT, getCurrentUser);
router.route("/addTodo").post(cors(), verifyJWT, addTodo);
router.route("/alltodos").get(cors(), verifyJWT, alltodos);
router
  .route("/editProfile")
  .post(cors(), upload.single("avatar"), verifyJWT, editProfile);
router.route("/deleteProfile").get(cors(), verifyJWT, deleteProfile);
router.route("/logout").get(cors(), verifyJWT, logout);

export default router;
