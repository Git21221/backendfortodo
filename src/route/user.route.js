import { Router } from "express";
import {
  addTodo,
  alltodos,
  deleteProfile,
  editProfile,
  editTodo,
  getCurrentUser,
  loginUser,
  logout,
  refreshAccessToken,
  registerUser,
} from "../controller/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/getCurrentuser").get(verifyJWT, getCurrentUser);
router.route("/addTodo").post(verifyJWT, addTodo);
router.route("/alltodos").get(verifyJWT, alltodos);
router
  .route("/editProfile")
  .post(upload.single("avatar"), verifyJWT, editProfile);
router.route("/deleteProfile").get(verifyJWT, deleteProfile);
router.route("/logout").get(verifyJWT, logout);
router.route("/editTodo").post(verifyJWT, editTodo);
router.route("/refresh").get(refreshAccessToken);

export default router;
