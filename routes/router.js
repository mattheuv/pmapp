import express from "express";
export const router = express.Router();
import { wrongMsgRoute } from "../config/constants.js"
import UserRouter from "./user.router.js";

// Including Routers
const userRouter = new UserRouter

//we need to add user, cart, orders

router.use("/", userRouter.start())

// Wrong routes
router.get("**",(req,res)=>{
    res.status(200).json(wrongMsgRoute)
})
router.post("**",(req,res)=>{
    res.status(200).json(wrongMsgRoute)
})
router.delete("**",(req,res)=>{
    res.status(200).json(wrongMsgRoute)
})

