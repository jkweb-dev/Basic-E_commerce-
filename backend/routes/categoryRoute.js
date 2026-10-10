import express from "express"

import { Categorylogic } from "../controllers/categoryLogic.js"
const rout = express.Router()

rout.get("/" , Categorylogic)

export default rout