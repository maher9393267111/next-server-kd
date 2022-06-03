import express from "express";

const router = express.Router();

import {  cookieverify } from "../middlewares/auth";
// controllers
import { register,login,logout ,currentUser,
    forgotPassword,
   // sendTestEmail,


} from "../controllers/auth";

router.post("/register", register);

router.post("/login", login);

router.get("/logout", logout);

router.get("/current-user", cookieverify, currentUser);

//router.get("/send-email", sendTestEmail);

router.post("/forgot-password", forgotPassword);


//export default router;

module.exports = router;
