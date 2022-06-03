import express from "express";

const router = express.Router();

import {  cookieverify } from "../middlewares/auth";
// controllers
import { register,login,logout ,currentUser } from "../controllers/auth";

router.post("/register", register);

router.post("/login", login);

router.get("/logout", logout);

router.get("/current-user", cookieverify, currentUser);

//export default router;

module.exports = router;
