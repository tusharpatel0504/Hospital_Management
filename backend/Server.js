import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import userModel from "./models/user.js";
import userRouter from "./routes/userRoute.js";
import connectCloudinary from "./config/cloudinary.js";
const app = express();
const port = process.env.port || 4000;
connectDB();
connectCloudinary();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/user",userRouter)


app.listen(port,()=>{console.log(`server started at ${port}`)})