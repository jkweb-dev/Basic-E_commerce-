import { Orderlogic } from "../controllers/orderlogic.js";
import express from "express";

const router = express.Router() ;


router.post("/" , Orderlogic)

export default router;