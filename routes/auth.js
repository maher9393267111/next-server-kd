import express from "express";

const router = express.Router();

// controllers
import { register,login,logout } from "../controllers/auth";

router.post("/register", register);

router.post("/login", login);

router.get("/logout", logout);


//export default router;

module.exports = router;
