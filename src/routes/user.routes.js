import { Router } from "express";
import {userLogin, userLogout, userRegister}  from "../controllers/user.controllers.js";
import {upload} from "../middlewares/multer.middlewares.js";
import { verifyJWT }  from "../middlewares/Auth.middleware.js";

const router = Router();
router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  userRegister
);
//
router.route("/login").post(userLogin)
router.route("/logout").post(verifyJWT,userLogout)

export default router;
