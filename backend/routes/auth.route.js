import express from "express";

// ******** Import controllers ***********
import { Sign_Up } from "../controlles/auth.controller.js";

const router = express.Router();

router.route("/signup").post(Sign_Up);

export default router;
