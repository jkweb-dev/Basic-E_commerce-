import { productLogic } from "../controllers/Productlogic.js";
import { shopCategory } from "../controllers/Productlogic.js";
import { newArrival } from "../controllers/Productlogic.js";
import productdetails from "../controllers/productdetails.js";
import express from "express"
const router = express.Router();

router.get("/featured" , productLogic)
router.get("/shopbycategory" ,shopCategory )
router.get("/newarrival" , newArrival)
router.get("/" , productdetails)

export default router