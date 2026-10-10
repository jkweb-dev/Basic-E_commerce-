import express from "express"
import router from "./routes/productRoutes.js"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import messageRoute from "./routes/messagesRoute.js"
import sea from "./routes/searchRoute.js"
import routers from "./routes/orderRoute.js"
import cors from "cors"
import rout from "./routes/categoryRoute.js"
dotenv.config()

const app = express()

connectDB();

app.use(express.json())
app.use(cors())

app.use("/products" , router)
app.use("/messages" , messageRoute )
app.use("/categories",rout)
app.use("/search" , sea)
app.use("/orders" ,routers)

app.listen(process.env.PORT || 5000, () => console.log("Running..."))