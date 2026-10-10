import messageLogic from "../controllers/MessagesLogic.js";
import express from "express";
const router = express.Router() ;


router.post("/" , messageLogic)

export default router;