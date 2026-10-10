import express from "express"
import { searchLogic } from "../controllers/searchLogic.js";
const router = express.Router();

router.get("/" , searchLogic)

export default router