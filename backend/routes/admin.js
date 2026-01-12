import express from "express"
import { adminLogin } from "../controllers/userController.js";
import { AddDoc } from "../controllers/adminController.js";
import upload from "../middlewares/multer.js";

const adminRouter = express.Router();

adminRouter.post("/login",adminLogin)
adminRouter.post("/add-doctor",upload.single("DocImage") ,AddDoc)

export default adminRouter;