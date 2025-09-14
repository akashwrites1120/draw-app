import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "./config.js";

export function middleware(req:Request, res:Response, next:NextFunction){
    const header = req.headers["authorization"] ?? "";

    const decoded = jwt.verify(header, JWT_SECRET)

    if(decoded){
        //@ts-ignore: TODO: fix this
        req.userId = decoded.userId
        next()
    }else{
        res.status(4003).json({
            message: "Unauthorized"
        })
    }
}